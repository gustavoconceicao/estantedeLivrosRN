import api from "./bookApi"
import {addBooks} from "../store/ducks/book"

export function searchBooks(titulo) {   
    return dispatch => {
        api.get("/admin/searchbytitle/" + titulo)           
            .then(res => {                
                dispatch(addBooks(res.data.items))
            })
            .catch(error => console.log(error))
    }
}