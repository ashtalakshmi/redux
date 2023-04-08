
import './App.css';
import { Store } from 'redux';
import commerceStore from './redux/Storage';
import CartPage from './redux/CartPage';
import Products from './redux/Products';
import { Provider } from 'react-redux';

function App() {
  return (
    <div className="App">
       <Provider store={commerceStore}>
        <CartPage />
        <hr />
        <Products />
      </Provider>
    </div>
  );
}

export default App;
