import {Component, Input, OnInit} from '@angular/core';
import {eventDispatcher} from '../store';
import {ActionTypes} from '../store/actions';

export interface Note {
  id: string;
  title: string;
  note: string;
}

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.css']
})
export class NoteCardComponent implements OnInit {
  @Input() theNote!: Note;

  constructor() {
  }

  ngOnInit() {
  }

  deleteNote(id:any) {
    const shouldDelete = confirm('Are you sure you want to delete this note?');

    if (shouldDelete) {
      eventDispatcher.next({type: ActionTypes.DELETE_NOTE, payload: id});
    }
  }

}
