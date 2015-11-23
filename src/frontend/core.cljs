(ns frontend.core
  (:require [frontend.devtools :as devtools]
            [frontend.todos :as todos]
            [frontend.persistence-middleware :as persistence]
            [reagent.core :as r]
            [hodgepodge.core :as hp]
            [goog.events]
            [goog.history.EventType :as EventType])
  (:import goog.history.Html5History))

(enable-console-print!)

;;;;;;;;;;;;;;;;;;;;;;;; App
; defonce is needed for hotloading
(defonce history (doto (Html5History.)
                   (.setEnabled true)))

(defn main
  []
  (println "Hi.")

  (let [storage hp/local-storage
        [_ todos-initial-signal :as todos-initial] (todos/init)
        app (devtools/connect todos-initial
                              todos/view-model
                              todos/view
                              (-> todos/control
                                  (persistence/wrap-control todos-initial-signal storage :model nil))
                              (-> todos/reconcile
                                  (persistence/wrap-reconcile storage :model nil))
                              storage)]
    ; clear listeners in case of hotloading
    (goog.events/removeAll history)

    ; start routing
    (goog.events/listen history EventType/NAVIGATE #((:dispatch-signal app) [:component [:on-navigate (.-token %)]]))

    ; use :component-initial to notify that this signal should be bypassed when debug session is loaded from storage
    ((:dispatch-signal app) [:component-initial [:on-navigate (.getToken history)]])

    ; render
    (r/render-component [(:view app)] (. js/document (getElementById "root")))
    app))

; to be accessed from REPL
(def app (main))

;;;;;;;;;;;;;;;;;;;;;;;; Figwheel stuff
(defn on-js-reload
  []
  #_(. js/console clear))