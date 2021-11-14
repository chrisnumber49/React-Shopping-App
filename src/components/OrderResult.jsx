import React from 'react';

class OrderResult extends React.Component {
    constructor(props){
        super(props);
    }

    //when click back to ItemList page, reset items state
    back = () =>{
        this.props.backTo();
        this.props.history.push("/");
    };

    render() { 
        // render all of purchased item on list
        const myItem = this.props.myOrder.map((list, index) => (
            <div key={list.id} className="ml-3" style={{width: '600px'}}>
                <h5>{index}. {list.title}</h5>
                <h5 className="font-weight-light">Amount: {list.value}</h5>
                <h5 className="font-weight-light">= {list.price * list.value}€</h5>
                <hr/>
            </div>
        ))
        
        // calculate the subtotal of price
        const subtotal = this.props.myOrder.reduce((currentTotal, element) => {
            return currentTotal + element.price * element.value;
        }, 0);
        
        return (
            <div className="container-fluid" style={{marginTop:'80px', marginBottom:'360px'}}>
                <h1 className="font-weight-bold text-success m-3">Your order is succeeded!</h1>
                <h2 className="m-3 font-weight-bold">Item:</h2>

                {myItem}

                <h1 className="font-weight-bold text-dark m-3 mb-2">Subtotal: {subtotal}€</h1>
                <p>
                    <button className="btn btn-lg ml-3" onClick={() => this.back()}>OK</button>
                </p>
            </div>
        );
    }
}
 
export default OrderResult;