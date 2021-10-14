import React from 'react';
import Card from './Card';


// import {users} from '../users'

function CardList({users}) {  //uses users from render method in App.js
    // Task 1 - Difficult
    // populate the card component dynamically from users.js

    return(
        <div>
            
            {users.map((user) => { 
                return (
                    
                        <Card
                        key = {user.id}
                        name = {user.name} 
                        username = {user.username}
                        email = {user.email}/>
                    
                );
            })}
        </div>
    )
        }
    

  //use key to identify which items are being changed
  //props are not needed in the parameter or map function since this has been set up in the Cards.js file
  //since the array of objects has been deconstructed, it is simpler to map through the element as opposed to the index 
  export default CardList;