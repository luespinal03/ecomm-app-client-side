
import ProductsCard from '../Components/ProductsCard'


const ProductsPage = ({ itemsList }) => {

    console.log(itemsList)
    return (


        <div>
            <h1>Products</h1>
            <div>{itemsList.map((product, index) => {
                return <ProductsCard key={index} product={product} />
            })}</div>
        </div>
    )
}

export default ProductsPage