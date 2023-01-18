import React from 'react';
import './index.css';
import ReactDOM from 'react-dom/client';
import { ProSidebarProvider } from 'react-pro-sidebar';
import { BrowserRouter } from 'react-router-dom';


import App from './app';

// Say something
console.log('[ERWT] : Renderer execution started');

// Application to Render
const app = <App />;

// Render application in DOM
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <BrowserRouter>
    <ProSidebarProvider>
      <App />
    </ProSidebarProvider>
  </BrowserRouter>
);
