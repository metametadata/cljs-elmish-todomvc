(ns frontend.core
  (:require [frontend.devtools :as devtools]
            [frontend.todos :as todos]
            [frontend.persistence-middleware :as persistence]
            [reagent.core :as r]
            [hodgepodge.core :as hp]
            [goog.events])
  (:import goog.history.Html5History))

(enable-console-print!)

;;;;;;;;;;;;;;;;;;;;;;;; App
; defonce is needed for hotloading
(defonce history (doto (Html5History.)
                   (.setEnabled true)))

(defn main
  []
  (println "Hi.")

  ; clear listeners in case of hotloading
  (goog.events/removeAll history)

  (let [storage hp/local-storage
        [_ todos-initial-signal :as todos-initial] (todos/init)
        app (devtools/connect todos-initial
                              todos/view-model
                              todos/view
                              (-> (todos/new-control history)
                                  (persistence/wrap-control todos-initial-signal storage :model nil))
                              (-> (todos/new-reconcile history)
                                  (persistence/wrap-reconcile storage :model nil))
                              storage)]

    (r/render-component [(:view app)] (. js/document (getElementById "root")))
    app))

; to be accessed from REPL
(def app (main))

;;;;;;;;;;;;;;;;;;;;;;;; Figwheel stuff
(defn on-js-reload
  []
  #_(. js/console clear))