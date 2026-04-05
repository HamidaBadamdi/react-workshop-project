import axios from "axios";
import React from "react";
import "./Shop.css";

function Shop() {

    const [productData, setProductData] = React.useState([]);

    React.useEffect(() => {
        axios.get("https://dummyjson.com/products")
            .then(res => {
                console.table(res.data.products);  
                setProductData(res.data.products); 
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <>
            <h1>MyShop</h1>
            <div className="main">
                {productData.map((value, index) => (
                    <div className="product" key={value.id}>
                   
                        <img 
                            width={150} 
                            height={150} 
                            src={value.thumbnail} 
                            alt={value.title}
                        />

                        <h4>{value.title}</h4>
                
                        <p>₹{value.price}</p>

                        <input type="button" value="Shop"  className="shopbtn"
                        />
                    </div>
                ))}
            </div>
        </>
    );
}
export default Shop;