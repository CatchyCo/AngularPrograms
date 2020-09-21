import { Component, OnInit } from '@angular/core';
import { ConceptListService } from './concept-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular Programs';
  list;

  constructor(public concepts: ConceptListService) { }


  ngOnInit(): void {
  }
}
