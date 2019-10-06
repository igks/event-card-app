// import dependencies and component
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './components/dashboard/Dashboard';

// import dependencies to utilize redux
import { Provider } from 'react-redux';
import store from './Store';

function App() {
  return (
    // allow all component to access redux store by wrap all the component with Provider
    <Provider store={store}>
      <Dashboard />
    </Provider>
  );
}

export default App;
