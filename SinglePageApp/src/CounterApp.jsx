import React from "react"
import './style.css'

function Counter()
{
    const [data , setData] = React.useState(0)
    const [mssg , setMssg]  = React.useState("")

    const incrementData = () =>
    {
        if(data >= 10)
        {
            setMssg("Data out of range!")
        }
        else{
            setData(data + 1)
            setMssg("")
        }
        

    }

    const decrementData = () =>
    {
            if(data <= 0)
            {
                setMssg("Data can't be negative!")
            }
            else{
                setData(data - 1)
                setMssg("")
            }
    }
    return(<div>
        <h1>Counter App</h1>
        <h2>Value is : {data}</h2>

        <input type="button" value="+" onClick={incrementData} />
        <input type="button" value = "-" onClick={decrementData}/>
        <input type="button" value = "X" onClick={() => setData(0)}/>
        <p style={{color:'red'}}>{mssg}</p>
        
    </div>)

}export default Counter