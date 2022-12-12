import { AiOutlineHome } from 'react-icons/ai'
import OrderSummary from '../Components/OrderSummary'
import './ShoppingCartCard.css'
import ItemsInCartCard from './ItemsInCartCard';

const ShoppingCartCard = ({ setRecentlyProcessedOrder, shoppingCart, itemToShoppingCart, removeItemFromCartHandler, itemTotals, priceTotals, removeItemHandler }) => {

    return (

        <div className="container  mt-40 flex flex-col bg-gray-100">
            <div className="flex shadow-md my-10">
                <div className="w-full bg-white px-10 py-10">
                    <div className="flex justify-between border-b pb-8">
                        <h1 className="font-semibold text-2xl"><AiOutlineHome /> Ship To Home</h1>
                        <h2 className="font-semibold text-2xl">{itemTotals} Items</h2>
                    </div>
                    <div className="flex mt-10 mb-5 ml-12">
                        <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
                        <h3 className="font-semibold text-center text-gray-600 text-sm uppercase w-1/5">Quantity</h3>
                        <h3 className="font-semibold text-center text-gray-600 text-sm uppercase w-1/5">Price</h3>
                        <h3 className="font-semibold text-center text-gray-600 text-sm uppercase w-1/5">Total</h3>
                    </div>

                    {/* this is where product gets initialized. Here we are mapping the current shoppingCart to create the products in it. The products then get passed into ItemsInCartCard so they can get their own individual cards which will be rendered inside the shoppingCartCard component  */}
                    {shoppingCart.map((product, index) => {
                        return (
                            <ItemsInCartCard key={index} product={product} itemToShoppingCart={itemToShoppingCart} removeItemFromCartHandler={removeItemFromCartHandler} removeItemHandler={removeItemHandler} />
                        )
                    })}

                    <a href="/products" className="flex font-semibold text-indigo-600 text-sm mt-10">
                        <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" /></svg>
                        Continue Shopping
                    </a>
                </div>
                <OrderSummary itemTotals={itemTotals} priceTotals={priceTotals} setRecentlyProcessedOrder={setRecentlyProcessedOrder} />
            </div>
        </div>

    )
}

export default ShoppingCartCard
