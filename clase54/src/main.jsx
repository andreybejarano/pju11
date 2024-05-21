import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx'
import './index.css'
import { InitDataProvider } from './context/InitDataContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <InitDataProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </InitDataProvider>
)
