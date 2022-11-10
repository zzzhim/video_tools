import { Button } from '@mui/material'
import { createHashRouter, RouterProvider, useLocation, useNavigate, useNavigation } from 'react-router-dom'
import icon from '../../assets/icon.svg'
import './App.scss'

const Hello = () => {
  const his = useNavigation()
  console.log(his)
  
  return (
    <div>
      <div className="Hello">
        <img width="200" alt="icon" src={icon} />
      </div>
      <h1>welcome use video tools</h1>
      <div className="Hello">
        <Button variant="contained">开始使用</Button>
      </div>
    </div>
  )
}

export default function App() {
  const router = createHashRouter([
    {
      path: '/',
      element: <Hello />,
    },
    {
      path: '/a',
      element: <Hello />,
    },
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
