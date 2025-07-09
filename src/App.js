import { RouterProvider } from "react-router-dom";
import { router } from "./modal/router";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
