import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-question-card-preview',
  templateUrl: './question-card-preview.component.html',
  styleUrls: ['./question-card-preview.component.scss'],
})
export class QuestionCardPreviewComponent implements OnInit {
  @Input() creationDate: Date;
  @Input() type: string;
  @Input() text: string;

  constructor() {}

  ngOnInit(): void {}
}
