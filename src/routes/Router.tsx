
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
import renderRoutes from './renderRoutes/renderRoutes';
import routes from "./routes";


export default function RouterContainer() {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/count">count</Link>
        </li>
        <li>
          <Link to="/todo">todo</Link>
        </li>
      </ul>
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
  const nodeRef = React.useRef(null);
  return (
    <TransitionGroup
      className="main"
      childFactory={(child:any) =>
        React.cloneElement(child, { classNames: ANIMATION_MAP[history.action] })
      }
    >
      <CSSTransition
        nodeRef={nodeRef}
        key={location.key}
        classNames="fade"
        timeout={300}
      >
        <div ref={nodeRef}>
          <Router>
          {renderRoutes({
            routes: routes
          })}
          </Router>
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
}
