import { HomeOutlined, PieChartOutlined, StockOutlined, UserOutlined } from '@ant-design/icons';
import { EAppRoutes } from '../../common/routes.config';
import { MenuProps } from 'antd';
import { EUserRole } from '../../common/user.enum';
import { NavigateFunction } from 'react-router';

export type MenuItem = Required<MenuProps>['items'][number] & {
  permisson?: `${EUserRole}`[];
};


const getAppBarList = (navigate: NavigateFunction): MenuItem[] => [
  {
    key: EAppRoutes.HOME,
    icon: <HomeOutlined />,
    label: 'Главная',
    onClick: () => navigate(EAppRoutes.HOME)
  },
  {
    key: EAppRoutes.PROFILE,
    icon: <UserOutlined />,
    label: 'Профиль',
    onClick: () => navigate(EAppRoutes.PROFILE)
  },
  {
    key: EAppRoutes.PORTFOLIO,
    icon: <PieChartOutlined />,
    label: 'Портфель',
    onClick: () => navigate(EAppRoutes.PORTFOLIO)
  },
  {
    key: EAppRoutes.INVESTMENT,
    icon: <StockOutlined />,
    label: 'Инвестиции',
    onClick: () => navigate(EAppRoutes.INVESTMENT)
  }
];

export default getAppBarList;