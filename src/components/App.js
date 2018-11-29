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

    componentDidMount() {
        this.searchStringHandler('buildings');
    }

    searchStringHandler = async searchTerm => {
        const res = await youtube.get('/search', {
            params: {
                q: searchTerm
            }
        })

        this.setState({ 
            videos: res.data.items, 
            selectedVideo: res.data.items[0] 
        })
    };

    videoSelectHandler = (video) => {
        this.setState({ selectedVideo: video })
        console.log(this.state.selectedVideo);
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onSearchStringSubmit={this.searchStringHandler} />
                <div className="ui grid">

                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>

                        <div className="five wide column">
                            <VideoList 
                                onVideoSelect={this.videoSelectHandler} 
                                videos={this.state.videos} 
                                />
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default App;