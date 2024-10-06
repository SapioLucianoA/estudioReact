import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import RootPage from './routes/root'
import ErrorPage from './error-page'
import Contact from "./routes/contacs";



import Root, {
  loader as rootLoader,
  action as rootAction,
  loader as contactLoader,
} from "./routes/root";
import './index.css'

import EditContact, {
  action as editAction,
} from "./routes/edit";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootPage/>,
      errorElement:<ErrorPage/>,
      loader: rootLoader,
      action: rootAction,
      children: [
        {
          path: "contacts/:contactId",
          element: <Contact />,
          loader: contactLoader,
        },
      ],
    },
    {
      path: "contacts/:contactId/edit",
      element: <EditContact />,
      loader: contactLoader,
    },
    
  ])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
