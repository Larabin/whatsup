//import moment from 'moment';

// Get visible chats

export default (chats, { text}) => {
  return chats.filter((chat) => {        
    const nameMatch = chat.name.toLowerCase().includes(text.toLowerCase());
    if(!chat.messages) {
      return nameMatch;
    }
    const textOfMessageMatch = chat.messages.filter(
      (msg) => msg.text.toLowerCase().includes(text.toLowerCase())
    );    
    return nameMatch || textOfMessageMatch.length;    
  }).sort((a, b) => {
    return a.modifyDate < b.modifyDate ? 1 : -1;
  });
};
