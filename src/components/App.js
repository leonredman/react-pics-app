import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';



class App extends React.Component {
    //set state, we will usually set to be an empty array or object if we expect to be data so we can use built in funcitons
    state = { images: [] };
   onSearchSubmit =  async (term) => {
        // make api get request from axios uses 2 arguments url and headers object
    const response = await unsplash.get('/search/photos', {
            params: {query: term },
            
        });

        this.setState({ images: response.data.results });
       
    }

    render() {
    return (
    <div className="ui container" style={{ marginTop: '10px'}}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
    </div>
    );
  }
}

export default App;