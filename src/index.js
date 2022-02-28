import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import registerServiceWorker from './registerServiceWorker';

import 'flexboxgrid/css/flexboxgrid.css';
import './index.css';
import App from './App.jsx';
import reducers from './reducers';
import qs from 'qs';

console.log(qs.stringify({"name":"123", "id":["10", 23,45]}, {arrayFormat: 'repeat'}));

const store = createStore(
    reducers
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
