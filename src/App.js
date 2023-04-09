
import './App.css';
import { Store } from 'redux';
import commerceStore from './redux/Storage';
import CartPage from './redux/CartPage';
import Products from './redux/Products';
import { Route,Router } from "react-router-dom";
import WishList  from './redux/wishListpPage'

import { Provider } from 'react-redux';

function App() {
  return (
    <div className="App">
       <Provider store={commerceStore}>
        <CartPage />
        <hr />
        <Products />
        <WishList/>
      </Provider>



      

    </div>
  );
}

export default App;
