import React, { Component } from "react";
import PropType from "prop-types";

import classes from "./Person.css";
import WithClass from "../../../hoc/WithClass";

class Person extends Component {
  constructor(props) {
    super();
    console.log("[Person.js] Inside contructor()", props);
  }

  componentWillMount() {
    console.log("[Person.js] Inside componentWillMount()");
  }

  componentDidMount() {
    console.log("[Person.js] Inside componentDidMount()");
    if (this.props.position === 0) {
      this.inputElement.focus();
    }
  }

  render() {
    console.log("[Person.js] Inside render()");

    return (
      <WithClass classes={classes.Person}>
        <p onClick={this.props.click}>
          I'm {this.props.name} and I'm {this.props.age} years old!
        </p>
        <p>{this.props.children}</p>
        <input
          ref={(inp) => { this.inputElement = inp }}
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </WithClass>
    );
  }
}

Person.propTypes = {
  click: PropType.func,
  name: PropType.string,
  age: PropType.number,
  changed: PropType.func
};

export default Person;
