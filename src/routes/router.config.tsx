import { ReactElement } from "react";
import { EPermission } from "../common/user.enum";
import { EAppRoutes } from "../common/routes.config";
import { Home } from "../pages/Home/Home";
import { NotFound } from "../pages/NotFound/NotFound";
import { Insvestment } from "../pages/Investement/Investment";
import { Portfolio } from "../pages/Portfolio/Portfolio";
import { Profile } from "../pages/Profile/Profile";
import { Login } from '../pages/Login/Login';

export interface IRoute {
  element: ReactElement;
  permissions: Array<EPermission>;
}
export type TRoutes = Record<string, IRoute>

export const routes: TRoutes = {
  [EAppRoutes.HOME]: {
    element: <Home />,
    permissions: [],
  },
  [EAppRoutes.INVESTMENT]: {
    element: <Insvestment />,
    permissions: [],
  },
  [EAppRoutes.PORTFOLIO]: {
    element: <Portfolio />,
    permissions: [],
  },
  [EAppRoutes.PROFILE]: {
    element: <Profile />,
    permissions: [],
  },
  [EAppRoutes.LOGIN]: {
    element: <Login />,
    permissions: [],
  },
  "*": {
    element: <NotFound />,
    permissions: [],
  },
};