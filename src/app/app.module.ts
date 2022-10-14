import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HighlightDirective } from './highlight.directive';
import { ContainerComponentComponent } from './container-component/container-component.component';
import { PresentationComponentComponent } from './presentation-component/presentation-component.component';
import { ExponentialPipe } from './exponential.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { TimeComponent } from './time/time.component';
import { ApiServiceComponent } from './api-service/api-service.component';


@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    ContainerComponentComponent,
    PresentationComponentComponent,
    ExponentialPipe,
    TimeComponent,
    ApiServiceComponent
  ],

  imports:[ 
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }