import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useEffect, useState } from 'react'
import GlobalLayout from './Layouts/GlobalLayout';
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import CheckOutOptions from './Components/CheckOutOptions';
import ProductsPage from './Pages/ProductsPage';
import ShoppingCart from './Components/ShoppingCart';
import CheckOut from './Components/CheckOut';
import About from './Components/About'
import Support from './Components/Support'
import { useAuth } from './Hooks/Auth';
import ErrorPage from './Pages/ErrorPage'
import SignUpPage from './Pages/SignUpPage';
import PaymentInfo from './Components/PaymentInfo';
import './App.css';


const urlEndpoint = process.env.REACT_APP_URL_ENDPOINT



function App() {
  const [shoppingCart, setShoppingCart] = useState([])
  // itemsList is holding all products coming from the fetch out of the database
  const [itemsList, setItemsList] = useState([]);
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('')
  const [itemTotals, setItemTotals] = useState(0)
  const [priceTotals, setPriceTotals] = useState(0)
  const [quantity, setQuantity] = useState(1);
  const auth = useAuth();


  // itemsList is wherre all the products enter the application from the databate
  // console.log(itemsList)

  useEffect(() => {
    const findProduct = async () => {
      const result = await fetch(`${urlEndpoint}/items/all`)
      const fetchedItems = await result.json()
      // console.log(fetchedItems)
      setItemsList(fetchedItems.item)
    }
    findProduct()

  }, [])



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


  // this useEffect is watching the shoppingCart so everytime it changes it updates the overall quantity of the items in the cart and the prices accordingly
  useEffect(() => {

    const itemsInCartTotals = shoppingCart.reduce((container, item) => {
      container += item.cartCount
      return container
    }, 0)
    setItemTotals(itemsInCartTotals)


    const itemsInCartPriceTotals = shoppingCart.reduce((container, item) => {
      const allTotals = +(item.price * item.cartCount).toFixed(2)
      container += allTotals

      return container
    }, 0)
    setPriceTotals(itemsInCartPriceTotals)

  }, [shoppingCart])



  // function below is taking care of adding in items selected from itemsList (itemsList is holding all of our products from our databse) into our shopping cart.
  const itemToShoppingCartHandler = (product) => {
    // console.log(product)
    const findingIndex = shoppingCart.findIndex((productSelected) => {
      // console.log(product)
      // console.log(productSelected)
      // return the product that matched ids
      return productSelected._id === product._id
    })
    // console.log(findingIndex)
    // if the result from findingIndex is -1 (productSelected is not already in the shopping cart) then spread the shopping cart, spread the product, add it into the shopping cart with the count of 1
    if (findingIndex === -1) {
      setShoppingCart([...shoppingCart, { ...product, cartCount: 1 }]);
    }
    // otherwise, map shoppingCart and cartItem id and product id match then add to its current count and return item
    else {
      const updateCartItem = shoppingCart.map((cartItem) => {
        if (cartItem._id === product._id) { //if cartItem is the same as item.id
          cartItem.cartCount++
          return cartItem
        } else {
          return cartItem
        }
      })
      setShoppingCart(updateCartItem)
    }
    console.log(shoppingCart)
  }
  // console.log(shoppingCart)



  // this function is for the minus sign inside of every card count, made so user can decrease the quantity of their products one by one
  const removeItemFromCartHandler = (product) => {
    const updateCartItem = shoppingCart.map((cartItem) => {
      if (cartItem._id === product._id && product.cartCount > 1) {
        cartItem.cartCount--
        return cartItem
      } else {
        return cartItem
      }
    })
    setShoppingCart(updateCartItem)
    console.log(shoppingCart)
  }


  // function is in charge of the remove button on every itemCard in the shoppping cart its removing the entire card
  const removeItemHandler = (product) => {
    const filteredItem = shoppingCart.filter((cartItem) => {
      return product._id !== cartItem._id
    })
    console.log(filteredItem)
    setShoppingCart(filteredItem)
  }



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
          path: '/signup',
          element: <SignUpPage />
        },
        {
          path: '/products',
          element: <ProductsPage itemsList={itemsList} itemToShoppingCart={itemToShoppingCartHandler} />
        },
        {
          path: '/shoppingcart',
          element: <ShoppingCart shoppingCart={shoppingCart} quantity={quantity} setQuantity={setQuantity} itemToShoppingCart={itemToShoppingCartHandler} removeItemFromCartHandler={removeItemFromCartHandler} itemTotals={itemTotals} priceTotals={priceTotals} removeItemHandler={removeItemHandler} />
        },
        {
          path: '/checkout',
          element: <CheckOut itemTotals={itemTotals} priceTotals={priceTotals} />
        },
        {
          path: '/about',
          element: <About />
        },
        {
          path: '/support',
          element: <Support />
        },
        {
          path: '/checkoutoptions',
          element: <CheckOutOptions />
        },
        {
          path: '/payment',
          element: <PaymentInfo />
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