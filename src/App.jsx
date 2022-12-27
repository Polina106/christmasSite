import React from "react"
import {HashRouter} from "react-router-dom"
import Header from "./components/Header"
import AppRouter from "./components/AppRouter"
import Footer from "./components/Footer"

export default function App() {
  return (
    <HashRouter>
      <Header />
      <AppRouter />
      <Footer />
    </HashRouter>
  )
}
