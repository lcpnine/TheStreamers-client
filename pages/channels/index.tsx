import { FC } from 'react';
import ChanndelCardList from '../../components/ChanndelCardList';
import { ChannelCardProps } from '../../interfaces';

const channels: ChannelCardProps[] = [
  {
    thumbnail: 'https://i.ytimg.com/vi/frKklH77O34/maxresdefault.jpg',
    streamer: 'yuqi',
    concurrent: 325,
  },
  {
    thumbnail: 'https://i.ytimg.com/vi/wPcZpel3BCc/maxresdefault.jpg',
    streamer: '우기팬',
    concurrent: 5,
  },
  {
    thumbnail:
      'https://lh3.googleusercontent.com/proxy/Uh2vHJ1WTZtc54OEiWYbvo84uNheAxidAGbRa7iNMF5tt-ZIYYC1gyggOVjVevgm7BwiM4oQsIY3XIUN1uuRINUcTcIkmn0zKsU-8RlzXiDkqErx2aUIukEBL9G212nLLVpBnAVQ6_83P-n5WNDgjgrZy83yGYqqnhooKilC7rDMaPRCRnJ-Qvx5L8_4Ecn5gLt0lxMZyx5ZZ0mLM39BP0rzYtJ-f-wHa0o8xBvA0TTkBtUS0gOzJ7sXfOWv5bUCp5BBkymmkXlGWUFckV57ACUamNC6Vve88gtbsZL37mLMtrqo49mHK2-dMds',
    streamer: '이채영',
    concurrent: 321,
  },
  {
    thumbnail: 'https://i.ytimg.com/vi/OceNS9k52K8/maxresdefault.jpg',
    streamer: '장규리',
    concurrent: 322,
  },
];

const Channels: FC = () => {
  return (
    <div className="channels-container">
      <ChanndelCardList channels={channels} />
    </div>
  );
};

export default Channels;
