import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Foto } from 'src/app/shared/components/interfaces/fotos.interface';
 
export const selectFotos = createFeatureSelector<ReadonlyArray<Foto>>('fotos');     //Lo definido en el app module

export const selecUnaFoto = createFeatureSelector<Foto>('fotos')

// export const selectBooks = createFeatureSelector<ReadonlyArray<Book>>('books');
 
// export const selectCollectionState = createFeatureSelector<
//   ReadonlyArray<string>
// >('collection');
 
// export const selectBookCollection = createSelector(
//   selectBooks,
//   selectCollectionState,
//   (books, collection) => {
//     return collection.map((id) => books.find((book) => book.id === id));
//   }
// );