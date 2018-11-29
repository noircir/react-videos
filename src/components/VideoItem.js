import './VideoItem.css';
import React from 'react';

const VideoItem = ({ video, onVideoSelect }) => {
    return ( 
        <div onClick={() => onVideoSelect(video)} className="video-item item">
            <img className="ui image" src={video.snippet.thumbnails.medium.url} alt=""/>
            <div className="content">
                <div className="header">
                    <h3>{video.snippet.title}</h3>
                </div>
                <div className="description">{video.snippet.description}</div>
            </div>
        </div>
    );
};

export default VideoItem;