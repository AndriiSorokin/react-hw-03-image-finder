import React, { Component } from 'react';
import axios from 'axios';
import Searchbar from './components/Searchbar/Searchbar';

class App extends Component {
  state = {
    images: [],
  };
  componentDidMount() {}

  searchQuery = query => {
    axios
      .get(
        `https://pixabay.com/api/?q=${query}&page=1&key=18687503-307ceda9bac4583df41d15aed&image_type=photo&orientation=horizontal&per_page=12`,
      )
      .then(img => {
        this.setState({
          images: img.data.hits,
        });
      });
  };

  render() {
    const { images } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.searchQuery} />
        <ul>
          {images.map(img => (
            <li key={img.id}>
              <img src={img.webformatURL} alt={img.tags}></img>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
