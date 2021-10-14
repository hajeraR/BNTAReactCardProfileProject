import React from 'react';
import './index.css';
import CardList from './components/cardlist';
import SearchBox from './components/SearchBox';

//App.js has inherited the properties of a React Component
class App extends React.Component {
    //describe initial state of class using constructor
    constructor() {
        //call parent method to inherit all its properties using super
      super();
  
      //set state of variables using this.state for react to track changes
      this.state = {
        users2: [], //set users2 to be an empty array
        searchBoxTerm: '', //track search input by user
      };
    }

    //user defines functions in React classes should be arrow functions
    onSearchChange = (event) => {
        this.setState({ searchBoxTerm: event.target.value }); //update search box term, target is key from console
      };

      //set order of methods called; we want api to be fetched first to speed up render, do this using componentDidMount
      componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
          .then((response) => response.json())  //check response is a json object
          .then((users) => {
            this.setState({ users2: users }); //update empty users2 array to contain fetched users data
          });
      }

      render() {
        const filteredUsers = this.state.users2.filter((users2) => {
          return users2.name
            .toLowerCase() //use lowercase to avoid case sensitive errors
            .includes(this.state.searchBoxTerm.toLowerCase()); 
        });

        if (this.state.users2.length === 0) {
            return <h1>Loading...</h1>;
          } else {
            return (
              <div className="tc">
                <SearchBox searchChange={this.onSearchChange} /> {/* the onSearchChange function has been passed to the child component through props */}
                <CardList users={filteredUsers} /> {/* moved filteredUsers function under render to be in the same scope as render*/}
              </div>
            );
          }
        }
      }
      
      export default App;



  

  

    
