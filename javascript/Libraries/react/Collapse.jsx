// [source]

/**
 * Sourced from 30-seconds/30-seconds-of-react
 * > small modification to the render function
 * Original code: https://github.com/30-seconds/30-seconds-of-react/blob/master/snippets/Collapse.md
 * Credit to contributors on the file above.
 */

// [class]

class Collapse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: !!props.collapsed
    };
    this.style = {
      collapsed: {
        display: 'none'
      },
      expanded: {
        display: 'block'
      },
      buttonStyle: {
        display: 'block',
        width: '100%'
      }
    };
    this.toggleCollapse = this.toggleCollapse.bind(this);
  }
  
  toggleCollapse() {
    this.setState(state => ({ collapsed: !state.collapsed }));
  }
  
  render() {
    return (
      <div>
        <button style={this.style.buttonStyle} onClick={this.toggleCollapse}>
          {/* Conditional statement that toggles when the button is pressed. */}
          {this.state.collapsed ? 'Show' : 'Hide'} Content
        </button>
        <div 
          style= {this.state.collapsed ? this.style.collapsed : this.style.expanded} 
          aria-expanded = {this.state.collapsed}
        >
          {this.props.children}
        </div>
      </div>
    );
  }
}

// [render]

ReactDOM.render(
  <Collapse>
    <h1>This is a collapse</h1>
    <p>Hello world!</p>
  </Collapse>,
  document.getElementById('root')
);
