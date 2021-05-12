import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { DeleteLinkProvider } from './contexts/DeleteLink';
import { CreateLinkProvider } from './contexts/ModalCreateLink';
import { UpdateLinkProvider } from './contexts/UpdateLink';
import { UpdateListProvider } from './contexts/UpdateList';

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