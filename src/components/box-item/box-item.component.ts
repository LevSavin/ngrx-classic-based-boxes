import {
  Component,
  inject,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { IBox } from '../../types';
import { defaultBox } from '../../constants';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { BoxesState } from '../../state/boxes/boxes.reducers';
import * as BoxesActions from '../../state/boxes/boxes.actions'
import * as BoxesSelectors from '../../state/boxes/boxes.selectors'

@Component({
  selector: 'app-box-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './box-item.component.html',
  styleUrl: './box-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BoxItemComponent {
  readonly store = inject(Store<BoxesState>);
  @Input({ required: true }) box: IBox = defaultBox;
  @Input({ required: true }) index: number = 0;
  activeBoxId$: Observable<number | null> = this.store.select(BoxesSelectors.selectActiveBoxId);

  selectBox(id: number) {
    this.store.dispatch(BoxesActions.selectBox({id}));
  }
}
