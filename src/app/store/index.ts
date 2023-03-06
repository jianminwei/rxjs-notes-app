import {Subject} from 'rxjs';
import {ActionTypes} from './actions';
import {Note} from '../store/note';

interface State {
  notes: Note[];
}

let state: State = {
  notes: [],
};

interface Event {
  type: String;
  payload: Note;
}

export const store = new Subject<State>();
export const eventDispatcher = new Subject<Event>();

eventDispatcher.subscribe((data: Event) => {
  switch (data.type) {
    case ActionTypes.GET_NOTES:
      store.next(state);
      break;

    case ActionTypes.CREATE_NOTE:
      state = {
        notes: [...state.notes, data.payload],
      };
      store.next(state);
      break;

    case ActionTypes.DELETE_NOTE:
      const {notes} = state;
      const id = data.payload;
      const updatedNotes = notes.filter((note:any) => note.id !== id);
      state = {
        notes: updatedNotes
      };
      store.next(state);
      break;
    default:
      break;
  }
});