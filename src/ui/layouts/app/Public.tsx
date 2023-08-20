import { useLocation, Outlet } from 'react-router-dom';

import { Helmet } from '../../components/utils';

import Navbar from '../../components/navigation/navbar/public';

import { ROUTES } from '../../../router/routes';

export default function PublicLayout({ helmet }: { helmet: IHelmet }) {
  const location = useLocation();
  return (
    <>
      <Helmet {...helmet} />
      {location.pathname !== ROUTES.ROOT ? (
        <>
          <Navbar />
          <div className="h-full px-5 pt-[80px] overflow-auto">
            <Outlet />
          </div>
        </>
      ) : (
        <Outlet />
      )}
    </>
  );
}
