import React, { Component } from 'react';
import axios from 'axios';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Button from './components/Button/Button';
import Loader from './components/Loader/Loader';
import Modal from './components/Modal/Modal';

class App extends Component {
  state = {
    images: [],
    page: 1,
    searchQuery: '',
    loader: false,
    error: false,
    showModal: false,
    largeImageURL: '',
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
        `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=18687503-307ceda9bac4583df41d15aed&image_type=photo&orientation=horizontal&per_page=12`,
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
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ loader: false }));
  };

  openModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  activeImages = ({ target }) => {
    console.log(target);
    const image = target.dataset.source;
    this.setState({
      largeImageURL: image,
    });
    this.openModal();
  };

  render() {
    const { images, loader, error, showModal, largeImageURL } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.onChangeQuery} />
        <ImageGallery images={images} activeImages={this.activeImages} />
        {images.length > 0 && !loader && <Button searchImages={this.searchImages} />}
        {loader && <Loader />}
        {error && <h1>Sorry error...</h1>}
        {showModal && <Modal onModal={this.openModal} largeImageURL={largeImageURL} />}
      </>
    );
  }
}

export default App;
