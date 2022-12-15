import Footer from '../Components/Footer'
import ProductsCard from '../Components/ProductsCard'
import './ProductsPage.css'


const ProductsPage = ({ itemsList, itemToShoppingCartHandler, itemIntoWishListHandler }) => {
    // console.log(itemsList)
    return (
        <div className='mt-20'>
            <h1 className='mt-10'>Products</h1>

            <div className='product-card-container'>{itemsList.map((product, index) => {
                return <ProductsCard key={index} product={product} itemToShoppingCartHandler={itemToShoppingCartHandler} itemIntoWishListHandler={itemIntoWishListHandler} />
            })}</div>
            <Footer />
        </div>
    )
}

export default ProductsPage