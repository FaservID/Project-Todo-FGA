import React, { Component } from 'react';
import Todo from '../Todo/Todo';

class Home extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          show: false
        };
      }
    render() {
        return (
            <div>
                <Todo/>
            </div>
        );
    }
}

export default Home;
