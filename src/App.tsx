import React from 'react'
import { RouterProvider } from 'react-router'

import router from './router'

const App: React.FC = () => (
    <RouterProvider router={router} />
)
App.displayName = 'App'
export default App
