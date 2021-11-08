import React from 'react';

class NavBar extends React.Component {
    constructor(props){
        super(props);
    }

    render() { 
        return (
        <div>
            <nav className="navbar navbar-dark bg-secondary fixed-top">
                <span className="navbar-brand mb-0 h1 font-weight-bold">Shopping Cart</span>
                <span className="navbar-brand mb-0" style={{float:'left'}}> Selected Items 
                    {/* shows how many item in the ShoppingCart */}
                    <span className="badge badge-pill badge-dark ml-2"> 
                        {this.props.itemsObj.length}
                    </span>
                </span>
            </nav>
        </div>
        );
    }
}
 
export default NavBar;