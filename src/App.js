import {Fragment, useState} from 'react'
import { Cart } from './components/Cart/Cart';
import Header from './components/Layout/Header';
import { Meals } from './components/Meals/Meals';


const App = () => {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () =>{
    setCartIsShown(true);
  }
  const hideCartHandler = () =>{
    setCartIsShown(false);
  }

  return (
    <Fragment>
      {cartIsShown && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler} />
      <main style={{backgroundColor: "#383838"}}>
        <Meals onClose={hideCartHandler} />
      </main>
    </Fragment>
  );
}

export default App;
