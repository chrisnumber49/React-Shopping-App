import React from 'react';

class Item extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            addDisplay: "",
            cancelDisplay: "d-none"
        };
    }

    //click add will let add/cancel button hidden/shown, then add coresponding item to selectedItem
    clickAdd = () => {
        this.setState({addDisplay: "d-none", cancelDisplay: ""});
        this.props.selectItem(this.props.itemsObj);
    }

    //click cancel will let add/cancel button shown/hidden, then delete coresponding item from selectedItem
    clickCancel = () => {
        this.setState({addDisplay: "", cancelDisplay: "d-none"});
        this.props.deleteItem(this.props.itemsObj.id);
    }
    
    render() { 
        return (
            <div className="col d-flex flex-wrap justify-content-center mb-3" style={{marginTop:'50px'}}>
                <div className="card border border-dark rounded-lg shadow-lg" style={{width: '24rem'}}>
                    {/* card image */}
                    <div className="d-flex align-items-center justify-content-center" style={{height:'400px', overflow:'hidden'}}>
                        <img 
                            src={this.props.itemsObj.image}
                            className="card-img-top" 
                            style={{maxWidth:'90%', maxHeight:'100%'}}
                            alt="..."
                        />
                    </div>

                    {/* card body */}
                    <div className="card-body text-center bg-light border-top border-dark">
                        <h4 className="font-weight-bolder d-flex justify-content-center align-items-center" style={{height:'100px'}}>
                            {this.props.itemsObj.title}
                        </h4>

                        <h5>{this.props.itemsObj.price}€</h5>

                        {/* click add/cancel button, call clickAdd/clickCancel function */}
                        <button className={`btn btn-success m-2 ${this.state.addDisplay}`} onClick={()=> this.clickAdd()}>
                            Add to cart
                        </button>

                        <button className={`btn btn-danger m-2 ${this.state.cancelDisplay}`} onClick={()=> this.clickCancel()}>
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Item;