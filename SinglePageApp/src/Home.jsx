import './style.css'
import rc from './react.png'
import mern from './mern.png'
import img from './image.png'
function Home()
{
    var a=10
    var b= 20
    var mssg = ""

    var myColor = {
        backgroundColor:'green',
        color:'white'
    }

    if (b > 1){
        mssg="b = " +  {b} + " is > 1"
    }
    else{
        mssg="b is < 1"
    }
    return(
        <div>
            <h2>Home</h2>
            {10 + 10}<br/>
            Value of a is : {a} <br/>
            Value of b is : {b} <br/>
            Sum : {a + b} <br/>
            {mssg}<br/>
            <p style={{backgroundColor:'yellow' , color:'blue'}}>I'm Inline Css</p><br/>
             <p style={myColor}>I'm Internal Css</p><br/>
             <p className='myClass'>I'm External Css</p><br/>

             <img src={rc}/>   <img src={mern} width={300} height={200}/> 
             


        </div>
    )
}
export default Home