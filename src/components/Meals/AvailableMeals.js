import { DUMMY_MEALS } from "../../const/dummyMeals";
import { Card } from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import { MealItem } from "./MealItem/MealItem";

export const AvailableMeals = () => {
    const mealList = DUMMY_MEALS.map((meal) => (
        <MealItem  key={meal.id} meal={meal} />
      ))
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealList}</ul>
      </Card>
    </section>
  );
};
