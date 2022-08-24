import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { localStorageKeys } from './../constants/local-storage.constant';
import { ICard } from './../models/card.model';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  cardsSubject: BehaviorSubject<ICard[]>;
  cards$: Observable<ICard[]>;

  constructor() {
    const cards = this.getCardsFromLocalStorage();
    this.cardsSubject = new BehaviorSubject(cards);
    this.cards$ = this.cardsSubject.asObservable();
    this.cards$.subscribe(() => {
      this.setCardsToLocalStorage();
    });
  }

  addCard(card: ICard) {
    const cards = this.cardsSubject.getValue();
    this.cardsSubject.next([...cards, card]);
  }

  setCardsToLocalStorage() {
    const cards = this.cardsSubject.getValue();
    localStorage.setItem(localStorageKeys.CARDS, JSON.stringify(cards));
  }

  getCardsFromLocalStorage() {
    return JSON.parse(
      localStorage.getItem(localStorageKeys.CARDS) as string
    ) as ICard[];
  }
}
