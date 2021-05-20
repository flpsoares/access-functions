import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { DeleteLinkProvider } from './contexts/DeleteLinkContext';
import { CreateLinkProvider } from './contexts/ModalCreateLinkContext';
import { UpdateLinkProvider } from './contexts/UpdateLinkContext';
import { UpdateListProvider } from './contexts/UpdateListContext';

import GlobalStyle from './styles/global'

ReactDOM.render(
  <React.StrictMode>
    <UpdateLinkProvider>
      <CreateLinkProvider>
        <UpdateListProvider>
          <DeleteLinkProvider>
            <GlobalStyle />
            <App />
          </DeleteLinkProvider>
        </UpdateListProvider>
      </CreateLinkProvider>
    </UpdateLinkProvider>
  </React.StrictMode>,
  document.getElementById('root')
);