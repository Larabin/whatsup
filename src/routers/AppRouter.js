import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ChatContentPage from '../views/ChatContentPage';
import ChatListPage from '../views/ChatListPage';
import CreateChatPage from '../views/CreateChatPage';

const AppRouter = () => (
  <BrowserRouter>
    <div className="flex-container">      
      <Switch>
        <Route path="/" component={ChatListPage} exact={true} />
        <Route path="/create" component={CreateChatPage} />               
      </Switch>      
      <ChatContentPage />      
    </div>
  </BrowserRouter>
);

export default AppRouter;
