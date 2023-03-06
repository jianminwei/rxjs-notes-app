import { Component, OnInit  } from '@angular/core';
import {eventDispatcher, store} from './store';
import {ActionTypes} from './store/actions';
import {Note} from './note-card/note-card.component';

//you can define a infile interface, pretty cool.
interface Food {
  value: string;
  viewValue: string;
}


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

  /**
   * Below section is for material UI stuff.
   */
  title = 'material-demo';
  notifications=1;
  sidenavOpened = false;
  tabIndex:number=0;

  log(state:string) {
    console.log(state);
  }

  tabSelectedIndexChange(selectedTabIndex:any) {
    this.tabIndex = selectedTabIndex;

  }

  // for Mat form select
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];

  selectedValue:string = "";

}
