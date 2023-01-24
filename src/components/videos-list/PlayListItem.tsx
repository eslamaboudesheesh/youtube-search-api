import React from "react";
import "./styles/PlayListItem.scss";
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
export const PlayListItem = ({ item }: { item: snippet }) => {
  return (
    <>
      <div className="ytbl">
        <div className="ytbl__thumb">
          <img
            src={item.thumbnails.medium.url}
            width={item.thumbnails.medium.width}
            height={item.thumbnails.medium.height}
            alt={item.title}
            className="ytbl__thumb_img"
          />
          <span className="ytbl__thumb_ListNumber">46  <i className="fa-solid fa-play"></i>
 </span>
        </div>
        <div className="ytbl__content">
          <div className="ytbl__content_title">{item.title}</div>
          <div className="ytbl__content_channel">
            <span className="ytbl__content-channel_name">
              {item.channelTitle} <i className="fas fa-check-circle"></i>
            </span>
            <span className="ytbl__content-channel_video_create_time">
              9K Views • 1 Year ago
            </span>
          </div>
          <div className="ytbl__content_desc">{item.description}</div>
          
        </div>
      </div>
    </>
  );
};
