import {  getDefaultMiddleware , configureStore} from '@reduxjs/toolkit'
import rootBooks from "../store/ducks/book"
import roootListBooks from "../store/ducks/booksList"
import rootListBooksWait from "../store/ducks/bookListWait"
export default configureStore({
    reducer: {
        books: rootBooks,
        listBooks : roootListBooks,
        listBooksWait : rootListBooksWait
    },

    middleware: getDefaultMiddleware({
        serializableCheck: false,
    })
})