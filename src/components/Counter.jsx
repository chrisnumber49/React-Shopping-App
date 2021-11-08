import React from 'react';


class Counter extends React.Component {
    constructor(props){
        super(props);
    }

    // when the value is greater than 1, change color of displayed number to yellow
    countClassName = () => {
        let className = "ml-3 badge badge-";
        className += this.props.itemsObj.value ===0 ? "secondary" : "warning";
        return className
    }

    // when the value is greater than 1, change displayed from "Zero" to number
    formatCount = () => {
        const myCount = this.props.itemsObj.value;
        return myCount === 0 ? "Zero" : myCount;
    }

    render() { 
        return (
            <React.Fragment>
                {this.props.children}
                <span className={this.countClassName()} style={{fontSize:20, width:'70px'}}> {this.formatCount()} </span>

                <span className="badge badge-pill badge-dark m-2" style={{fontSize:20, width:'120px'}}> 
                    {this.props.itemsObj.value * this.props.itemsObj.price}€
                </span>

                {/* sent its itemsObj to increaseCount function */}
                <button 
                    className="btn btn-primary btn-sm m-1" 
                    style={{fontSize:15}} 
                    onClick={() => this.props.onIncrease(this.props.itemsObj)}
                >
                    +
                </button>

                {/* sent it itemsObj id to deleteItem function */}
                <button 
                    className="btn btn-danger btn-sm m-1" 
                    onClick={() => this.props.onDelete(this.props.itemsObj.id)}
                >
                    Delete
                </button>
                <hr/>
            </React.Fragment>
        );
    }
}
 
export default Counter;