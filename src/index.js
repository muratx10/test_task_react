import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import './index.scss';
import store from './store/store';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

const handleScroll = event => {
  // const { loadMoreActionCreator } = this.props;
  // const { currentCount } = this.state;
  // const element = event.target;
  // if (element.scrollHeight - element.scrollTop === element.clientHeight) {
  //   loadMoreActionCreator(currentCount);
  //   this.setState({
  //     currentCount: currentCount + 20,
  //   });
  // }
  console.log('SCROLLING...');
};
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
