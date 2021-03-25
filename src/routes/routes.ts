import { IRoute} from './renderRoutes/renderRoutes';
 
import Count from '../view/Count';
import Todo from '../view/Todo';

import Bus from '/@/view/Bus';
import Cart from '/@/view/Cart';
import Layout from '/@/layout/';
import Test from '/@/view/Test';

const routes: IRoute[]= [
  {
    path: '/count',
    component: Count
  },
  {
    path: '/todo',
    component: Todo,
  },
  {
    path: '/layout',
    component: Layout,
    routes: [
      {
        path: "/layout/bus",
        component: Bus
      },
      {
        path: "/layout/cart",
        // component: Cart,
        // wrappers: Cart,
        routes: [
          {
            // wrappers: [Cart],
            path: "/layout/cart/test",
            component: Test
          }
        ]
      }
    ]
  }
];


export default routes;