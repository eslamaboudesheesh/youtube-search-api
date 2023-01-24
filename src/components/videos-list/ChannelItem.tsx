import React from 'react';
import { snippet } from './SearchResult.type';
import './styles/ChannelItem.scss';

export const ChannelItem = ({ item }: { item: snippet }) => {
    return (
        <>
           
            <div className="ytbc col-sm-12">
                <div className="ytbc__thumb col-sm-4">
                    <img
                        src={item.thumbnails.medium.url}
                        width={item.thumbnails.medium.width}
                        height={item.thumbnails.medium.height}
                        alt={item.title}
                        className="ytbc__thumb_img"
                    />
                </div>
                <div className="ytbc__content col-sm-8">
                    <div className="ytbc__content_title">{item.title}</div>
                    <div className="ytbc__content_channel">
                        <span className="ytbc__content-channel_name">
                            {item.channelTitle} <i className="fas fa-check-circle"></i>
                        </span>
                        <span className="ytb__content-channel_video_create_time">
                            9K Views • 1 Year ago
                        </span>
                    </div>
                    <div className="ytbc__content_desc">{item.description}</div>
                </div>
            </div>
        </>
    );
};
