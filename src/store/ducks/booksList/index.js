import {createAction, createReducer} from "@reduxjs/toolkit"

export class bookItem{   
    constructor (titulo, resumo, autor, lancamento, thumb){              
        this.titulo = titulo
        this.resumo = resumo
        this.autor = autor
        this.lancamento = lancamento
        this.thumb = thumb
        this.value = 0
    }
}

const INITIAL_STATE = []

export const addBooksinList = createAction("ADD_BOOK_LIST")

export default createReducer (INITIAL_STATE, {
    [addBooksinList.type] : (state, action) => [...state, action.payload]
})
