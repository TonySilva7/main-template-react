import { Button, PageHeader } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../redux/hooks';
import { handleLogin } from '../../slices/myReducer/mySlice';
import { theme } from '../../styles/theme';
import { Wrapper } from './styles';

export default function Header() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  return (
    <Wrapper>
      <PageHeader
        onBack={() => navigate('/')}
        title="Header"
        subTitle="Seja Bem Vindo"
        style={{ padding: theme.spacing.none }}
      />
      <Button type="default" onClick={() => dispatch(handleLogin(false))}>
        {' '}
        logout{' '}
      </Button>
    </Wrapper>
  );
}
