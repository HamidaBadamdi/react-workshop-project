import Home from './Home'
import About  from './About'
import Contact from './Contact'
import { BrowserRouter as Router,Routes, Route, Link} from 'react-router-dom'
import Counter from './CounterApp'
import Sum from './Sum'
import './style.css'
import MapDemo from './MapDemo'
import TodoApp  from './TodoApp'
import Shop from './shop'

function App()
{
  return(
    <center>
    <div>
      <h1 style={{color:'brown'}}>Welecome to the react world!</h1>
{/*      
      <a href='/home'>Home</a> |
      <a href='/about'>About</a> |
      <a href='/contact'>Contact</a>  */}
      <Router>
        <Link to="/home">Home</Link> |
        <Link to="/about">About</Link> | 
        <Link to="/contact">Contact</Link> |
        <Link to="/event">Counter</Link> |
        <Link to="/sum">Sum</Link> | 
        <Link to="/map">MapDemo</Link> |
        <Link to="/todoapp">ToDoApp</Link> |
        <Link to="/shop">API Call</Link> 
          
        <Routes>
          <Route path="/" element = {<Home/>}/>
          <Route path="/home" element = {<Home/>}/>
          <Route path="/about" element = {<About/>}/>
           <Route path="/contact" element = {<Contact/>}/>
           <Route path="/event" element = {<Counter/>}/>
           <Route path="/sum" element = {<Sum/>}/> 
            <Route path="/map" element = {<MapDemo/>}/>
            <Route path="/todoapp" element = {<TodoApp/>}/>
            <Route path="/shop" element = {<Shop/>}/>
        </Routes>
      </Router>
    </div>
    </center>
  ) 
}
export default App