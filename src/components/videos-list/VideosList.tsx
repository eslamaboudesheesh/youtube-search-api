import React from 'react';
import { VideoItem } from './VideoItem';
import './styles/VideosList.scss';
import { ChannelItem } from './ChannelItem';
import { PlayListItem } from './PlayListItem';
import { SearchResult } from './SearchResult.type';

export const VideosList = ({ data }: { data: any[] }) => {
    return (
        <div className="Ytblist">
        
            {data?.map((item: SearchResult) => {
                return item.id.kind.includes('channel') ? (
                    <ChannelItem key={item.id.videoId} item={item.snippet} />
                ) : item.id.kind.includes('video') ? (
                    <VideoItem key={item.id.videoId} item={item.snippet} />
                ) : (
                    <PlayListItem key={item.id.videoId} item={item.snippet} />
                );
            })}
        </div>
    );
};
