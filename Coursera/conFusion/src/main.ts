// import this module from angular core library
import { enableProdMode } from '@angular/core';

// import following module from platform browser dynamic module
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// importing from the file system
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  	enableProdMode();
}

// platformBrowserDynamic enables to bootstrap an angular application
// by taking the root module as parameter 
platformBrowserDynamic().bootstrapModule(AppModule)
  	.catch(err => console.log(err));
