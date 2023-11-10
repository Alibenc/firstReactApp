import React, {useState} from 'react';
import useLocalStorage from '../../Hooks/useLocalStorage';
import './Chat.css';
import arrowIconIMG from '../../assets/Chat/arrow.svg';
import sendIconIMG from '../../assets/Chat/send.svg';
import ChatHistory from './ChatHistory'

const Chat = () => {
  const [chatActive, setChatActive] = useState(false);
  const [chatLocalObj, setLocalObj] = useLocalStorage('chatArr', {id: 0, chatHistrory: []});
  const [chatObjCopy, setObjCopy] = useState(Object.assign({}, chatLocalObj));
  const [messageValue, setValue] = useState('');
  const [deleteFlag, setFlag] = useState(false);

  const sendMessage = (e) => {
    e.preventDefault();
    if (messageValue.replace(/\s+/g, '').length > 0) {
      chatObjCopy.chatHistrory.push({id: chatObjCopy.id, message: messageValue});
      // console.log(chatObjCopy);
      chatObjCopy.id++;
      setValue(() => '');
      localStorage.setItem('chatArr', JSON.stringify(chatObjCopy));
      // localStorage.removeItem('chatArr');
    }    
  }

  return(
    <div className={chatActive ? 'chat _active' : 'chat'}>
      <div onClick={() => setChatActive(!chatActive)} className="chat__perview"> 
        <p className="chat__perview-txt">Чат и поддержка</p> 
        <img src={arrowIconIMG} alt="стрелка" className="chat__perview-icon" /> 
      </div>
      <div className="chat__body chat-body">
        <div className="chat-body__inner">
          {/* {chatLocalObj.chatHistrory.length > 0 ? <ChatHistory setChatObj={setLocalObj} 
          chatObj={chatLocalObj}/> : 'Напишите сообщение!'} */}
          {chatLocalObj.chatHistrory.length > 0 ? 
          <ChatHistory chatObj={chatObjCopy}/> : 'Напишите сообщение!'}
        </div>
        <form className="chat-body__massage-wrapper">
          <textarea value={messageValue} onChange={(e) => setValue(e.target.value)} name='name' 
          className="chat-body__massage"></textarea>
          <button onClick={(e) => sendMessage(e)}
          type='submit' className="chat-body__send">
            <img src={sendIconIMG} alt="отправить" className="chat-body__submit-icon" />
          </button>
        </form>
      </div>
    </div>
  )
}

export default Chat;