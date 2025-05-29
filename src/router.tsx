import { createBrowserRouter } from 'react-router'

import Index from './pages/Index'
import Notfound from './pages/Notfound'
import { Analyze } from './pages/Analyze/analyze'
import { Generate } from './pages/Generate/generate'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Index />,
  },
  {
    path: 'analyze',
    element: <Analyze />,
  },
  {
    path: '*',
    element: <Notfound />,
  },
  { path: 'generate', element: <Generate /> },
])

export default router
