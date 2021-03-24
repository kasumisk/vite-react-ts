import React, { useEffect, useState, createElement, FunctionComponent } from 'react';
import {
  Redirect,
} from "react-router-dom";
import Switch from './Switch';
import Route from './Route';

interface IComponent extends FunctionComponent {
  getInitialProps?: Function;
  preload?: () => Promise<any>;
}

export interface IRoute {
  path?: string;
  exact?: boolean;
  redirect?: string;
  component?: IComponent;
  routes?: IRoute[];
  key?: any;
  strict?: boolean;
  sensitive?: boolean;
  wrappers?: any[];
  [k: string]: any;
}


interface IOpts {
  routes: IRoute[];
  plugin?: Plugin;
  extraProps?: object;
  pageInitialProps?: object;
  getInitialPropsCtx?: object;
  isServer?: boolean;
  ssrProps?: object;
  rootRoutes?: IRoute[];
}

interface IGetRouteElementOpts {
  route: IRoute;
  index: number;
  opts: IOpts;
}


function render({
  route,
  opts,
  props,
}: {
  route: IRoute;
  opts: IOpts;
  props: any;
}) {
  const routes = renderRoutes(
    {
      ...opts,
      routes: route.routes || [],
      rootRoutes: opts.rootRoutes,
    },
    { location: props.location },
  );
  let { component: Component, wrappers } = route;
  if (Component) {
    const defaultPageInitialProps = opts.isServer
      ? {}
      : (window as any).g_initialProps;
    const newProps = {
      ...props,
      ...opts.extraProps,
      ...(opts.pageInitialProps || defaultPageInitialProps),
      route,
      routes: opts.rootRoutes,
    };
    // @ts-ignore
    let ret = <Component {...newProps}>{routes}</Component>;

    // route.wrappers
    if (wrappers) {
      console.log(route)
      let len = wrappers.length - 1;
      while (len >= 0) {
        ret = createElement(wrappers[len], newProps, ret);
        len -= 1;
      }
    }

    return ret;
  } else {
    return routes;
  }
}

function getRouteElement({ route, index, opts }: IGetRouteElementOpts) {
  const routeProps = {
    key: route.key || index,
    exact: route.exact,
    strict: route.strict,
    sensitive: route.sensitive,
    path: route.path,
  };
  if (route.redirect) {
    return <Redirect {...routeProps} from={route.path} to={route.redirect} />;
  } else {
    // avoid mount and unmount with url hash change
    return (
      <Route
        {...routeProps}
        render={(props: object) => {
          return render({ route, opts, props });
        }}
      />
    );
  }
}

export default function renderRoutes(opts: IOpts, switchProps = {}) {
  return opts.routes ? (
    <Switch {...switchProps}>
      {opts.routes.map((route, index) =>
        getRouteElement({
          route,
          index,
          opts: {
            ...opts,
            rootRoutes: opts.rootRoutes || opts.routes,
          },
        }),
      )}
    </Switch>
  ) : null;
}
