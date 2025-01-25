import './App.css';
import '../src/styles/globals.css';

import { routeTree } from './routeTree.gen';
import { createRouter, RouterProvider } from '@tanstack/react-router';
const router = createRouter({
  routeTree,
  defaultPreload: 'intent'
});

// Register things for typesafety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
