import { Button, Result } from "antd";
import { ReactElement } from "react";
import { useNavigate } from "react-router-dom";
import { PageLayout } from "../Layouts";

type TErrorCodes = 404 | 500 | 403;

interface IErrorTemplateProps {
  description?: string;
  buttonText?: string;
  errorCode: TErrorCodes;
  title: string;
}

export const ErrorTemplate = ({
  errorCode,
  title,
  description,
  buttonText,
}: IErrorTemplateProps): ReactElement => {
  const navigate = useNavigate();

  return (
    <PageLayout>
      <Result
        status={errorCode}
        title={title}
        subTitle={description}
        extra={
          <Button type="primary" onClick={() => navigate("/")}>
            {buttonText || "На главную"}
          </Button>
        }
      />
    </PageLayout>
  );
};