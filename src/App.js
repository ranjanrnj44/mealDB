//import all components
import { CategoryComponent } from "./components/CategoryComponent/CategoryComponent";
import SearchComponent from "./components/search/SearchComponent";
import CategorySingleProduct from "./components/CategoryComponent/CategorySingleProduct";
//react router./components/CategoryComponent/CategorySingleProduct
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <h1 style={{ textAlign: "center" }}>The Meal DB</h1>
      <Router>
        <nav>
          <Link to="/">Category</Link> &nbsp;
          <Link to="/search">Search</Link>
        </nav>
        <Switch>
          <Route exact path="/" component={CategoryComponent} />
          <Route path="/search" component={SearchComponent} />
          <Route path="/meal/:name" component={CategorySingleProduct} />
        </Switch>
      </Router>
    </div>
  );
}
