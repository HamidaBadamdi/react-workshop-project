import React  from "react";
function MapDemo(){

    var myData = [
        {pname : 'iPhone' , price :999},
        {pname : 'Samsung' , price :799},
        {pname : 'Vivo' , price :599},
    ]
    return(<>
    <br/><br/><center>
    <table border={1}>
        <thead>
            <tr>
                <th>ID</th>
                <th>Prodct Name</th>
                <th>Price</th>
            </tr>
        </thead>

        <tbody>
            {
                myData.map((value, index , arr) => {
                    return(<tr key={index}>
                        <td>{index+1}</td>
                        <td>{value.pname}</td>
                        <td>{value.price}</td>
                    </tr>)
                })
            }
        </tbody>
    </table>
    </center>
    </>)
}export default MapDemo