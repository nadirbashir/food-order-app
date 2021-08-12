import classes from "./MealItem.module.css";

export const MealItem = ({ meal }) => {
    const price = `$${meal.price}`;
  return (
    <li className={classes.meal}>
      <h3>{meal.name}</h3>
      <div className={classes.description}>{meal.description}</div>
      <div className={classes.price}>{price}</div>
    </li>
  );
};
