import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import youtube from '../apis/youtube';

class App extends React.Component {
    state = { 
        videos: [],
        selectedVideo: null 
    };

    searchStringHandler = async searchTerm => {
        const res = await youtube.get('/search', {
            params: {
                q: searchTerm
            }
        })

        this.setState({videos: res.data.items})
    };

    videoSelectHandler = (video) => {
        this.setState({ selectedVideo: video })
        console.log(this.state.selectedVideo);
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onSearchStringSubmit={this.searchStringHandler} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList 
                    onVideoSelect={this.videoSelectHandler} 
                    videos={this.state.videos} 
                    />
            </div>
        );
    }
}

export default App;