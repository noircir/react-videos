import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import youtube from '../apis/youtube';

class App extends React.Component {
    state = { videos: [] };

    searchStringHandler = async searchTerm => {
        const res = await youtube.get('/search', {
            params: {
                q: searchTerm
            }
        })

        this.setState({videos: res.data.items})
    };

    render() {
        return (
            <div className="ui container">
                <SearchBar searchString={this.searchStringHandler} />
                Videos found: {this.state.videos.length}
                <VideoList videos={this.state.videos} />
            </div>
        );
    }
}

export default App;