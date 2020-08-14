1. What problem does the context API help solve?

    The context API helps engineers to manage state props when children of parent components may not need a specific prop to be used, but the grandchildren might. Context allows us to contain state trees based on where you put your provider. 

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    - actions: tell us what our components to do based on state/props
    - reducers: takes our actions, and sets the changes based on them
    - store: holds all of the application states from provider

    The store is the SOT bceause it is the single place where state props are held - and the only place that components will be referencing



1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
The difference is one that is available globally, and one that is specifically used in a component. If you have a large application where you are managing multiple states on multiple components and that arent directly related, application state is the way to go. If you just have a small basic app where you have a clear parent-child component relationship and nothing has to be shared beyond that, I would use component state. 

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

It allows us to save ourselves from the trouble of useing logger =P but in all seriousness it allows us to do what logger did but with way less code. Basically looks at our reducer and seeing if there is anything being passed and if so to check that its running based on dispatch
1. What is your favorite state management system you've learned and this sprint? Please explain why!
I would say Redux over context API - there is a lot of setup which can be cumbersome at times, but once you have it up and running, everything runs so much easier! Its more code and stuff to type but way easier to wrap my head around than doing something like useLocalStorage.
