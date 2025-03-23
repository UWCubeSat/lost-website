import { createBrowserRouter } from 'react-router'

import Index from './pages/Index'
import Notfound from './pages/Notfound'
import { Analyze } from './pages/Analyze/analyze'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
        <Index />
    ),
  },
  {
    path: 'analyze',
    element: (
        <Analyze />
    ),
  },
  {
    path: '*',
    element: (
        <Notfound />
    ),
  },
])

export default router
