import { FC, useState } from 'react';
import { useRouter } from 'next/router';

const text = {
  'en-US': {
    modalHeader: 'Set Channel',
    channelNamePlaceholder: 'Channel Name',
    thumbnailPlaceholder: 'Thumbnail URL',
    startChannel: 'Start Channel',
  },
  'ko-KR': {
    modalHeader: '방송 설정',
    channelNamePlaceholder: '채널 이름',
    thumbnailPlaceholder: '썸네일 URL',
    startChannel: '채널 시작',
  },
};

const StartChannelModal: FC = () => {
  const router = useRouter();
  const locale = router.locale === 'ko-KR' ? 'ko-KR' : 'en-US';

  const [channelName, setChannelName] = useState('');
  const [thumbnail, setThumbnail] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.target.name === 'channelName') {
      setChannelName(e.target.value);
    }
    if (e.target.name === 'thumbnail') {
      setThumbnail(e.target.value);
    }
  };

  return (
    <div className="start-channel-modal">
      <div className="modal-header">{text[locale].modalHeader}</div>
      <div className="modal-body">
        <input
          type="text"
          name="channelName"
          className="modal-body-input"
          value={channelName}
          onChange={handleInputChange}
          placeholder={text[locale].channelNamePlaceholder}
        />
        <input
          type="text"
          name="thumbnail"
          className="modal-body-input"
          value={thumbnail}
          onChange={handleInputChange}
          placeholder={text[locale].thumbnailPlaceholder}
        />
        <button className="btn start-channel-btn">
          {text[locale].startChannel}
        </button>
      </div>
    </div>
  );
};

export default StartChannelModal;
