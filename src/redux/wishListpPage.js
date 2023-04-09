import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import apiCall from "./ApiCallService";
import { cartActions } from "./Storage";

const WishListPage=()=>{
  const { wishAddRemove } = useSelector(state => state.cart);
  console.log(wishAddRemove,"wish")


return (
    <div >
        <h1>List of WishList Products</h1>
        <section style={{
            display: 'flex',
            flexDirection: 'row',
        }}>
            {
                wishAddRemove?.map((item, i) => {
                    return (<>
                        <div key={item.id} style={{ border: '1px solid #cdcdcd', margin: 2, textAlign: 'center', padding: 10 }}>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                            <img className="productImage" style={{ height: '200px', width: '200px' }} src={item.image} alt={item.title} />
                            <p>₹ {item.price}</p>
                           
                        </div><div style={{ marginRight: '3%' }}></div>
                    </>
                    )
                })
            }
        </section>
    </div>
)
        }

        export default WishListPage;