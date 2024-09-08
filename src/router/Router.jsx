import {createBrowserRouter} from "react-router-dom"
import RootLayout from '../root/RootLayout'
import Home from "../home/Home"

const Router = createBrowserRouter ([
    {
        path :"/",
        element : <RootLayout />,
        children: [
            {
                path : "/",
                element: <Home />,

            }

        ]
    }
])

export default Router