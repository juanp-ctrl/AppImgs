import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Foto } from 'src/app/shared/components/interfaces/fotos.interface';
 
export const selectFotos = createFeatureSelector<ReadonlyArray<Foto>>('fotos');     //Lo definido en el app module

export const selectUnaFoto = createFeatureSelector<Foto>('fotos')
