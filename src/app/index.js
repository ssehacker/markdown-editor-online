import React from 'react';
import MarkdownEditor from 'ws-markdown-editor';

class App extends React.Component {

  static propTypes = {
    parse: React.PropTypes.func,
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { parse } = this.props;
    return (
      <div className="ws-app">
        <h1>Markdown editor online</h1>
        <div className="ws-markdown">
          <MarkdownEditor parse={parse}/>
        </div>
      </div>
    );
  }
}

export default App;