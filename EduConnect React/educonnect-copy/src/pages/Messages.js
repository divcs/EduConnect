import React, { useState } from 'react';
import { messagesData, chatMessages } from '../data/messagesData';

function Messages() {
  const [selectedChat, setSelectedChat] = useState(null);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim() && selectedChat) {
      // Here you would typically send the message to a backend
      console.log('Sending message:', newMessage);
      setNewMessage('');
    }
  };

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-4">
          <div className="feature-card p-3">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Search messages..."
              />
              <button className="btn btn-purple" type="button">
                <i className="bi bi-search"></i>
              </button>
            </div>
            <div className="list-group">
              {messagesData.map(chat => (
                <button
                  key={chat.id}
                  className={`list-group-item list-group-item-action d-flex align-items-center ${selectedChat === chat.id ? 'active' : ''}`}
                  onClick={() => setSelectedChat(chat.id)}
                >
                  <img
                    src={chat.avatar}
                    alt={chat.sender}
                    className="rounded-circle me-3"
                    style={{ width: '40px', height: '40px' }}
                  />
                  <div className="flex-grow-1">
                    <div className="d-flex justify-content-between align-items-center">
                      <h6 className="mb-0">{chat.sender}</h6>
                      <small className="text-muted">{chat.time}</small>
                    </div>
                    <p className="mb-0 text-muted small">{chat.lastMessage}</p>
                  </div>
                  {chat.unread && (
                    <span className="badge bg-purple rounded-pill ms-2">New</span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="col-md-8">
          {selectedChat ? (
            <div className="feature-card p-3 h-100">
              <div className="d-flex align-items-center mb-3">
                <img
                  src={messagesData.find(chat => chat.id === selectedChat).avatar}
                  alt="Chat"
                  className="rounded-circle me-3"
                  style={{ width: '40px', height: '40px' }}
                />
                <h5 className="mb-0">
                  {messagesData.find(chat => chat.id === selectedChat).sender}
                </h5>
              </div>

              <div className="chat-messages mb-3" style={{ height: '400px', overflowY: 'auto' }}>
                {chatMessages[selectedChat].map(msg => (
                  <div
                    key={msg.id}
                    className={`message ${msg.sender === 'You' ? 'text-end' : ''} mb-2`}
                  >
                    <div
                      className={`d-inline-block p-2 rounded ${
                        msg.sender === 'You' ? 'bg-purple text-white' : 'bg-light'
                      }`}
                    >
                      <p className="mb-0">{msg.message}</p>
                      <small className="text-muted">{msg.time}</small>
                    </div>
                  </div>
                ))}
              </div>

              <form onSubmit={handleSendMessage} className="mt-3">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Type a message..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                  />
                  <button className="btn btn-purple" type="submit">
                    <i className="bi bi-send"></i>
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div className="feature-card p-5 text-center">
              <h3>Select a chat to start messaging</h3>
              <p className="text-muted">Choose a conversation from the list to view messages</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Messages; 