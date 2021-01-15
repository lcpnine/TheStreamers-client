interface ChannelCardProps {
  thumbnail: string;
  streamer: string;
  concurrent: number;
}

interface ChanndelCardListProps {
  channels: ChannelCardProps[];
}

export type { ChannelCardProps, ChanndelCardListProps };
