import './product.css'
function Product(props)
{
    return(<>
    <div className="product">
        <img src={props.imgpath} width={150}/>
        <h2 className='prdctName'>{props.name}</h2>
        <p>${props.price}</p>
        
    </div>
    

    </>)
}export default Product