import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { environment } from 'src/environments/environment';

import { AppModule } from './app/app.module';

console.log("Current environment: " + environment.environment);
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
