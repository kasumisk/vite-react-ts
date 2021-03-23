
import React from "react";
import {
  TransitionGroup,
  CSSTransition
} from "react-transition-group";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useLocation,
  useHistory,
} from "react-router-dom";
import './animation.less';

import routes from "./routes";
import Count from '../view/Count';
import Todo from '../view/Todo';


export default function AnimationExample() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/">
          <Redirect to="/count" />
        </Route>
        <Route path="*">
          <AnimationApp />
        </Route>
      </Switch>
    </Router>
  );
}

const ANIMATION_MAP: any = {
  PUSH: 'forward',
  POP: 'back',
}

function AnimationApp() {
  const location = useLocation();
  const history = useHistory();
  console.log(location)
  console.log(history)
  return (
    <TransitionGroup
      className="main"
      childFactory={(child:any) =>
        React.cloneElement(child, { classNames: ANIMATION_MAP[history.action] })
      }
    >
      <CSSTransition
        key={location.key}
        classNames="fade"
        timeout={300}
      >
        <Switch location={location}>
          <Route path="/about">
            <Count />
          </Route>
          <Route path="/users">
            <Todo />
          </Route>
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
}