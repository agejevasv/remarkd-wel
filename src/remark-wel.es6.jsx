import React from 'react';
import {render} from 'react-dom';
import marked from 'marked';

class MarkdownEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      markdown: '',
    }
  }

  onChange(e) {
    this.setState({
      text: e.target.value,
      markdown: marked(e.target.value)
    });
  }

  render() {
    return (
      <div>
        <textarea
          className="editor"
          onChange={this.onChange.bind(this)}
          />
        <div
          className="markdown"
          dangerouslySetInnerHTML={{__html: this.state.markdown}}/>
      </div>
    )
  }
}

render(<MarkdownEditor/>, document.getElementById('markdown-editor'));
