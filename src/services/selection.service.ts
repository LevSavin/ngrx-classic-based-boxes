import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IBox, IOption, ILSData } from '../types';
import { options, localStorageKey } from '../constants';

@Injectable({
  providedIn: 'root',
})
export class SelectionService {
  /* activeBoxId = new BehaviorSubject<number | null>(null);
  activeBox = new BehaviorSubject<IBox | null>(null);
  boxes = new BehaviorSubject<IBox[]>([]);
  options: readonly IOption[] = options(); */

  constructor() {
    //this.initData();
  }

  /* initData(): void {
    const dataString = window.localStorage.getItem(localStorageKey);
    const boxes = dataString
      ? JSON.parse(dataString)?.boxes
      : this.getEmptyBoxes();
    this.boxes.next(boxes);
  }

  getEmptyBoxes(): IBox[] {
    return new Array(10).fill(null).map((_, index) => ({
      id: index + 1,
      option: null,
    }));
  } */

  /* saveData(): void {
    const data: ILSData = { boxes: this.boxes.value };
    localStorage.setItem(localStorageKey, JSON.stringify(data));
  } */

  /* selectBox(id: number): void {
    this.activeBoxId.next(id);
    const index = this.boxes.value.findIndex(
      (el) => el.id === this.activeBoxId.value
    );
    let box: IBox | null = null;
    if (index !== -1) {
      box = this.boxes.value[index];
    }
    this.activeBox.next(box);
  } */

  /* selectOption(option: IOption): void {
    const boxes = structuredClone(this.boxes.value);
    const idx = boxes.findIndex((el) => el.id === this.activeBoxId.value);
    if (idx !== -1) {
      boxes[idx].option = option;
    }
    this.boxes.next(boxes);

    let nextId = boxes[idx].id;
    let box: IBox = this.boxes.value[idx];
    if (idx + 1 < boxes.length) {
      nextId = boxes[idx + 1].id;
      box = boxes[idx + 1];
    }

    this.activeBoxId.next(nextId);
    this.activeBox.next(structuredClone(box));
    this.saveData();
  } */

  /* clearBoxes(): void {
    const boxes = structuredClone(this.boxes.value);
    boxes.forEach((box) => {
      box.option = null;
    });
    this.boxes.next(boxes);
    if (this.activeBox.value) {
      const box = this.activeBox.value;
      box.option = null;
      this.activeBox.next(box);
    }
    localStorage.removeItem(localStorageKey);
  } */

  /* getTotalValue(): number {
    return +this.boxes.value
      .reduce((acc, box) => acc + (box?.option?.value || 0), 0)
      .toFixed(2);
  } */
}
