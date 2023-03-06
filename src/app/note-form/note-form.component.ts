import { Component, OnInit } from '@angular/core';
import { v4 } from 'uuid';
import { Note } from '../store/note';
import { emptyNote } from '../store/note';
import { eventDispatcher } from '../store';
import { ActionTypes } from '../store/actions';

@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.css']
})
export class NoteFormComponent implements OnInit {

  constructor() {
  }

  note: Note = emptyNote;

  step = 1;

  isStepComplete(step: number): boolean {
    switch (step) {
      case 1:
        return !!this.note.title;
      case 2:
        return !!this.note.note;
    }

    return !!this.note.note;
  }

  completeStep() {
    if (this.step === 1) {
      const stepComplete = this.isStepComplete(this.step);
      if (stepComplete) {
        this.step += 1;
        return;
      }
    }

    const formComplete = this.isStepComplete(this.step);
    if (formComplete) {
      this.submit(this.note);
    }
  }

  prevStep() {
    if (this.step > 1) {
      this.step -= 1;
    }
  }

  resetState() {
    this.note = {
      id: '',
      title: '',
      note: ''
    };
    this.step = 1;
  }

  submit(note: Note) {
    const noteWithId: Note = {
      ...note,
      id: v4(),
    };
    eventDispatcher.next({ type: ActionTypes.CREATE_NOTE, payload: noteWithId });
    this.resetState();
  }

  ngOnInit() {
  }

}