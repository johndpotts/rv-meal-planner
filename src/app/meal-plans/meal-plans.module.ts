import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MealPlanTripComponent } from './meal-plan-trip/meal-plan-trip.component';
import { MealPlanDayComponent } from './meal-plan-day/meal-plan-day.component';
import { MealPlanViewerComponent } from './meal-plan-viewer/meal-plan-viewer.component';
import { MealPlanEditComponent } from './meal-plan-edit/meal-plan-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MealPlansRoutingModule } from './meal-plans-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MealPlansRoutingModule,
    SharedModule,
  ],
  declarations: [
    MealPlanTripComponent,
    MealPlanDayComponent,
    MealPlanViewerComponent,
    MealPlanEditComponent]
})
export class MealPlansModule { }
