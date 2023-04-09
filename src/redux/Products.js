import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import apiCall from "./ApiCallService";
import { cartActions } from "./Storage";

const Products = () => {
  const [list, setList] = useState([]);
  const { productsoverall } = useSelector(state => state.cart);
  const { wishAddRemove } = useSelector(state => state.cart);
  const { totalCount } = useSelector(state => state.cart);

  
  const dispatch = useDispatch()

  useEffect(() => {
    debugger
    apiCall.get('/products')
      .then((res) => {
        setList(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])

  const handleClick = (productItem) => {
    debugger
    const checkaddedalready = productsoverall.some((prod)=>{
        return prod.id ==productItem.id
    })
    if(checkaddedalready){
        dispatch(cartActions.addCountToTable(productItem.id))
    }
    else{
        dispatch(cartActions.addToCart(productItem));
    }
   
  }

  
  const addtowishlist = (item) => {
    dispatch(cartActions.addtowishlist1(item));  
}

const WishlistRemove=(item)=>{
    dispatch(cartActions.WishlistRemove1(item.id));
}
// const hanldeNavigate = () => {
//   navigate('/wishlist')

// }
  return (
    <div>


     <h1>Products</h1>
      <section style={{
        display: 'flex',
        flexDirection: 'row',
      }}>
      {
        list.map((item, index) => {
          return (
              <div key={item.id} style={{ border: '1px solid #cdcdcd', margin: 2, textAlign: 'center', padding: 10 }}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <img src={item.image} alt={item.title} />
                <p>₹ {item.price}</p>
                <button onClick={() => handleClick(item)} disabled={totalCount>=10}>Add to Cart</button>
                {wishAddRemove.find((b) => b.id === item.id)?<button onClick={()=>WishlistRemove(item.id)}>Remove</button>:<button onClick={()=>addtowishlist(item)}>AddwishList</button>}
                
              </div>
            )
        })
      }
      </section>
    </div>
  )
}

export default Products;
