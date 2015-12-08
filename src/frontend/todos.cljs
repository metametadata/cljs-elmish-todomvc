; TodoMVC component
(ns frontend.todos
  (:require [cljs.core.match :refer-macros [match]]
            [reagent.core :as r]
            [com.rpl.specter :as s]))

;;;;;;;;;;;;;;;;;;;;;;;; Model
(defn -init-todo
  [id title]
  {:id             id
   :title          title
   :completed?     false
   :original-title ""
   :editing?       false})

(defn init
  []
  {:field      ""
   :visibility :all
   ; list of maps {:id :title :completed :editing}
   :todos      (list (-init-todo 1 "Finish this project")
                     (-init-todo 2 "Take a bath"))
   :next-id    3})

(defn -update-todos*
  [model pred f & args]
  (s/transform [:todos s/ALL pred]
               #(apply f % args)
               model))

(defn -update-todo
  [model id f & args]
  (apply -update-todos* model #(= (:id %) id) f args))

(defn -update-todos
  [model f & args]
  (apply -update-todos* model (constantly true) f args))

(defn -find-todo
  [model id]
  (->> (:todos model)
       (filter #(= (:id %) id))
       first))

(defn -remove-todos
  [model pred]
  (update model :todos #(remove pred %)))

(defn -remove-todo
  [model id]
  (-remove-todos model #(= (:id %) id)))

;;;;;;;;;;;;;;;;;;;;;;;; Control
(def -visibility-spec
  [{:key :all :title "All" :href "#" :token ""}
   {:key :active :title "Active" :href "#/active" :token "/active"}
   {:key :completed :title "Completed" :href "#/completed" :token "/completed"}])

(defn new-control
  [history]
  (fn control
    [_model_ signal dispatch]
    (match signal
           :on-connect
           (do
             ; dispatch the current route
             (dispatch [:navigate (.getToken history)])

             (dispatch :sample-action))

           ; this signal must come from the component owner which listens to history events
           [:on-navigate token] (dispatch [:navigate token])

           [:on-update-field val] (dispatch [:update-field val])
           :on-add (dispatch :add)
           [:on-toggle id] (dispatch [:toggle id])
           :on-toggle-all (dispatch :toggle-all)
           [:on-start-editing id] (dispatch [:start-editing id])
           [:on-stop-editing id] (dispatch [:stop-editing id])
           [:on-cancel-editing id] (dispatch [:cancel-editing id])
           [:on-update-todo id val] (dispatch [:update-todo id val])
           [:on-remove id] (dispatch [:remove id])
           :on-clear-completed (dispatch :clear-completed))))

;;;;;;;;;;;;;;;;;;;;;;;; Reconcile
(defn new-reconcile
  [history]
  (fn reconcile
    [model action]
    (match action
           ; required be devtools
           :dev-identity model

           ; do nothing, only for a demo
           :sample-action model

           ;;;;;
           ; Actions must be pure, but this is an exception to the rule:
           ; we need to update the address bar because action could have come from the devtools during replay.
           ; Ideally, address bar should behave kinda like another reactjs input, it's what we try to simulate here.
           ;;;;;
           [:navigate token]
           (do
             (println "    token =" (pr-str token))

             ; only update address bar when its value differs from incoming token
             ; otherwise, navigation event will be triggered leading to infinite recursion error
             (when-not (= token (.getToken history))
               (println "      REPLACING TOKEN TO" (pr-str token))
               (.replaceToken history token))

             (if-let [match (->> -visibility-spec
                                 (filter #(= (:token %) token))
                                 first)]
               (do
                 (println "      route match =" (pr-str match))
                 (assoc model :visibility (:key match)))

               model))

           [:update-field val]
           (assoc model :field val)

           :add
           (let [title (clojure.string/trim (:field model))]
             (if (clojure.string/blank? title)
               model
               (-> model
                   (assoc :field "")
                   (update :next-id inc)
                   (update :todos concat [(-init-todo (:next-id model) title)]))))

           [:toggle id]
           (-update-todo model id update :completed? not)

           :toggle-all
           (let [all-completed? (every? :completed? (:todos model))]
             (-update-todos model assoc :completed? (not all-completed?)))

           [:start-editing id]
           (-> model
               (-update-todos #(assoc % :editing? (= (:id %) id)))
               (-update-todo id #(assoc % :original-title (:title %))))

           [:stop-editing id]
           (let [title (-> (-find-todo model id)
                           :title
                           clojure.string/trim)]
             (if (clojure.string/blank? title)
               (-remove-todo model id)
               (-update-todos model #(assoc % :editing? false
                                              :original-title ""))))

           [:cancel-editing id]
           (-update-todo model id #(assoc % :editing? false
                                            :title (:original-title %)
                                            :original-title ""))

           [:update-todo id val]
           (-update-todo model id assoc :title val)

           [:remove id]
           (-remove-todo model id)

           :clear-completed
           (-remove-todos model :completed?))))

;;;;;;;;;;;;;;;;;;;;;;;; View model
(defn view-model
  [model]
  (-> model
      (select-keys [:field :visibility])
      (assoc :todos (filter (case (:visibility model)
                              :all (constantly true)
                              :active (complement :completed?)
                              :completed :completed?)
                            (:todos model))
             :has-todos? (-> (:todos model) count pos?)
             :active-count (->> (:todos model)
                                (filter (complement :completed?))
                                count)
             :has-completed-todos? (->> (:todos model)
                                        (filter :completed?)
                                        count
                                        pos?)
             :all-completed? (every? :completed? (:todos model)))))

;;;;;;;;;;;;;;;;;;;;;;;; View
(defn -enter-key?
  [e]
  (= (.-keyCode e) 13))

(defn -escape-key?
  [e]
  (= (.-keyCode e) 27))

(defn -view-header
  [field dispatch]
  [:header.header
   [:h1 "todos"]
   [:input.new-todo {:placeholder "What needs to be done?"
                     :value       field
                     :on-change   #(dispatch [:on-update-field (.. % -target -value)])
                     :on-key-down #(when (-enter-key? %) (dispatch :on-add))}]])

(defn -view-todo-input
  "Note that |editing?| is passed only to trigger :component-did-update to set focus on the state change."
  [_id_ _title_ _editing?_ _dispatch_]
  (r/create-class {:reagent-render
                   (fn [id title _editing?_ dispatch]
                     [:input.edit {:value       title
                                   :on-change   #(dispatch [:on-update-todo id (.. % -target -value)])
                                   :on-key-down #(cond (-enter-key? %) (dispatch [:on-stop-editing id])
                                                       (-escape-key? %) (dispatch [:on-cancel-editing id]))
                                   :on-blur     #(dispatch [:on-stop-editing id])}])

                   :component-did-update
                   (fn [this]
                     (.focus (r/dom-node this)))

                   ; this handler is needed in case app model is loaded from local storage
                   :component-did-mount
                   (fn [this]
                     (.focus (r/dom-node this)))}))

(defn -view-todo
  [{:keys [id title editing? completed?] :as _todo_} dispatch]
  [:li {:class (cond editing? "editing" completed? "completed")}
   [:div.view
    [:input.toggle {:type      "checkbox"
                    :checked   completed?
                    :on-change #(dispatch [:on-toggle id])}]

    [:label {:on-double-click #(dispatch [:on-start-editing id])} title]

    [:button.destroy {:on-click #(dispatch [:on-remove id])}]]

   [-view-todo-input id title editing? dispatch]])

(defn -view-todo-list
  [todos all-completed? dispatch]
  [:section.main
   [:input.toggle-all {:type      "checkbox"
                       :checked   all-completed?
                       :on-change #(dispatch :on-toggle-all)}]
   [:label {:for "toggle-all"} "Mark all as complete"]

   [:ul.todo-list
    (for [todo todos]
      ^{:key (:id todo)}
      [-view-todo todo dispatch])]])

(defn -view-footer
  [active-count has-completed-todos? visibility dispatch]
  [:footer.footer
   [:span.todo-count
    [:strong active-count] (str " " (if (= active-count 1) "item" "items")
                                " left")]
   [:ul.filters
    (for [{:keys [key title href]} -visibility-spec]
      ^{:key key}
      [:li
       [:a
        {:href  href
         :class (if (= visibility key) "selected")}
        title]])]

   (if has-completed-todos?
     [:button.clear-completed {:on-click #(dispatch :on-clear-completed)} "Clear completed"])])

(defn view
  [{:keys [field todos has-todos? active-count has-completed-todos? all-completed? visibility] :as _view-model_}
   dispatch]
  [:section.todoapp
   [-view-header field dispatch]

   (if has-todos?
     [:div
      [-view-todo-list todos all-completed? dispatch]
      [-view-footer active-count has-completed-todos? visibility dispatch]])])

;;;;;;;;;;;;;;;;;;;;;;;; Spec
(defn new-spec
  [history]
  {:init       init
   :view-model view-model
   :view       view
   :control    (new-control history)
   :reconcile  (new-reconcile history)})