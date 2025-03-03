import{createBrowserRouter, RouterProvider} from "react-router-dom"
import './App.css'
import HomePage from './components/HomePage'
import VideoPage from "./components/VideoPage"
import NotFound from "./components/NotFound"


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />
    },
    { 
      path: "/room/:id",
      element: <VideoPage />
    },
    {
      path: "*", // Catch-all route for undefined paths
      element: <NotFound />,
    }
  ]

  )
  return (
    <div className="App">
<RouterProvider router={router}/>
    </div>
  )
}

export default App
