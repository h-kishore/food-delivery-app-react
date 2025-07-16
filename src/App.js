/*
-Header
  -Logo
  -Nav Bar
-Body
  -Search
  -Restaurant Container
    -Restaurant Cards
      -img
      -Name of the Restaurant , Star Rating , Delivery Time
-footer
  -Copyrights
  -links
  -contact
  -address
*/

import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import Body from "./components/Body"


const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<AppLayout />)
