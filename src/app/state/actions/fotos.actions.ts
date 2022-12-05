import { createActionGroup, createAction, props } from '@ngrx/store';
import { Foto } from 'src/app/shared/components/interfaces/fotos.interface';

export const addFoto = createAction(
    '[Fotos List] Add Foto',
    props<{foto: Foto}>()
)

export const retrievedFotosList = createAction(
    '[Item List/API] Retrieve Foto Success',
    props<{fotos: ReadonlyArray<Foto>}>()
)

// export const BooksActions = createActionGroup({
//   source: 'Books',
//   events: {
//     'Add Book': props<{ bookId: string }>(),
//     'Remove Book': props<{ bookId: string }>(),
//   },
// });
 
// export const BooksApiActions = createActionGroup({
//   source: 'Books API',
//   events: {
//     'Retrieved Book List': props<{ books: ReadonlyArray<Book> }>(),
//   },
// });