import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

import './App.css';

// Monsters App
class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
      title: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  handleChange(e) {
    this.setState({ searchField: e.target.value,
                          title: e.target.value });
  }

  render() {
    const { monsters, searchField, title } = this.state;
    //const filteredMonsters = monsters.filter(monster =>
    //monster.name.toLowerCase().includes(searchField.toLowerCase())
    //);

    return (
      <div className='App'>
        {/*<h1>Monsters Rolodex</h1>*/}
        <h1>{title}</h1>
        <SearchBox
        placeholder='search monsters'
        handleChange={this.handleChange}
      />
        {/*Create Monster Cards*/}
     {/*<CardList monsters={filteredMonsters} />*/} 
        <CardList monsters={monsters} /> 
      </div>
    );
  }
}

export default App;