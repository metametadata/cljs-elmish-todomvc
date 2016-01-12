(ns frontend.history
  (:require [goog.events]
            [goog.history.EventType :as EventType])
  (:import goog.history.Html5History))

(def ^:dynamic *history-events-enabled?* true)