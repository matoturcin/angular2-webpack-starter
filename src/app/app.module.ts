import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TestComponent } from './test.component';
import { routing, appRoutingProviders } from './app.routes';

@NgModule({
  imports: [
    BrowserModule,
    routing
  ],
  declarations: [
    TestComponent,
    AppComponent    
  ],
  bootstrap: [ AppComponent ],
  providers: [appRoutingProviders]
})
export class AppModule { }