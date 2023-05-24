import { RouterProvider,createBrowserRouter } from 'react-router-dom';
import ErrorPage from './ErrorPage';
import Slider from './Task/Slider'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Slider />,
      errorElement: <ErrorPage />,
    }
  ])

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
