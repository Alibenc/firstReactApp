import delIconIMG from '../../assets/Chat/delete-button.svg';
import {useState} from 'react';

const ChatHistory = ({chatObj}) => {
  const [chatObj2, setChatObjCopy] = useState(() => Object.assign({}, chatObj));

  let deleteItem = (e) => {
    const messageItem = e.target.closest('.chat-body__message-item');
    const message = messageItem.querySelector('.chat-body__message-item-txt').innerText;
    let deletedIndex = null;

    for (let i = 0; i < chatObj2.chatHistrory.length; i++) {
      if (chatObj2.chatHistrory[i].message == message) {
        deletedIndex = i;
      }
    }
    
    chatObj2.chatHistrory.splice(deletedIndex, 1);
    let chatObjCopy2 = Object.assign({}, chatObj2);
    setChatObjCopy(() => chatObjCopy2);
    localStorage.setItem('chatArr', JSON.stringify(chatObj2));
  }

  return(
    <div className="chat-body__history">
      {
        chatObj.chatHistrory.map(messageObj => {
          return(
            <div key={messageObj.id} className="chat-body__message-item _user-message">
              <img onClick={(e) => deleteItem(e)} src={delIconIMG} 
              alt="удалить" className="chat-body__message-del"/>
              <p className="chat-body__message-item-txt">{messageObj.message}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default ChatHistory;