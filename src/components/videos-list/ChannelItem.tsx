import React from 'react';
import { snippet } from './SearchResult.type';
import './styles/ChannelItem.scss';
import Col from 'react-bootstrap/Col';

export const ChannelItem = ({ item }: { item: snippet }) => {
    return (
        <>
            <Col xs={12} className="ytbc  my-3">
                <Col xs={5} className="ytbc__thumb ">
                    <img
                        src={item.thumbnails.medium.url}
                        width={item.thumbnails.medium.width}
                        height={item.thumbnails.medium.height}
                        alt={item.title}
                        className="ytbc__thumb_img"
                    />
                </Col>
                <Col xs={7} className="ytbc__content ">
                    <h2 className="ytbc__content_title">{item.title}</h2>
                    <div className="ytbc__content_channel">
                        <span className="ytbc__content-channel_name">
                            {item.channelTitle} <i className="fas fa-check-circle"></i>
                        </span>
                        <span className="ytb__content-channel_video_create_time">
                            9K Views • 1 Year ago
                        </span>
                    </div>
                    <p className="ytbc__content_desc">{item.description}</p>
                </Col>
            </Col>
        </>
    );
};
