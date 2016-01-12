### [TodoMVC](http://todomvc.com/) using [Elm-ish architecture](https://github.com/evancz/elm-architecture-tutorial/) in ClojureScript using Reagent, core.match, Specter and hodgepodge.

[DEMO](http://metametadata.github.io/cljs-elmish-todomvc/)

It's a follow-up to [cljs-elmish-examples](https://github.com/metametadata/cljs-elmish-examples).

## Highlights
* Time traveling debugger (devtools) with persistence and ability to enable/disable any action (inspired by 
[redux-devtools](https://github.com/gaearon/redux-devtools)).
When devtools persistence is on, it replays previously saved actions on tab load. Try it with Figwheel hot reloading.
* In order to achieve better performance view-model now receives a model ratom and is expected to return Reagent reactions.
Previously the whole view was re-rendered on every model change, but now components are re-rendered only on changes 
to reaction values. Reactions are memoized and are able to observe one another preventing unnecessary recalculations.
This approach is borrowed from [re-frame](https://github.com/Day8/re-frame#subscribe).
* Model is persisted in local storage using persistence middleware.
* REPL can dispatch signals and actions to app (:component tag is needed, because app is wrapped by devtools):

```
frontend.core=> ((:dispatch-signal app) [:component :on-toggle-all])
...
    
frontend.core=> ((:dispatch-action app) [:component :toggle-all])
...
```

## TODO

```
- feature: devtools be able to catch errors and stop on them/show them in corresponding actions (as in redux)
- ?: i dont like adding :dev-identity action manually only for devtools to work
- ?: also be able to replay only signals
- bug? raise exception from inside todos/reconcile -> stack trace doesnt show the root source of exception
```

## Build

To get an interactive development environment run:

    lein figwheel
    
or better:
    
    rlwrap lein figwheel

and open your browser at [localhost:3449](http://localhost:3449/).
This will auto compile and send all changes to the browser without the
need to reload. After the compilation process is complete, you will
get a Browser Connected REPL. An easy way to try it is:

    (js/alert "Am I connected?")

and you should see an alert in the browser window.

To clean all compiled files:

    lein clean

To create a production build run:

    lein cljsbuild once min

And open your browser in `resources/public/index.html`. You will not
get live reloading, nor a REPL.

To deploy a build:
 
    ghp-import -p resources/public

## References

* [TodoMVC in Elm](https://github.com/evancz/elm-todomvc)
* [TodoMVC using Reagent](https://github.com/tastejs/todomvc/tree/gh-pages/examples/reagent)
* [TodoMVC using re-frame](https://github.com/Day8/re-frame/tree/master/examples/todomvc)
* [TodoMVC using Redux](https://github.com/rackt/redux/tree/master/examples/todomvc)
* [DevTools for Redux](https://github.com/gaearon/redux-devtools)
* [cerebral.js debugger](https://chrome.google.com/webstore/detail/cerebral-debugger/ddefoknoniaeoikpgneklcbjlipfedbb?hl=en)