import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DisplayrecComponent } from './displayrec/displayrec.component';

const routes: Routes = [
  {path: '', component: HomeComponent },
  { path: 'form', component: FormComponent },
  { path: 'display', component: DisplayrecComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
