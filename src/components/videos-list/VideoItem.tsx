import React from "react";
import "./styles/VideoItem.scss";
type snippet = {
  publishedAt: string;
  channelId: string;
  channelTitle:string;
  title: string;
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
export const VideoItem = ({ item }: { item: snippet }) => {
  return (
    <>
      <div className="ytb">
        <div className="ytb__thumb">
          <img
            src={item.thumbnails.medium.url}
            width={item.thumbnails.medium.width}
            height={item.thumbnails.medium.height}
            alt={item.title}
            className="ytb__thumb_img"
          />
          <span className="ytb__thumb_timestamp">7:53</span>
        </div>
        <div className="ytb__content">
          <div className="ytb__content_title">{item.title}</div>
          <div className="ytb__content_channel">
            <span className="ytb__content-channel_name">
              {item.channelTitle} <i className="fas fa-check-circle"></i>
            </span>
            <span className="ytb__content-channel_video_create_time">
              9K Views • 1 Year ago
            </span>
          </div>
          <div className="ytb__content_desc">{item.description}</div>
          
        </div>
      </div>
    </>
  );
};
