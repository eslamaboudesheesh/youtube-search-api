import React from 'react';
import { snippet } from './SearchResult.type';
import './styles/PlayListItem.scss';

export const PlayListItem = ({ item }: { item: snippet }) => {
    return (
        <>
            <div className="ytbl col-sm-12">
                <div className="ytbl__thumb col-sm-4">
                    <img
                        src={item.thumbnails.medium.url}
                        width={item.thumbnails.medium.width}
                        height={item.thumbnails.medium.height}
                        alt={item.title}
                        className="ytbl__thumb_img"
                    />
                    <span className="ytbl__thumb_ListNumber">
                        46 <i className="fa-solid fa-play"></i>
                    </span>
                </div>
                <div className="ytbl__content col-sm-8">
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
