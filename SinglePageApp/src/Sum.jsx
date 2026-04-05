import React from "react"

function Sum()
{

    const [no1 , setNo1] = React.useState(0)
    const [no2 , setNo2] = React.useState(0)
    const [mssg , setMssg] = React.useState("")

    const doSum = () => {
        var c = parseInt(no1 ) + parseInt(no2)
        setMssg("Sum is : " + c)
    }
    return(<>  
        <h1>Sum of two numbers</h1>     
        Number 1: <input type="text" onChange={(e) => setNo1(e.target.value)}/><br/><br/>
        Number 2:<input type="text" onChange={(e) => setNo2(e.target.value)}/>
        <input type="button"  value = "+" onClick={doSum}/><br/>
        {mssg}

    </>)
}export default Sum