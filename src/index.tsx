import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { CreateLinkProvider } from './contexts/ModalCreateLink';
import { UpdateListProvider } from './contexts/UpdateList';

import GlobalStyle from './styles/global'

ReactDOM.render(
  <React.StrictMode>
    <CreateLinkProvider>
      <UpdateListProvider>
        <GlobalStyle />
        <App />
      </UpdateListProvider>
    </CreateLinkProvider>
  </React.StrictMode>,
  document.getElementById('root')
);