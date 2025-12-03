import { Route, Routes } from 'react-router'

import { routeConfig } from './RoutesConfig'

export const MyRoutes = () => {
  return (
    <Routes>
      {routeConfig.map((link, index) => {
        return (
          <Route
            path={`${link.to}`}
            key={`${index + 1}`}
            element={link.element}
          />
        )
      })}
    </Routes>
  )
}
