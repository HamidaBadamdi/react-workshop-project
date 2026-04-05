import React from "react"

function TodoApp()
{
    const [task , setTask] = React.useState("")
     const [data , setData] = React.useState([])

     const addTask = () => {
        var tempData = data
        tempData.push(task)
        setData(tempData)
        setTask("")

     }
    
    return(<div>
        <h1 style={{ color:'brown'}}>ToDo Application</h1>
        <input type="text" placeholder="Enter Your Task" value={task} 
        onChange={(e) => setTask(e.target.value)}/><br/><br/>
        <input type="button" value="Add" onClick={addTask}/>

        <ul>
           {  data.map((value , index) => {
                return (<li>{value}</li>)
           })}

        </ul></div>);
}export default TodoApp