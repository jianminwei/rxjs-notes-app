import { Component, OnInit, Input } from '@angular/core';
import { Note } from '../store/note';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() notes!: Note[];

  constructor() { }

  ngOnInit(): void {
  }

}
