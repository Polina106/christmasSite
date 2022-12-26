import MainPage from "./components/pages/MainPage"
import Gallery from "./components/pages/Gallery"

// Pathes
export const MAIN_PATH = "/main"
export const GALLERY_PATH = "/gallery"

// Routes
export const routes = [
  { path: MAIN_PATH, Component: MainPage},
  { path: GALLERY_PATH, Component: Gallery}
]
