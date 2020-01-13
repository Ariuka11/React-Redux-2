import axios from "axios"

export const fetchingData = () => {
    return dispatch => {
        dispatch({type: 'FETCHING_DATA'})

        axios.get(`https://rickandmortyapi.com/api/character/`)
            .then(res => {
                console.log(res)
                dispatch({type : 'FETCHING_SUCCESSFUL', payload :res.data.results})
            })
            .catch(err =>{
                console.log(err)
            })
    }
}   