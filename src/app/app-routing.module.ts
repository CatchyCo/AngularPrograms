import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormValidationComponent } from './Component/reactive-form-validation/reactive-form-validation.component';
import { TemplateDriveFormValidationComponent } from './Component/template-drive-form-validation/template-drive-form-validation.component';
import { TopicCardsComponent } from './Component/topic-cards/topic-cards.component';


const routes: Routes = [
  { path: '', component: TopicCardsComponent },
  { path: 'templateDriven', component: TemplateDriveFormValidationComponent },
  { path: 'reactiveFormValidation', component: ReactiveFormValidationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
