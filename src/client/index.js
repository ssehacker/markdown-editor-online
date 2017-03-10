/**
 * Created by ssehacker on 2017/3/4.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import App from '../app';
import 'ws-markdown-editor/assets/index.less';
import 'ws-markdown-editor/assets/github-markdown.css';
import '../assets/common.less';
import '../assets/index.less';

ReactDOM.render(<App /> , document.querySelector('#app'));

