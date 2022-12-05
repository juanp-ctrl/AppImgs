import { createReducer, on } from '@ngrx/store';

import { Foto } from 'src/app/shared/components/interfaces/fotos.interface';
import { addFoto, retrievedFotosList } from '../actions/fotos.actions';

export const initialState: ReadonlyArray<Foto> = []

export const fotosReducer = createReducer(
    initialState,
    on(addFoto, (oldState, { foto }) => {
        console.log("uy,", foto)
        return [...oldState, ...[foto]]
    }),
    on(retrievedFotosList, (oldState, { fotos }) => {
        return [...oldState, ...fotos]
    })
)

// export const initialState: ReadonlyArray<Book> = [];

// export const booksReducer = createReducer(
//   initialState,
//   on(BooksApiActions.retrievedBookList, (_state, { books }) => books)
// );