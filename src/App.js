import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useEffect, useState } from 'react'
import GlobalLayout from './Layouts/GlobalLayout';
import HomePage from './Pages/HomePage';
import ItemsInCartCard from './Components/ItemsInCartCard';
import LoginPage from './Pages/LoginPage';
import RegistrationPage from './Pages/SignUpPage';
import './App.css';
import ProductsPage from './Pages/ProductsPage';
import ShoppingCart from './Components/ShoppingCart';
import CheckOut from './Components/CheckOut';
import About from './Components/About'
import Support from './Components/Support'
import { useAuth } from './Hooks/Auth';
import ErrorPage from './Pages/ErrorPage'


const urlEndpoint = process.env.REACT_APP_URL_ENDPOINT



function App() {
  const [shoppingCart, setShoppingCart] = useState([])

  const [itemsList, setItemsList] = useState([]);

  console.log(itemsList)

  useEffect(() => {
    const findProduct = async () => {
      const result = await fetch(`${urlEndpoint}/items/all`)
      const fetchedItems = await result.json()
      // console.log(fetchedItems)
      setItemsList(fetchedItems.item)
    }
    findProduct()

  }, [])


  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('')
  const auth = useAuth();

  // When the application is first loading in, react needs to load in the user token from local storage and so we only want to call this fetch function if the user's token is not null. Additionally, when the user is logged out, the token will be null and we want to set the message back to an empty string in this case.
  useEffect(() => {
    const fetchMessage = async () => {
      const response = await fetch(`${urlEndpoint}/users/message`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          [process.env.REACT_APP_TOKEN_HEADER_KEY]: auth.userToken
        },
      });
      const result = await response.json()
      setMessage(result.message)
    }
    if (auth.userToken !== null) {
      fetchMessage()
    }
    if (auth.userToken === null) {
      setMessage("")
    }
    setEmail(auth.userEmail)
  }, [auth.userToken]);





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


  const [quantity, setQuantity] = useState(1);





  const router = createBrowserRouter([
    {
      path: '/',
      element: <GlobalLayout email={email} />,
      errorElement: <ErrorPage />,
      children: [
        // index is true in order to make it default element that displays for the path?
        {
          index: true,
          element: <HomePage message={message} email={email} />
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
          element: <ShoppingCart shoppingCart={shoppingCart} quantity={quantity} setQuantity={setQuantity} />
        },
        {
          path: '/checkout',
          element: <CheckOut />
        },
        {
          path: '/about',
          element: <About />
        },
        {
          path: '/support',
          element: <Support />
        },
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