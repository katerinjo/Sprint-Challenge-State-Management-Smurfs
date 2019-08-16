1. What problem does the context API help solve?

The context API lets you pass state down many generations of child components without needing to bother with writing out `heirloom={props.heirloom}` over and over.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

A store is approximately a finite state machine, with the reducers defining the transitions between those states. Actions are a way of re-implementing modules and function calls which JS already has in favor of something less convenient. `dispatch({type: 'NEW_SMURF', payload: smurfette});` is just like `betterDesign.newSmurf(smurfette);` only worse.

The store is the single source of truth because having more than once source of truth opens the possibility for conflicts and race conditions and other pointless articles of complexity.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Component state is state stored on a component, and application state is everything else, especially the store. In my opinion, the only thing component state is good for is visual behavior, like a `DisplayPanel` component deciding what colors should go where and how to interpret information for human consumption. Logic isn't always a tree, or even a directed acyclic graph, and even when it is, it isn't necessarily a tree that maps on directly to a page's visual hierarchy, so you should avoid component state as much as you can manage.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

`redux-thunk` lets you insert arbitrary (especially asynchronous) behavior between your call to an `action` and the final `dispatch`. To be clear, an `action` returns a function in this case, and may or may not have logic on its own before doing so.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

Redux is my favorite because it lets me ditch the hierarcical logic React uses by default in favor of something reasonable.