// Chats Reducer

const chatsReducerDefaultState = [];

export default (state = chatsReducerDefaultState, action) => {
  switch (action.type) {
    case 'LOADED' :
      return action.chats;      
    case 'ADD_CHAT':
      return [
        ...state,
        action.chat
      ];
    case 'REMOVE_CHAT':
      return state.filter(({ id }) => id !== action.id);     
    case 'UPDATE_CHAT':
      return state.map((chat) => {
        if (chat.id === action.id) {
          return {
            ...chat,
            ...action.updates
          };
        } else {
          return chat;
        };
      });
    default:
      return state;
  }
};
