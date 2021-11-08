import React from 'react';
import { Link } from "react-router-dom";
import Counter from './Counter';

class ShoppingCart extends React.Component {
    constructor(props){
        super(props);
    }

    back = () =>{
        this.props.backTo();
        this.props.history.push("/");
    };

    render() { 
        let mylist;
        // render all of selected item on the Counter component
        if (this.props.itemsObj.length !== 0) {
            mylist = this.props.itemsObj.map((item, index) => (
                        <Counter 
                            key={item.id} 
                            itemsObj={item} 
                            onDelete={this.props.onDelete} 
                            onIncrease={this.props.onIncrease}
                        > 
                            <h4 className="mt-2 ml-3">Item {index}: {item.title}</h4> 
                        </Counter>
                     ));
        } else {
            mylist = <h1 className="m-3">Your cart is empty!</h1>;
        }


        return (
            <div className="container-fluid" style={{marginTop:'80px', marginBottom:'520px'}}>
                {mylist}

                <p>
                    {/* reset all value in items  */}
                    {this.props.itemsObj.length !== 0 && (
                        <button className="btn btn-lg btn-outline-dark ml-3" onClick={this.props.onReset}>Reset Amount</button>
                    )}

                    {/* the check out button shows only when the number of purchased item is more than 1 */}
                    {this.props.itemsObj.filter(c => c.value > 0).length > 0 && (
                        <Link to="/check">
                            <button className="btn btn-lg btn-success m-1">Checkout</button>
                        </Link>
                    )}
                </p>
                
                {/* when click back to ItemList page, reset items state */}
                <p>
                    <button className="btn btn-lg ml-3" onClick={() => this.back()}>Back</button>
                </p>
            </div>
        );
    }
}
 
export default ShoppingCart;