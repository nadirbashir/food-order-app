import {Fragment} from 'react'
import Header from './components/Layout/Header';
import { Meals } from './components/Meals/Meals';
const App = () => {
  return (
    <Fragment>
      <Header />
      <main style={{backgroundColor: "#383838"}}>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
