import {configureStore,createSlice} from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    productsoverall: [],
    wishAddRemove: [],
    totalCount: 0,
  },
  reducers: {
    
    addToCart: (state, action) => {
      state.productsoverall.push(action.payload);
      state.totalCount += 1;
    },
    addDirectCountToTable:(state,action)=>{
      let actual_count=0
      state.productsoverall.map((b,i)=>{
        if(b.id === action.payload.id){
          actual_count=state.productsoverall[i].count;
        }
      })
      
      if(actual_count<action.payload.count){
        let difference_count=action.payload.count-actual_count
        state.totalCount+=difference_count;
          state.productsoverall.map((b,i)=>{
            if(b.id === action.payload.id){
              while(difference_count>0){
              state.productsoverall[i].count+=1;
              difference_count--
              }
            }
          })
      }
      else{
        let difference_count=actual_count-action.payload.count
        state.totalCount-=difference_count;
          state.productsoverall.map((b,i)=>{
            if(b.id === action.payload.id){
              while(difference_count>0){
              state.productsoverall[i].count-=1;
              difference_count--;
              }
            }
          })

      }

    },
    
    addCountToTable:(state,action)=>{
      state.productsoverall.map((a,i)=>{
        if(a.id === action.payload){
          console.log(a)
          console.log("count state", state.productsoverall[i].count)
             state.productsoverall[i].count += 1;
           state.totalCount += 1;
            
        }
      })
    },
    removecountfromTable:(state,action)=>{
      state.productsoverall.map((b,i)=>{
        if(b.id === action.payload){
          state.productsoverall[i].count -= 1;
          return state.totalCount -= 1;
        }
      })

    },
    removeFromCart: (state, action) => {
      state.productsoverall.splice(action.payload, 1);
      state.totalCount -= 1
    },
    updateCart: (state, action) => {
      state[action.payload.index] = action.payload.value;
    },
    clearCart: (state, action) => {
      state.length = 0;
    }
  }
})

export const cartActions = cartSlice.actions;

const commerceStore = configureStore({
  reducer: {
    cart: cartSlice.reducer
  }
})

export default commerceStore;