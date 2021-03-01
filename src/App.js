import React, { Component } from 'react';
import axios from 'axios';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Button from './components/Button/Button';
import Loader from './components/Loader/Loader';

class App extends Component {
  state = {
    images: [],
    page: 1,
    searchQuery: '',
    loader: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.searchImages();
    }
  }

  onChangeQuery = query => {
    this.setState({ searchQuery: query, page: 1, images: [] });
  };
  searchImages = () => {
    const { page, searchQuery } = this.state;
    this.setState({ loader: true });
    axios
      .get(
        `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=18687503-307ceda9bac4583df41d15aed&image_type=photo&orientation=horizontal&per_page=10`,
      )
      .then(img => {
        this.setState(prevState => ({
          images: [...prevState.images, ...img.data.hits],
          page: prevState.page + 1,
        }));
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      })
      .finally(() => this.setState({ loader: false }));
  };

  render() {
    const { images, loader } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.onChangeQuery} />
        {loader && <Loader />}
        <ImageGallery images={images} />
        {images.length > 0 ? <Button searchImages={this.searchImages} /> : null}
      </>
    );
  }
}

export default App;
