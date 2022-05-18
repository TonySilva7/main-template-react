import { PageHeader } from 'antd';
import { useNavigate } from 'react-router-dom';
import { theme } from '../../styles/theme';
import { Wrapper } from './styles';

export default function Header() {
	const navigate = useNavigate();
	return (
		<Wrapper>
			<PageHeader
				onBack={() => navigate('/')}
				title="Header"
				subTitle="Seja Bem Vindo"
				style={{padding: theme.spacing.none}}
			/>
		</Wrapper>
	);
}
