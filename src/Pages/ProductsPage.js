
import ProductsCard from '../Components/ProductsCard'
import './ProductsPage.css'


const ProductsPage = ({ itemsList, itemToShoppingCart }) => {
    // console.log(itemsList)
    return (
        <div>
            <h1>Products</h1>

            <div className='product-card-container'>{itemsList.map((product, index) => {
                return <ProductsCard key={index} product={product} itemToShoppingCart={itemToShoppingCart} />
            })}</div>

        </div>
    )
}

export default ProductsPage