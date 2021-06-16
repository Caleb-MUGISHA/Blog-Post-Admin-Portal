import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { AddUser } from "./features/users/AddUser";
import { EditUser } from "./features/users/EditUser";
import { UserList } from "./features/users/UserList";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Switch>
            <Route path="/add-user">
              <AddUser />
            </Route>
            <Route path="/edit-user">
              <EditUser />
            </Route>
            <Route path="/">
              <UserList />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
