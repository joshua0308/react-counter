//////////////////////////////////////////////////////////////////////
import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"]
  };

  render() {
    return (
      <div>
        {/*react.fragment creates a ghost div*/}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button>
        <ul>
          {this.state.tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    // object destructuring
    // pick the count property from the state object
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;


//////////////////////////////////////////////////////////////////////
import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: []
  };

  // this method renders the list tags
  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;
    return (
      <ul>
        // use .map to map the array elements into <li>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  // attach different css class depending on the value of count
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  // display 'zero' if count is 0, otherwise display the number
  formatCount() {
    const { count } = this.state;
    // object destructuring
    // pick the count property from the state object
    return count === 0 ? "Zero" : count;
  }

  render() {
    return (
      <div>
        // two true statements will result in ture boolean
        // if state.length is zero, the string will be printed
        {this.state.tags.length === 0 && "Please create a new tag!"}
        {this.renderTags()}
      </div>
    );
  }
}

export default Counter;
