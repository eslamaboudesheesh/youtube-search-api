import React from 'react';
import './styles/ChannelItem.scss';
type snippet = {
    publishedAt: string;
    channelId: string;
    channelTitle: string;
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
export const ChannelItem = ({ item }: { item: snippet }) => {
    return (
        <>
            <div className="ytbc">
                <div className="ytbc__thumb">
                    <img
                        src={item.thumbnails.medium.url}
                        width={item.thumbnails.medium.width}
                        height={item.thumbnails.medium.height}
                        alt={item.title}
                        className="ytbc__thumb_img"
                    />
                </div>
                <div className="ytbc__content">
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
