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
import Dados from "./Pages/AdClient";
import Product from "./Pages/Product";
import EditProduct from "./Pages/Product/editProduct";
import Edit from "./Pages/dataClient/index";

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
            <PrivateRouter
              exact
              path="/cliente/:_id/shipping"
              component={Dados}
            />
            <PrivateRouter exact path="/cliente/:_id/dados" component={Edit} />
            <PrivateRouter exact path="/product" component={Product} />
            <PrivateRouter exact path="/product/edit" component={EditProduct} />
            <Route path="*" component={() => "404 NOT FOUND"} />
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
