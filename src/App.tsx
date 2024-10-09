import './App.css'
import Header from './components/Header'
import useStore from "./createStore";

interface AppState { 
  count: number;
}

function App() {
  const { count, inc } = useStore()

  return (
    <>
    {count}
    <Header /> 

    <button onClick={inc}>Increment</button>
    
    </>
  )
}

export default App
