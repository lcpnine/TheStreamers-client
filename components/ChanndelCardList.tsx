import { useState, useEffect, FC } from 'react';
import { useRouter } from 'next/router';
import type { ChannelCardProps, ChanndelCardListProps } from '../interfaces';

const text = {
  'en-US': {
    streamer: (username: string) => `Streamer: ${username}`,
    concurrent: (users: number) => `Concurrent User: ${users}`,
  },
  'ko-KR': {
    streamer: (username: string) => `${username}의 방송국`,
    concurrent: (users: number) => `현재 시청자 수: ${users}명`,
  },
};

const ChannelCard: FC<ChannelCardProps> = ({
  thumbnail,
  streamer,
  concurrent,
}: ChannelCardProps) => {
  const router = useRouter();
  const locale = router.locale === 'ko-KR' ? 'ko-KR' : 'en-US';

  return (
    <div className="btn channel-card">
      <div>
        <img src={thumbnail} className="thumbnail" />
      </div>
      <div className="stream-info-list">
        <div className="stream-info">{text[locale].streamer(streamer)}</div>
        <div className="stream-info">{text[locale].concurrent(concurrent)}</div>
      </div>
    </div>
  );
};

const ChanndelCardList: FC<ChanndelCardListProps> = ({
  channels,
}: ChanndelCardListProps) => {
  return (
    <div className="channel-card-list">
      {channels.map((el) => (
        <ChannelCard key={el.streamer} {...el} />
      ))}
    </div>
  );
};

export default ChanndelCardList;
