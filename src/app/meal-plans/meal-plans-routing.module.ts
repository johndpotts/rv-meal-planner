import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth/auth-guard.service';
import { MealPlanViewerComponent } from './meal-plan-viewer/meal-plan-viewer.component';
import { MealPlanTripComponent } from './meal-plan-trip/meal-plan-trip.component';
import { MealPlanEditComponent } from './meal-plan-edit/meal-plan-edit.component';


const mealPlansRoutes: Routes = [
  { path: '', component: MealPlanViewerComponent, children: [
    { path: 'trip', component: MealPlanTripComponent },
    { path: 'new', component: MealPlanEditComponent, canActivate: [AuthGuard] },
    { path: ':id', component: MealPlanTripComponent  },
    { path: ':id/edit', component: MealPlanEditComponent, canActivate: [AuthGuard] },
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
