import { GetServerSideProps } from 'next';
import { FC, useState } from 'react';
import ChanndelCardList from '../../components/ChanndelCardList';
import StartChannelModal from '../../components/StartChannelModal';
import { ChannelCardProps } from '../../interfaces';

const text = {
  'en-US': {
    addChannel: 'Add Channel',
  },
  'ko-KR': {
    addChannel: '채널 추가',
  },
};

interface Props {
  channels: ChannelCardProps[];
  locale: 'en-US' | 'ko-KR';
}

const Channels: FC<Props> = ({ channels, locale }: Props) => {
  const [showModal, setShowModal] = useState(false);

  const handleModal = () => setShowModal(!showModal);

  return (
    <div className="channels-container">
      <div className="channel-option-buttons">
        <button className="btn add-channel-btn" onClick={handleModal}>
          {text[locale].addChannel}
        </button>
      </div>
      {showModal ? <StartChannelModal /> : ''}
      <ChanndelCardList channels={channels} />
    </div>
  );
};

export default Channels;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { locale } = context;

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
        'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.fanpop.com%2Fclubs%2Ffromis_9%2Fimages%2F42835882%2Ftitle%2Ffromis_9-chaeyoung-wanna-some-fun-photo&psig=AOvVaw3imVyZ-sRHKp3gwqBI22if&ust=1611278856056000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKDd4dHvq-4CFQAAAAAdAAAAABAp',
      streamer: '이채영',
      concurrent: 321,
    },
    {
      thumbnail: 'https://i.ytimg.com/vi/OceNS9k52K8/maxresdefault.jpg',
      streamer: '장규리',
      concurrent: 322,
    },
  ];

  return {
    props: {
      channels,
      locale,
    },
  };
};
