import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useEffect, useState } from 'react'
import GlobalLayout from './Layouts/GlobalLayout';
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import RegistrationPage from './Pages/RegistrationPage';
import './App.css';
import ProductsPage from './Pages/ProductsPage';
import ShoppingCart from './Pages/ShoppingCart';


const urlEndpoint = process.env.REACT_APP_URL_ENDPOINT

function App() {
  const [shoppingCart, setShoppingCart] = useState([])
  const [itemsList, setItemsList] = useState([]);

  console.log(itemsList)

  useEffect(() => {
    const findProduct = async () => {
      const result = await fetch(`${urlEndpoint}/items/all`)
      const fetchedItems = await result.json()
      console.log(fetchedItems)
      setItemsList(fetchedItems.item)
    }
    findProduct()

  }, [])




  // so far got everything added to the shopping cart, havent worked on gettin them displayed just yet. Code below its a function in charge of putting the product that got clicked on in a new object called productTobeAdded which then gets added into ...shoppingCart. The reason why we spread shoppingCart its so we can add to the existing values that are already in there. We created itemsInCart which is w.e its already in the cart plus productTobeAdded. Then we give setShoppingCart the value of itemsInCart
  const itemToShoppingCartHandler = (product) => {

    let productTobeAdded = {
      id: product.id,
      title: product.title,
      console: product.console,
      features: product.features,
      brand: product.brand,
      type: product.type,
      price: product.price,
      genre: product.genre,
      ratings: product.ratings,
      image: product.image
    }
    const itemsInCart = [...shoppingCart, productTobeAdded]
    setShoppingCart(itemsInCart)
  }

  console.log(shoppingCart)





  const router = createBrowserRouter([
    {
      path: '/',
      element: <GlobalLayout />,
      children: [
        // index is true in order to make it default element that displays for the path?
        {
          index: true,
          element: <HomePage />
        },
        {
          path: '/login',
          element: <LoginPage />
        },
        {
          path: '/registration',
          element: <RegistrationPage />
        },
        {
          path: '/products',
          element: <ProductsPage itemsList={itemsList} itemToShoppingCart={itemToShoppingCartHandler} />
        },
        {
          path: '/shoppingcart',
          element: <ShoppingCart shoppingCart={shoppingCart} />
        }
      ]
    }
  ])

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;