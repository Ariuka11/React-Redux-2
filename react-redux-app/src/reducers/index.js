export const initialState = {
    characters: [],
    isLoading : false
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case "FETCHING_DATA":
            return {...state, isLoading: true}
        case "FETCHING_SUCCESSFUL":
            return {...state, isLoading: false, characters: action.payload}
        default: return state
    }
   
}