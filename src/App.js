import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
// import { DEPOSITE, WITHDRAW } from './store/actions/bankAction';
import { DEPOSITE, WITHDRAW } from './RTK/slices/bankSlice';
import Products from './components/Products';

function App() {
  const state = useSelector(state=>state.bank);
  const dispatch = useDispatch();
  console.log(state)
  return (
    <div className="App">

    <h2>total current : {state}</h2>
    <button onClick={()=>{dispatch(WITHDRAW(500))}}>WITHDRAW</button>
    <button onClick={()=>{dispatch(DEPOSITE(100))}}>DEPOSITE</button>
    
    <Products/>
    </div>
  );
}

export default App;
