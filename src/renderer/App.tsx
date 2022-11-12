import { Button } from '@mui/material'
import { createHashRouter, Link, RouterProvider } from 'react-router-dom'
import icon from '../../assets/icon.svg'
import './App.scss'
import Home from './home'

const Entry = () => {
  return (
    <div className='Main'>
      <div className="Hello">
        <img width="200" alt="icon" src={icon} />
      </div>
      <h1>welcome use video tools</h1>
      <div className="Hello">
        <Link to={"/home"}>
          <Button variant="contained">开始使用</Button>
        </Link>
      </div>
    </div>
  )
}

export default function App() {
  const router = createHashRouter([
    {
      path: '/',
      element: <Entry />,
    },
    {
      path: '/home',
      element: <Home />,
    },
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
