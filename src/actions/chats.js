import uuid from 'uuid';

// LOADED
export const loaded = (chats) => ({
  type: 'LOADED',
  chats
});

// ADD_CHAT
export const addChat = (
  {
    name = '',
    thumbnail = '',
    users = null,
    messages= null,
    modifyDate = 0
  } = {}
) => ({
  type: 'ADD_CHAT',
  chat: {
    id: uuid(),
    name,
    thumbnail,
    users,
    messages,
    modifyDate
  }
});

// REMOVE_CHAT
export const removeChat = ({ id } = {}) => ({
  type: 'REMOVE_CHAT',
  id
});

// UPDATE_CHAT
export const updateChat = (id, updates) => ({
  type: 'UPDATE_CHAT',
  id,
  updates
});