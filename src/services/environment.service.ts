import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EnvironmentService {
  getEnvironment(): any {
    return environment;
  }

  getApiUrl(): string {
    return environment.API_URL;
  }
} 