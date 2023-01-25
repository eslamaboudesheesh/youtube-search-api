import React from 'react';
import { snippet } from './SearchResult.type';
import './styles/PlayListItem.scss';
import Col from 'react-bootstrap/Col';

export const PlayListItem = ({ item }: { item: snippet }) => {
    return (
        <>
            <Col xs={12} className="ytbl col-sm-12 my-3">
                <Col xs={5} className="ytbl__thumb ">
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
                </Col>
                <Col xs={7} className="ytbl__content ">
                    <h2 className="ytbl__content_title">{item.title}</h2>
                    <div className="ytbl__content_channel">
                        <span className="ytbl__content-channel_name">
                            {item.channelTitle} <i className="fas fa-check-circle"></i>
                        </span>
                        <span className="ytbl__content-channel_video_create_time">
                            9K Views • 1 Year ago
                        </span>
                    </div>
                    <p className="ytbl__content_desc">{item.description}</p>
                </Col>
            </Col>
        </>
    );
};
