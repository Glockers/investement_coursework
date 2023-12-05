import { ReactElement, useState } from 'react';
import logo from '../../assets/default-avatar.png';
import { Button, Form } from 'antd';
import { PageLayout } from '../../components/Layouts';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import {
  Avatar,
  Container,
  InputField,
  InputLabel,
  InputWrapper
} from './Profile.style';

export const Profile = (): ReactElement => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { handleSubmit } = useForm();

  const handleChangePassword = () => {
    if (password !== confirmPassword) {
      toast.error('Пароли не совпадают');
      return;
    } else {
      toast.success('Пороль успешно изменен!');
    }
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <PageLayout>
      <Container>
        <Avatar src={logo} alt="User Avatar" />
        <InputWrapper>
          <InputLabel>Login:</InputLabel>
          <InputField type="text" value="user_login" disabled />
        </InputWrapper>

        <Form onSubmitCapture={handleSubmit(handleChangePassword)}>
          <InputWrapper>
            <InputLabel>New Password:</InputLabel>
            <InputField
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </InputWrapper>

          <InputWrapper>
            <InputLabel>Confirm New Password:</InputLabel>
            <InputField
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </InputWrapper>
          <Button htmlType="submit">Change Password</Button>
        </Form>
      </Container>
    </PageLayout>
  );
};
