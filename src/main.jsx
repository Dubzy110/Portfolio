import './index.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import { SideNav } from './components/SideNav.js'
import { MyRoutes } from './components/utilities/MyRoutes.js'

// If I want to add a new page I need to add a route to RouteConfig here: src/components/RoutesConfig.tsx

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <SideNav />
      <MyRoutes />
    </BrowserRouter>
  </StrictMode>,
)
