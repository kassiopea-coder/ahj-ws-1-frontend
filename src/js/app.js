import Chat from './Chat';

const chat = new Chat(document.querySelector('.chat'), 'wss://ahj-ws1-backend.herokuapp.com/ws');
chat.init();
