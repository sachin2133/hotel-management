const init_state = {
    carts: []
}
export const cartred = (state = init_state, action) => {
    switch (action.type) {
        case "ADD_CART":
            const iteamindex = state.carts.findIndex((item) => item.id === action.payload.id)
            if (iteamindex >= 0) {
                state.carts[iteamindex].qnty += 1
            } else {
                const temp = { ...action.payload, qnty: 1 }
                return {
                    ...state,
                    carts: [...state.carts, temp]
                }
            }

        case "RMV_CART":
            const data = state.carts.filter((el) => el.id !== action.payload);


            return {
                ...state,
                carts: data
            }
        case "RMV_ONE":
        console.log('key ======' , action.payload);
        const itemId = action.payload.id ;
        state.carts[itemId].qnty =   state.carts[itemId].qnty-1 ;
        return {
                ...state,
                carts: data
            }
        // const iteamindex_DEC = state.carts.findIndex((iteam) => iteam.id === action.payload.id)
        //    console.log(state.carts[i]);
        // if (state.carts[iteamindex_DEC].qnty >= 1) {
        //         state.carts[iteamindex_DEC].qnty -= 1

        //         return {
        //             ...state,
        //             carts: [state.carts]
        //         }

        //     } else if (state.carts[iteamindex_DEC].qnty >= 1) {
        //         const data = state.carts.filter((el) => el.id !== action.payload.id);
                
             
        //         return {
        //             ...state,
        //             carts: data
        //         }
        //     }
        default: return state
    }

}