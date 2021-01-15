interface ChannelCardProps {
  thumbnail: string;
  streamer: string;
  concurrent: number;
}

interface ChanndelCardListProps {
  channels: ChannelCardProps[];
}

interface MessageProps {
  username: string;
  text: string;
  id: string;
}

interface ChatBoxProps {
  streamer: string;
  messages: MessageProps[];
}

export type {
  ChannelCardProps,
  ChanndelCardListProps,
  MessageProps,
  ChatBoxProps,
};
