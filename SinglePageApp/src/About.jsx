import './style.css'
import rc from './react.png'
import mern from './mern.png'
import img from './image.png'
function About()
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
            <h2>About</h2>
            
        </div>
    )
}
export default About