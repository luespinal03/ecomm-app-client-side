import React from 'react';
import ReactDOM from 'react-dom/client';
import { AuthProvider } from "./Hooks/Auth";
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // The <AuthProvider/> components are created using react context. Any component that is a child of <AuthProvider/> will now be able to access any of the methods exposed with our custom useAuth hook.
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);

