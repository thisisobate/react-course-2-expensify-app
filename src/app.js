import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from "./store/configureStore";
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

// Add expense
store.dispatch(addExpense({ description: 'water bill'}));
store.dispatch(addExpense({ description: 'gas bill'}));
store.dispatch(setTextFilter('bill'));



const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const Jsx = () => (
    <Provider store={store}>
     <AppRouter/>
    </Provider>
    
  );

ReactDOM.render(<Jsx/>, document.getElementById('app'));