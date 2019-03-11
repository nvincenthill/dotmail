import React from 'react';
import ReactDOM from 'react-dom';
import renderHTML from 'react-render-html';

class Preview extends React.PureComponent {
  constructor(props) {
    super(props);
    this.containerEl = document.createElement('div');
    this.externalWindow = null;
  }

  componentDidMount() {
    this.externalWindow = window.open('', '', 'width=600,height=400,left=200,top=200');
    this.externalWindow.document.body.appendChild(this.containerEl);
    this.externalWindow.document.title = 'A React portal window';
    this.externalWindow.addEventListener('beforeunload', () => {
      this.props.closePreview();
    });
  }

  componentWillUnmount() {
    this.externalWindow.close();
  }

  render() {
    return ReactDOM.createPortal(renderHTML(this.props.html), this.containerEl);
  }
}

export default Preview;
