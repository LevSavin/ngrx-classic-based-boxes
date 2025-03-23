import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { BoxesPageComponent } from '../pages/boxes/boxes-page.component';
import { EnvironmentService } from '../services/environment.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BoxesPageComponent],
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  private environmentService = inject(EnvironmentService);

  ngOnInit() {
    console.log(this.environmentService.getEnvironment());
  } 
}
