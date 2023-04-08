import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "./Storage";
import Products from "./Products";

const CartPage = () => {
  const dispatch = useDispatch();
  const { totalItems, data,totalCount} = useSelector(storeObj => {
    return {
      totalItems: storeObj.cart?.productsoverall.length,
      data: storeObj.cart?.productsoverall,
      totalCount :storeObj.cart?.totalCount,
    }
  })

  const handleRemove = (itemIndex) => {
    dispatch(cartActions.removeFromCart(itemIndex));
  }
  const handleInputChange=(e,id)=>{
    const count= e.target.value
    console.log("count")
    dispatch(cartActions.addDirectCountToTable({count:parseInt(count),id}));
  }
  const handleIncrement=(item)=>{
    debugger
    dispatch(cartActions.addCountToTable(item.id));
  }
  const handleDecrement=(item)=>{
    dispatch(cartActions.removecountfromTable(item.id))
  }

  return (
    <div>
      <h1>Cart Page</h1>
      <h2>Total Items: {totalCount}</h2>
      <section style={{
        display: 'flex',
        flexDirection: 'column',
      }}>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', borderBottom: '1px solid #cdcdcd', textAlign: 'center', padding: 10 }}>
          <span>#</span>
          <span>Image</span>
          <span>Title</span>
          <span>Description</span>
          <span>Price</span>
          <span>Count</span>
          <span>Action</span>
        </div>
        {
          data?.map((item, index) => {
            console.log(item)
            return (
              <div key={`item-${index}-${item.id}`} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', borderBottom: '1px solid #cdcdcd', textAlign: 'center', padding: 10 }}>
                <span>{index+1}</span>
                <img src={item.image} alt={item.title} height={40} width='auto' />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <p>₹ {item.price}</p>
                <span styles={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
                  <button style={{ padding: 4, fontSize: 20 }} onClick={()=>{handleDecrement(item)}} disabled={item.count<=1} >-</button>
                  <span>
                    <input  type="number" value={item.count || 1}  onChange={(e)=>{handleInputChange(e,item.id)}} style={{ padding: 8, width: 50, textAlign: 'center' }} />
                  </span>
                  <button style={{ padding: 4, fontSize: 20 }} onClick={()=>{handleIncrement(item)}} value={item.count || 1} disabled={totalCount>=10} >+</button>
                </span>
                <button onClick={() => handleRemove(index)}>Remove</button>
              </div>
            )
          })
        }
      </section>
    </div>
  )
}

export default CartPage;