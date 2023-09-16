import { Route } from "react-router-dom";
import Layout from "./Layout.js";
const routes = () => {
  return (
    <>
    <Route path="/" element={<Layout type="main"/>} >
      <Route exact path="/" element={<main style={{ padding: "1rem" }}>
            <p> There's a main page! </p>
          </main>} />
      <Route
        path="*"
        element={
          <main style={{ padding: "1rem" }}>
            <p>There's nothing here!</p>
          </main>
        }
      />
      
    </Route>
    </>
  )
}

export default routes;