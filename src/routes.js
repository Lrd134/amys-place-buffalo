import { Route } from "react-router-dom";
import Layout from "./Layout.js";
import About from './About.js';
const routes = () => {
  return (
    <>
    <Route path="/" element={<Layout type="main"/>} >
      <Route exact path="/" element={<About />} />
      <Route
        path="*"
        element={
          <main style={{ padding: "1rem" }}>
            <p>There's nothing here!</p>
          </main>
        }
      />
      <Route exact path="/comingsoon" element={<main>
        <h1 className="doordash centered-text x-large-font">Coming Soon</h1>
        <img className="doordash" alt="DOORDASH COMING SOON WOOT WOOT" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/DoorDash_Logo.svg/2560px-DoorDash_Logo.svg.png"/>
        </main>} />
    </Route>
    </>
  )
}

export default routes;