import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.jsx'
import { Provider as ReduxProvider } from 'react-redux';
import { store } from './redux/store.js';



createRoot(document.getElementById('root')).render(
    <ReduxProvider store={store}>
        <App />
    </ReduxProvider>
)
