import { Fragment } from "react";
import mealImage from "../../assets/meals.jpg";
import  classes  from "./Header.module.css";
import { HeaderCartButton } from "./HeaderCartButton";
const Header = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Online Food App</h1>
       <HeaderCartButton />
      </header>
        <div className={classes["main-image"]}>
          <img src={mealImage} alt="image contains delicious foods" />
        </div>
    </Fragment>
  );
};
export default Header;
