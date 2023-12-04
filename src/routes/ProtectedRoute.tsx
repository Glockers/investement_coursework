import { ReactElement } from "react";
import { Navigate } from "react-router-dom";
import { Spin } from "antd";
import { PageLayout } from "../components/Layouts";
import { ErrorTemplate } from "../components/ErrorTemplate/ErrorTemplate";
import { useAuthContext } from "../mock/authContext";
import { EPermission, EUserRole } from "../common/user.enum";
import { EAppRoutes } from "../common/routes.config";

interface IProtectedRoutesProps {
  children: ReactElement;
  permissions: Array<EPermission>;
}

export const ProtectedRoute = ({
  children,
  permissions,
}: IProtectedRoutesProps): ReactElement | null => {
  const { isAuthorized, isLoading, role } = useAuthContext();

  if (isLoading && !permissions.includes(EPermission.AUTH_NO_AUTH)) {
    return (
      <PageLayout>
        <Spin tip="Loading" size="large" />
      </PageLayout>
    );
  }

  if (!isAuthorized && permissions.includes(EPermission.AUTH_REQUIRED)) {
    return <Navigate to={EAppRoutes.LOGIN} />;
  }

  if (isAuthorized) {
    if (permissions.includes(EPermission.AUTH_NO_AUTH)) {
      return <ErrorTemplate errorCode={404} title="Страница не найдена" />;
    }

    if (
      permissions.includes(EPermission.AUTH_ADMIN) &&
      role !== EUserRole.ADMIN
    ) {
      return <ErrorTemplate errorCode={404} title="Страница не найдена" />;
    }
  }

  return children;
};