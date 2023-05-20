export const add=(item)=>{
    return{
        type:"ADD_CART",
        payload:item
    }
}


export const DLT=(item)=>{
    return{
        type:"RMV_CART",
        payload:item
    }
}

export const remove=(itam)=>{
    return{
        type:"RMV_ONE",
        payload:itam
    }
}
