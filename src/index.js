import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './containers/App'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducers'

const container = document.getElementById('root')
const root = createRoot(container)

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()    
)

root.render(
    <Provider store={store} >
        <App />
    </Provider>
)