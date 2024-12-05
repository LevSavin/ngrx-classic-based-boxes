import {
  Component,
  inject,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { IBox, IOption } from '../../types';
import { defaultOption } from '../../constants';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { BoxesState } from '../../state/boxes/boxes.reducers';
import * as BoxesActions from '../../state/boxes/boxes.actions'
import * as BoxesSelectors from '../../state/boxes/boxes.selectors'

@Component({
  selector: 'app-option',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './option.component.html',
  styleUrl: './option.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OptionComponent {
  readonly store = inject(Store<BoxesState>);
  @Input({ required: true }) option: IOption = defaultOption;
  activeBox$: Observable<IBox | null> = this.store.select(BoxesSelectors.selectActiveBox);

  selectOption(option: IOption) {
    this.store.dispatch(BoxesActions.selectOption({option}));
  }
}
