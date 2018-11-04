import React, { Component } from 'react';

class Shelf extends Component {
    constructor(props){
        super(props);
        this.onClickAdd = this.onClickAdd.bind(this);
        this.state = {
            shelfItems: [
                'Web Development ' + " " + 20.00 + "\/hr",
                'Programing' + " " + 20.00 + "\/hr",
                'SEO'+ " " + 20.00 + "\/hr",
                "Litterally any php can be placed here",
                
                
            ]
            
        }
    }

onClickAdd(item){
    this.props.addItem(item);
}

render() {
    const shelfItems = this.state.shelfItems.map((item,idx)=>{
        return <li key={idx}><button className="button button1" onClick={()=>this.onClickAdd(item)}>Add Service</button> {item}</li>
    }); 
    return (
        <div className= "itemsShelf">
            <h2>Services</h2>
            <ul className='orders'>
                {shelfItems}
            </ul>
        </div>
    );
  }
}

export default Shelf;
