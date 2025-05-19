import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.jsx'
import { Provider as ReduxProvider } from 'react-redux';
import { store } from './redux/store.js';
import { ThemeProvider } from './theme.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';



createRoot(document.getElementById('root')).render(
    <ThemeProvider>
        <ReduxProvider store={store}>
            <App />
        </ReduxProvider>
    </ThemeProvider>
)
