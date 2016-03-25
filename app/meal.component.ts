import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component ({
  selector: 'meal-display',
  inputs: ['meal'],
  template: `
    <div class="container">
      <div>
        <h3>Name of Meal: {{ meal.name }}</h3>
        <p>Description of your meal: {{ meal.description }}</p>
        <li>Details: {{ meal.details }}</li>
        <li>Calories: {{ meal.calories }}</li>
      </div>
    </div>
  `
})

export class MealComponent {
  public meal: Meal;
}


// on this page i need to only leave the name
