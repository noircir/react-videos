import React from 'react';

class SearchBar extends React.Component {
    state = { searchTerm: ''}

    inputChangeHandler = (e) => {
        this.setState({ searchTerm: e.target.value})
    };

    formSubmitHandler = (e) => {
        e.preventDefault();
        this.props.searchString(this.state.searchTerm);
    };

    render() {
        return (  
            <div className="search-bar ui segment">
                <form onSubmit={this.formSubmitHandler} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input 
                            type="text" 
                            value={this.state.searchTerm}
                            onChange={this.inputChangeHandler}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;