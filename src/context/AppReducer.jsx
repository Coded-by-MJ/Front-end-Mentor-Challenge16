export const appReducer = (state, action) => {

    switch (action.type) {
       
        case "ADD_ITEM":
            return state.map(item =>
                item.id === action.payload
                    ? { ...item, inCart: true, qtyBought: item.qtyBought + 1 }
                    : item
            );    

        case "REMOVE_ITEM":
            return state.map(item =>
                item.id === action.payload
                    ? { ...item, qtyBought: 0, inCart: false }
                    : item
            ); 
            
       case "INCREASE_QTY":
            return state.map(item =>
                item.id === action.payload
                    ? { ...item, qtyBought: item.qtyBought + 1}
                    : item
            );
            
        case "DECREASE_QTY":
            return state.map(item =>
                item.id === action.payload
                    ? { 
                    
                            ...item,
                            qtyBought: item.qtyBought <= 1 ? 0 : item.qtyBought - 1,
                            inCart: item.qtyBought <= 1 ? false : item.inCart
                      }
                    
                    : item
            );

        case "RESET_ALL":
            return state.map(item =>
                 ({
                    ...item,
                    inCart: false,
                    qtyBought: 0,

                 })
            );
            
            default:
                return state;

    }
   
}