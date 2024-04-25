import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { fetchStore } from './utils/redux/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={fetchStore}>
    <App />
  </Provider>,
)
