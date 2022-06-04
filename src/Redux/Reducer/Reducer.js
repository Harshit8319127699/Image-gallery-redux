const initialState = {
    imageurl:[]
}


const  imageReducer=(state=initialState,action)=>{
switch (action.type) {
    case "AddImage":
        return{
            ...state,
            imageurl:[...state.imageurl,action.payload]
        }
        case "DeleteImage":
            return{
                ...state,
                imageurl:action.payload
            }
            

    default:
        return state;
}
}

export default imageReducer