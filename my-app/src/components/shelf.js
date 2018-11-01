import React, { Component } from 'react';

class Shelf extends Component {
    constructor(props){
        super(prop);

        this.stste = {
            shelfItems: [
                'Website Development',
                'SEO',
                'Programing'
            ]
        }
    }
render() {
    const shelfItems = this.state.shelfItems.map((item,idx)=>{
        return <li key={idx}><button>[+]</button>{item}</li>
    });
    return (
        <div>
        <h2>Shelf</h2>
        <ul>
            {shelfItems}
        </ul>
        </div>
    );
  }
}

export default Shelf;
