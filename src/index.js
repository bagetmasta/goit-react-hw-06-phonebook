import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { Provider } from 'react-redux';
import { store, persistor } from 'redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

// const names = {
//   contacts: {
//     0: {
//       id: 'id-1',
//       name: 'Mukola Trush',
//       number: '777-77-77',
//     },
//     1: {
//       id: 'id-2',
//       name: 'Rosie Simpson',
//       number: '459-12-56',
//     },
//     2: {
//       id: 'id-3',
//       name: 'Hermione Kline',
//       number: '443-89-12',
//     },
//     3: {
//       id: 'id-4',
//       name: 'Eden Clements',
//       number: '645-17-79',
//     },
//   },
// };

// console.log(names);

// console.log(names.contacts.filter(contact => contact.id !== 'id-2'));
// console.log(names.contacts);
