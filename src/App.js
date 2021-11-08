import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import ShoppingCart from './components/ShoppingCart';
import OrderResult from './components/OrderResult';
import ItemList from './components/ItemList';

// this chat app is using Fake Store API (https://fakestoreapi.com/)

class APP extends React.Component {
  constructor(){
    super();
    this.state = {
        //initial state of shopping cart
        items: [],
        //selected item after itemList, will be sent into ShoppingCart
        selectedItem: []
    };
  }

  //fetch data from fake store api right after mount
  componentDidMount() {
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then((result) => {
              this.setState({items: result});
            });
  }

  //when the add button clicked, coresponding item will be store into selectedItem
  selectItem = (itemProps) => {
    const item = this.state.items.filter((i) => i.id === itemProps.id)[0];
    this.setState({selectedItem: [...this.state.selectedItem, { ...item, value: 0 }]})
  };

  //when click back to ItemList page, reset items state
  backTo = () => {
    this.setState({selectedItem: []});
  };
  
  //increase the count of coresponding item
  increaseCount = (itemProps) =>{
      const increasedItem = [...this.state.selectedItem];
      const index = increasedItem.indexOf(itemProps);
      const modifiedItem = itemProps;
      modifiedItem.value++;
      increasedItem[index] = modifiedItem;
      this.setState({selectedItem: increasedItem});
  };

  //delete item with the specified id, when cancel or delete button clicked
  deleteItem = (itemId) => {
      const modifiedItem = this.state.selectedItem.filter((i) => i.id !== itemId);
      this.setState({selectedItem: modifiedItem});
  };

  //reset all value in items
  resetCounters = () => {
      const resetedItems = this.state.selectedItem.map((i) => {
          i.value = 0;
          return i;
      });
      this.setState({selectedItem: resetedItems});
  };

  render() { 
    //console.log(this.state.items);
    console.log(this.state.selectedItem);
    return (
      <div>
        <Router>
          <NavBar itemsObj={this.state.selectedItem} />

          <Switch>
            <Route
              path="/"
              exact
              render={(props)=> (
                <ItemList 
                {...props}
                itemsObj={this.state.items}
                selectItem={this.selectItem}
                deleteItem={this.deleteItem}
                />
              )}
            />

            <Route
              path="/cart"
              render={(props)=> (
                <ShoppingCart 
                {...props}
                onIncrease={this.increaseCount}
                onDelete={this.deleteItem} 
                onReset={this.resetCounters} 
                backTo={this.backTo}
                itemsObj={this.state.selectedItem}
                />
              )}
            />

            <Route
              path="/check"
              render={(props)=> (
                <OrderResult 
                {...props} 
                backTo={this.backTo} 
                myOrder={this.state.selectedItem.filter(c => c.value > 0)} />
              )}
            />
          </Switch>

          <footer className="bg-secondary text-white text-center text-lg-start" >
            <div className="p-3">
              © Copyright: 2022
            </div>
          </footer>
        </Router>
      </div>
    );
  }
}
 
export default APP;