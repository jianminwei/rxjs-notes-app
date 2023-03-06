import { Component, OnInit  } from '@angular/core';
import {eventDispatcher, store} from './store';
import {ActionTypes} from './store/actions';
import {Note} from './note-card/note-card.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  notes:Note[] = [];

  constructor() {
    store.subscribe((state) => {
      const {notes} = state;
      this.notes = notes;
    });
  }


  ngOnInit() {
    eventDispatcher.next({
      type: ActionTypes.GET_NOTES,

       //Note: for ActionTypes.GET_NOTES event, it doesn't need a payload.
       //      So here pass a empty payload.
       //      The purpose here is to just trigger retrieving all the notes.
      payload:  {id: "", title: "", note: "" } 
    });
  }

}
