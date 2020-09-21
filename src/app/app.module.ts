import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateDriveFormValidationComponent } from './Component/template-drive-form-validation/template-drive-form-validation.component';
import { ReactiveFormValidationComponent } from './Component/reactive-form-validation/reactive-form-validation.component';
import { TopicCardsComponent } from './Component/topic-cards/topic-cards.component';
import {FormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    TemplateDriveFormValidationComponent,
    ReactiveFormValidationComponent,
    TopicCardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
