import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
// import { AppBar } from "components/AppBar/AppBar";
import { Loader } from 'components/Loader/Loader';
import AppBarComponent from './AppBar/AppBar';

export const Layout = () => {
  return (
    <>
      <header>
        <AppBarComponent />
      </header>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
