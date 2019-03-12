import React from 'react';
import ReactDOM from 'react-dom';
import renderHTML from 'react-render-html';
import PropTypes from 'prop-types';

class Preview extends React.PureComponent {
  constructor(props) {
    super(props);
    this.containerEl = document.createElement('div');
    this.externalWindow = null;
  }

  componentDidMount() {
    const { closePreview } = this.props;
    this.externalWindow = window.open('', '', '');
    this.externalWindow.document.body.appendChild(this.containerEl);
    this.externalWindow.document.title = 'A React portal window';
    this.externalWindow.addEventListener('beforeunload', () => {
      closePreview();
    });
  }

  componentWillUnmount() {
    this.externalWindow.close();
  }

  render() {
    const { html } = this.props;
    return ReactDOM.createPortal(renderHTML(html), this.containerEl);
  }
}

Preview.propTypes = {
  closePreview: PropTypes.func.isRequired,
  html: PropTypes.string.isRequired,
};

export default Preview;
