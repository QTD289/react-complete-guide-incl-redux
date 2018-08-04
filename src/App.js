import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Max 1", age: 20 },
      { name: "Max 2", age: 30 },
      { name: "Max 3", age: 40 }
    ]
  };

  switchNameHandler = newName => {
    // DON'T DO THIS: this.state.persons[0].name = 'Full name';
    this.setState({
      persons: [
        { name: newName, age: 20 },
        { name: "Max 2", age: 30 },
        { name: "Max 3", age: 99 }
      ]
    });
  };

  nameChangeHandler = event => {
    this.setState({
      persons: [
        { name: "Max 1", age: 20 },
        { name: event.target.value, age: 30 },
        { name: "Max 3", age: 40 }
      ]
    });
  };

  render() {
    const style = {
      color: 'white',
      backgroundColor: 'blue',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi</h1>
        {/* Performance impact */}
        <button
          style={style}
          onClick={() => this.switchNameHandler("Full Name")}
        >
          Switch Name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
          click={this.switchNameHandler.bind(this, "Max Again!")}
          changed={this.nameChangeHandler}
        >
          My hobby: Riding
        </Person>
      </div>
    );
  }
}

export default App;
