import React, { Component } from 'react';
import PropTypes from 'prop-types';
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

Modal.propTypes = {
  onModal: PropTypes.func,
  largeImageURL: PropTypes.string,
};

export default Modal;
