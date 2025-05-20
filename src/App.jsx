import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { routes } from './/routes/index.js'
import DefaultComponent from './components/DefaultComponent/DefaultComponent.jsx'

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          {routes.map((route, index) => {
            const Page = route.page
            const Layout = route.isShowHeader ? DefaultComponent : React.Fragment
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            )
          })}
        </Routes>
      </Router>
    </div>
  )
}

export default App