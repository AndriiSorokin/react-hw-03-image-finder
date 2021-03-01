import React, { Component } from 'react';

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onModal();
    }
  };

  render() {
    const { onModal, largeImageURL } = this.props;
    return (
      <div className="Overlay" onClick={onModal}>
        <div className="Modal">
          <img src={largeImageURL} alt="big img" />
        </div>
      </div>
    );
  }
}

export default Modal;
