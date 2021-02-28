import React, { Component } from 'react';
import axios from 'axios';
import Searchbar from './components/Searchbar/Searchbar';

class App extends Component {
  state = {
    images: [],
    page: 1,
    searchQuery: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.searchImages();
    }
  }

  onChangeQuery = query => {
    this.setState({ searchQuery: query });
  };
  // https: //pixabay.com/api/?q=что_искать&page=номер_страницы&key=твой_ключ&image_type=photo&orientation=horizontal&per_page=12
  searchImages = () => {
    const { page, searchQuery } = this.state;
    axios
      .get(
        `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=18687503-307ceda9bac4583df41d15aed&image_type=photo&orientation=horizontal&per_page=12`,
      )
      .then(img => {
        this.setState(prevState => ({
          images: [...prevState.images, ...img.data.hits],
          page: prevState.page + 1,
        }));
      });
  };

  render() {
    const { images } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.onChangeQuery} />
        <ul>
          {images.map(img => (
            <li key={img.id}>
              <img src={img.webformatURL} alt={img.tags}></img>
            </li>
          ))}
        </ul>
        <button onClick={this.searchImages} type="submit">
          Load more
        </button>
      </div>
    );
  }
}

export default App;
