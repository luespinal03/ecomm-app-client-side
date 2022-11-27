import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useEffect, useState } from 'react'
import GlobalLayout from './Layouts/GlobalLayout';
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import RegistrationPage from './Pages/RegistrationPage';
import './App.css';
import ProductsPage from './Pages/ProductsPage';


const urlEndpoint = process.env.REACT_APP_URL_ENDPOINT

function App() {

  const [itemsList, setItemsList] = useState([]);
  // gamesList contains the array of 20 games WHYYYYYYY!!!!!!!!!!
  console.log(itemsList)

  useEffect(() => {
    const findProduct = async () => {
      const result = await fetch(`${urlEndpoint}/items/all`)
      const fetchedItems = await result.json()
      console.log(fetchedItems)
      setItemsList(fetchedItems.item)
    }
    findProduct()
    // gamesList is empty here WHYYYYYYY!!!!!!!!!!
  }, [])


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
          element: <ProductsPage itemsList={itemsList} />
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