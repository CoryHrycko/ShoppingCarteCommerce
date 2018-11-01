import React, { Component } from 'react';

class Shelf extends Component {
    constructor(props){
        super(props);
        this.onClickAdd = this.onClickAdd.bind(this);
        this.state = {
            shelfItems: [
                'Website Development ' +<img src="" />,
                'Programing',
                'SEO'
                
            ]
        }
    }

onClickAdd(item){
    this.props.addItem(item);
}

render() {
    const shelfItems = this.state.shelfItems.map((item,idx)=>{
        return <li key={idx}><button onClick={()=>this.onClickAdd(item)}>{item}</button></li>
    }); 
    return (
        <div>
            <h2>Shelf</h2>
            <ul className='orders'>
                {shelfItems}
            </ul>
        </div>
    );
  }
}

export default Shelf;
