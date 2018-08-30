import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth/auth-guard.service';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipesComponent } from './recipes.component';

const mealPlansRoutes: Routes = [
  { path: '', component: MealPlansComponent, children: [
    { path: '', component: RecipeStartComponent },
    { path: 'new', component: RecipeEditComponent, canActivate: [AuthGuard] },
    { path: ':id', component: RecipeDetailComponent },
    { path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuard] },
  ] },
];

@NgModule({
  imports: [
    RouterModule.forChild(mealPlansRoutes)
  ],
  exports: [RouterModule],
  providers: [
    AuthGuard
  ]
})
export class MealPlansRoutingModule {}
