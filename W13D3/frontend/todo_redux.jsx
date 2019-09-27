import ReactDOM from 'react-dom';
import React from 'react';
import { configureStore } from "./store/store";
import App from "./components/app.js";
import Root from "./components/root.jsx";
import allTodos from "./reducers/selectors.js";


const store = configureStore();
window.store = store;
window.allTodos = allTodos(store.getState());

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(<Root store={store}/>, root)
});