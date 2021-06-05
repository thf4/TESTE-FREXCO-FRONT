import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { AuthProvider } from "./Auth/Auth-Provider";
import PrivateRouter from "./Auth/providerRouter";
import Login from "./Pages/Login";
import Create from "./Pages/CreateUser";
import Home from "./Pages/Home";
import Dados from "./Pages/dataClient";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import EditProduct from "./Pages/Product/editProduct";

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={() => <Redirect to="/login" />} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/cadastrar" component={Create} />
            <PrivateRouter exact path="/home" component={Home} />
            <PrivateRouter exact path="/user/:_id/dados" component={Dados} />
            <PrivateRouter exact path="/user/:_id/product" component={Product} />
            <PrivateRouter exact path="/user/:_id/product/:_id" component={EditProduct} />
            <PrivateRouter exact path="/user/:_id/cart" component={Cart} />
            <Route path="*" component={() => "404 NOT FOUND"} />
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
