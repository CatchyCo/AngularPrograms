import { Component, OnInit } from '@angular/core';
import { ConceptListService } from 'src/app/concept-list.service';
import { Iconcept } from 'src/assets/Data/Iconcept';

@Component({
  selector: 'app-topic-cards',
  templateUrl: './topic-cards.component.html',
  styleUrls: ['./topic-cards.component.css']
})
export class TopicCardsComponent implements OnInit {

  constructor(public listConcept: ConceptListService) { }
  List: Iconcept[];
  ngOnInit(): void {
    this.listConcept.getConceptList()
      .subscribe(data => this.List = data);
  }

}
