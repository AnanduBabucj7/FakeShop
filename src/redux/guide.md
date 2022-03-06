# creating the redux stsps

### 1. Create the folder hierarchy

- Parent folder : `redux`
  1. `store.js` : defines the store with `createStore()` methode
  2. `actions` : defines actions for each store
     - `productActions.js` : Actions for product
  3. constants
     - `action-types` : defines an object of action type constants
  4. `reducers`
     - `index.js` : combines the reducers defined

### 2. Import the store to the index.js and add a Provider
