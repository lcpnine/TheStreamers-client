import { FC, useState } from 'react';
import { MessageProps, ChatBoxProps } from '../interfaces';

interface Props {
  streamer: string;
}

const Message: FC<{ message: MessageProps } & Props> = ({
  message,
  streamer,
}: { message: MessageProps } & Props) => {
  const { username, text } = message;
  return (
    <div className="message">
      <div className="message-info">
        <div className="message-info-block">
          <div className="message-info-box">
            {streamer === username ? '🌟' : '🐋'}
          </div>
          <div className="message-info-box">{username}: </div>
        </div>
      </div>
      <div className="message-text">{text}</div>
    </div>
  );
};

const ChatBox: FC<ChatBoxProps> = ({ streamer, messages }: ChatBoxProps) => {
  const [text, setText] = useState('');
  const handleText = (e: React.FormEvent<HTMLTextAreaElement>) =>
    setText(e.target.value);

  const sendMessage = () => {
    messages.push({
      username: '작성자',
      text,
      id: `${Math.random() * 7123123}`,
    });
    setText('');
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && e.shiftKey == false) {
      sendMessage();
    }
  };

  return (
    <div className="chatbox">
      <div className="chat-messages">
        {messages.map((message) => (
          <Message streamer={streamer} message={message} key={message.id} />
        ))}
      </div>
      <div className="chat-input-box">
        <textarea
          className="chat-input-box-input"
          value={text}
          onChange={handleText}
          onKeyDown={onKeyDown}
        />
        <button className="btn chat-input-box-btn" onClick={sendMessage}>
          전송
        </button>
      </div>
    </div>
  );
};

export default ChatBox;
