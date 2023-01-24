import React from 'react';
import { snippet } from './SearchResult.type';
import './styles/VideoItem.scss';

export const VideoItem = ({ item }: { item: snippet }) => {
    return (
        <>
            <div className="ytb col-sm-12">
                <div className="ytb__thumb col-sm-4">
                    <img
                        src={item.thumbnails.medium.url}
                        width={item.thumbnails.medium.width}
                        height={item.thumbnails.medium.height}
                        alt={item.title}
                        className="ytb__thumb_img"
                    />
                    <span className="ytb__thumb_timestamp">7:53</span>
                </div>
                <div className="ytb__content col-sm-8">
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
