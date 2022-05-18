import { PageHeader } from 'antd';
import { useHistory } from 'react-router-dom';
import { theme } from '../../styles/theme';
import { Wrapper } from './styles';

export default function Header() {
	const history = useHistory();
	return (
		<Wrapper>
			<PageHeader
				onBack={() => history.push('/')}
				title="Header"
				subTitle="Seja Bem Vindo"
				style={{padding: theme.spacing.none}}
			/>
		</Wrapper>
	);
}
