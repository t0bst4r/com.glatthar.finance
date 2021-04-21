import {createAction, props} from '@ngrx/store';

export const useUuid = createAction('uuid/use', props<{ uuid: string }>());
