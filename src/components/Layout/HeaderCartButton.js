import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css"

export const HeaderCartButton = () => {
  return (
    <button className={classes.button}>
      <span className={classes.icon}>
          <CartIcon />
      </span>
      <span>your cart</span>
      <span className={classes.badge}>0</span>
    </button>
  );
};
