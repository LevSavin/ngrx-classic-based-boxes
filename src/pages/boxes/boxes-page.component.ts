import { Component, inject, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoxItemComponent } from '../../components/box-item/box-item.component';
import { OptionComponent } from '../../components/option/option.component';
import type { IBox, IOption, IExample } from '../../types';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { BoxesState } from '../../state/boxes/boxes.reducers';
import * as BoxesActions from '../../state/boxes/boxes.actions'
import * as BoxesSelectors from '../../state/boxes/boxes.selectors'

@Component({
  selector: 'app-boxes-page-component',
  standalone: true,
  imports: [CommonModule, BoxItemComponent, OptionComponent],
  templateUrl: './boxes-page.component.html',
  styleUrl: './boxes-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BoxesPageComponent implements OnInit {
  readonly store = inject(Store<BoxesState>);
  boxes$: Observable<IBox[]> = this.store.select(BoxesSelectors.selectBoxes);
  options$: Observable<IOption[]> = this.store.select(BoxesSelectors.selectOptions);
  activeBoxId$: Observable<number | null> = this.store.select(BoxesSelectors.selectActiveBoxId);
  totalValue$: Observable<number> = this.store.select(BoxesSelectors.selectTotalValue);
  example$: Observable<IExample | null> = this.store.select(BoxesSelectors.selectExample);

  ngOnInit(): void {
    this.store.dispatch(BoxesActions.initBoxes());
    this.store.dispatch(BoxesActions.loadExample({id: 1})); // just test data as loading example
  }

  clearBoxes() {
    this.store.dispatch(BoxesActions.clearBoxes());
  }
}
