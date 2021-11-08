import React from 'react';
import { Link } from "react-router-dom";
import Item from './Item';

class ItemList extends React.Component {
    constructor(props){
        super(props);
    }

    render() { 
        let mylist;
        // render all of item on card
        mylist = this.props.itemsObj.map((item, index) => (
                        <Item 
                            key={item.id} 
                            itemsObj={item} 
                            selectItem={this.props.selectItem}
                            deleteItem={this.props.deleteItem}
                        />
                    ));

        return (
            <div className="container-fluid" style={{margin:'50px 0px'}}>
                <div className="row">
                    {mylist}
                </div>

                {/* go to ShoppingCart */}
                <Link to="/cart">
                    <button 
                    className="btn btn-success btn-lg" 
                    style={{position: 'fixed', bottom: '30px', right: '30px'}}>Cart</button>
                </Link>
            </div>
        );
    }
}

export default ItemList;