import React from "react";
import { VideoItem } from "./VideoItem";
import "./styles/VideosList.scss";
import { ChannelItem } from "./ChannelItem";
import { PlayListItem } from "./PlayListItem";
type SearchResult = {
  id: { kind: string; videoId: string };
  snippet: {
    publishedAt: string;
    channelId: string;
    title: string;
    channelTitle: string;
    description: string;
    thumbnails: {
      default: {
        url: string;
        width: string;
        height: string;
      };
      medium: {
        url: string;
        width: string;
        height: string;
      };
      high: {
        url: string;
        width: string;
        height: string;
      };
    };
  };
};
export const VideosList = ({ data }: { data: any[] }) => {
  return (
    <div className="Ytblist my-5">
      {data?.map((item: SearchResult) => {
        return( 
           item.id.kind.includes('channel') ? <ChannelItem key={item.id.videoId} item={item.snippet} /> :
           item.id.kind.includes('video')?
          <VideoItem key={item.id.videoId} item={item.snippet} />: <PlayListItem key={item.id.videoId} item={item.snippet} /> )
      })}
    </div>
  );
};
