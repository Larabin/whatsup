// currentChat Reducer

const currentChatReducerDefaultState = null;

export default (state = currentChatReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_CHAT_ID':
            return action.id; 
    case 'UNSET_CHAT_ID':
            return null;         
    default: 
        return state;
  }
}


