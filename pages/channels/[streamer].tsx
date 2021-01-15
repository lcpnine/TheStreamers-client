import { GetServerSideProps } from 'next';
import { useState, useEffect, FC } from 'react';
import ChatBox from '../../components/ChatBox';
import { MessageProps } from '../../interfaces';

interface Props {
  params: {
    streamer: string;
  };
  messages: MessageProps[];
}

const StreamingChannel: FC<Props> = ({ params, messages }: Props) => {
  const { streamer } = params;
  return (
    <div className="streaming-channel-container">
      <div className="video-container">
        <div className="video"></div>
      </div>
      <div className="chat-container">
        <ChatBox streamer={streamer} messages={messages} />
      </div>
    </div>
  );
};

export default StreamingChannel;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params } = context;
  const messages: MessageProps[] = [
    {
      username: '우기팬',
      text: '루삥뽕ㅋㅋ',
      id: '213123ioas',
    },
    {
      username: '꽹이',
      text: '엌ㅋㅋㅋ실화냐',
      id: '213123ioas4',
    },
    {
      username: '세상에서제일길진않지만김수한무두루미',
      text: '엌ㅋㅋㅋ실화냐라고 말을 했다가 말바꾸면 개꿀잼엌ㅋ',
      id: '213123ioas4',
    },
  ];

  return {
    props: {
      params,
      messages,
    },
  };
};
