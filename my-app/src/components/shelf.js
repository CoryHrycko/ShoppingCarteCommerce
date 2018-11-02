import React, { Component } from 'react';

class Shelf extends Component {
    constructor(props){
        super(props);
        this.onClickAdd = this.onClickAdd.bind(this);
        this.state = {
            shelfItems: [
                'Website Development ' + " " + 20.00 + "\/hr",
                'Programing' + " " + 20.00 + "\/hr",
                'SEO'+ " " + 20.00 + "\/hr"
                
            ]
        }
    }

onClickAdd(item){
    this.props.addItem(item);
}

render() {
    const shelfItems = this.state.shelfItems.map((item,idx)=>{
        return <li key={idx}><button onClick={()=>this.onClickAdd(item)}>Add Service</button> {item}</li>
    }); 
    return (
        <div className= "itemsShelf">
            <h2>Shelf</h2>
            <ul className='orders'>
                {shelfItems}
            </ul>
        </div>
    );
  }
}

export default Shelf;