import { useContext } from 'react';
import { Outlet } from 'react-router-dom';

import { Helmet } from '../../components/utils';

import { UserContext } from '../../../contexts/User';

import Navbar from '../../components/navigation/navbar/authenticated';

export default function AuthenticatedLayout({ helmet }: { helmet: IHelmet }) {
  const { user } = useContext(UserContext);
  return (
    <>
      <Helmet {...helmet} />
      <Navbar />
      <div className="h-full px-5 pt-[80px] overflow-auto">
        <Outlet />
      </div>
    </>
  );
}
