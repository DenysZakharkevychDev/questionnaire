import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionType } from '../../enums/question-type.enum';
import { path } from './../../constants/path.constant';
import { ICard } from './../../models/card.model';
import { CardService } from './../../services/card.service';

@Component({
  selector: 'app-create-question',
  templateUrl: './create-question.component.html',
  styleUrls: ['./create-question.component.scss'],
})
export class CreateQuestionComponent implements OnInit {
  QuestionType = QuestionType;

  constructor(private cardService: CardService, private router: Router) {}

  ngOnInit(): void {}

  createQuestion() {
    const card: ICard = {
      creationDate: new Date(),
      type: QuestionType.SINGLE_CHOICE,
      text: 'Дано трикутник АВС. ВD – бісектриса трикутника, ∠BAC = 60°, ∠CBD = 35°',
    };
    this.cardService.addCard(card);
    this.router.navigate([`/${path.QUESTION_MANAGEMENT}`]);
  }
}
