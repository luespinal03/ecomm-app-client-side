
import ProductsCard from '../Components/ProductsCard'


const ProductsPage = ({ itemsList, itemToShoppingCart }) => {

    console.log(itemsList)
    return (


        <div>
            <h1>Products</h1>
            <div>{itemsList.map((product, index) => {
                return <ProductsCard key={index} product={product} itemToShoppingCart={itemToShoppingCart} />
            })}</div>
        </div>
    )
}

export default ProductsPage