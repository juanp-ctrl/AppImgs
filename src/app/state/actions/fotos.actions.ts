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
