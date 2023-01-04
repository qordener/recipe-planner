import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipePlannerComponent } from './recipe-planner/recipe-planner.component';

const routes: Routes = [
  { path: 'recipes', component: RecipeListComponent },
  { path: 'planner', component: RecipePlannerComponent },
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
