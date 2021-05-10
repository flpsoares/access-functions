import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { DeleteLinkProvider } from './contexts/DeleteLink';
import { CreateLinkProvider } from './contexts/ModalCreateLink';
import { UpdateListProvider } from './contexts/UpdateList';

import GlobalStyle from './styles/global'

ReactDOM.render(
  <React.StrictMode>
    <CreateLinkProvider>
      <UpdateListProvider>
        <DeleteLinkProvider>
          <GlobalStyle />
          <App />
        </DeleteLinkProvider>
      </UpdateListProvider>
    </CreateLinkProvider>
  </React.StrictMode>,
  document.getElementById('root')
);