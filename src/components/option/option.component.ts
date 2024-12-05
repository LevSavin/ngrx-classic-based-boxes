import {
  Component,
  inject,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { IOption } from '../../types';
import { defaultOption } from '../../constants';
import { SelectionService } from '../../services/selection.service';

@Component({
  selector: 'app-option',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './option.component.html',
  styleUrl: './option.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OptionComponent {
  @Input({ required: true }) option: IOption = defaultOption;
  protected readonly selectionService = inject(SelectionService);
}
