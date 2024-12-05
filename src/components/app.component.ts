import { Component, ChangeDetectionStrategy } from '@angular/core';
import { BoxesPageComponent } from '../pages/boxes/boxes-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BoxesPageComponent],
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
