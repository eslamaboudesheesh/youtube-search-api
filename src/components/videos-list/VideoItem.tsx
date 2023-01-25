import React from 'react';
import { snippet } from './SearchResult.type';
import './styles/VideoItem.scss';
import Col from 'react-bootstrap/Col';

export const VideoItem = ({ item }: { item: snippet }) => {
    return (
        <>
            <Col xs={12} className="ytb  my-3">
                <Col xs={5} className="ytb__thumb ">
                    <img
                        src={item.thumbnails.medium.url}
                        alt={item.title}
                        className="ytb__thumb_img"
                    />

                    <span className="ytb__thumb_timestamp">7:53</span>
                </Col>
                <Col xs={7} className="ytb__content ">
                    <h2 className="ytb__content_title">{item.title}</h2>
                    <div className="ytb__content_channel">
                        <span className="ytb__content-channel_name">
                            {item.channelTitle} <i className="fas fa-check-circle"></i>
                        </span>
                        <span className="ytb__content-channel_video_create_time">
                            9K Views • 1 Year ago
                        </span>
                    </div>
                    <p className="ytb__content_desc">{item.description}</p>
                </Col>
            </Col>
        </>
    );
};
