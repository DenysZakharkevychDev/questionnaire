import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { path } from './../../constants/path.constant';
import { ICard } from './../../models/card.model';
import { CardService } from './../../services/card.service';

@Component({
  selector: 'app-question-management',
  templateUrl: './question-management.component.html',
  styleUrls: ['./question-management.component.scss'],
})
export class QuestionManagementComponent implements OnInit {
  path = path;
  cards$: Observable<ICard[]>;
  constructor(private cardService: CardService) {}

  ngOnInit(): void {
    this.cards$ = this.cardService.cards$;
  }
}
