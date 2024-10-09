import './App.css'
import Header from './components/Header'
import useStore from "./createStore";
import Map from './api/Map';


function App() {
  const { count, inc } = useStore()

  return (
    <>
    <Header /> 

    <p>Awesome count: {count}</p>
    <button onClick={inc}>Increment</button>
    <Map />
    
    </>
  )
}

export default App
