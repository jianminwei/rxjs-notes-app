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

  notes:any[] = [];

  constructor() {
    store.subscribe((state) => {
      const {notes} = state;
      this.notes = notes;
    });
  }


  ngOnInit() {
    eventDispatcher.next({
      type: ActionTypes.GET_NOTES,
      payload: this.notes
    });
  }

}
