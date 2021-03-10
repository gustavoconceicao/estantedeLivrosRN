import {createAction, createReducer} from "@reduxjs/toolkit"

const INITIAL_STATE = []

export const addBooksinListWait = createAction("ADD_BOOK_LIST_WAIT")

export default createReducer (INITIAL_STATE, {
    [addBooksinListWait.type] : (state, action) => [...state, action.payload]
})
