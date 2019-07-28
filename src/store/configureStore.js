import { createStore, combineReducers } from 'redux';
import chatsReducer from '../reducers/chats';
import currentChatReducer from '../reducers/currentChat';
import filtersReducer from '../reducers/filters';

export default () => {
  const store = createStore(
    combineReducers({
      chats: chatsReducer,
      currentChat: currentChatReducer,
      filters: filtersReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};
