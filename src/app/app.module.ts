import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MealPlannerComponent } from './meal-planner/meal-planner.component';
import { MealDetailsComponent } from './meal-details/meal-details.component';
import { MealListComponent } from './meal-list/meal-list.component';
import { MealFormComponent } from './meal-form/meal-form.component';
import { FilterPipe } from './filter.pipe';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', redirectTo: '/planner', pathMatch: 'full' },
  { path: 'planner', component: MealPlannerComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    MealPlannerComponent,
    MealDetailsComponent,
    MealListComponent,
    MealFormComponent,
    FilterPipe,
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes), FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
