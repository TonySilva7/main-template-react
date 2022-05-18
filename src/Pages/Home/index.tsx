import { Affix, Avatar, Layout, List, PageHeader, Spin } from 'antd';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { getMyData, selectStatus, selectUser } from '../../slices/myReducer/mySlice';
import { theme } from '../../styles/theme';

const { Header, Footer, Content } = Layout;

const Home = () => {
	const dispatch = useAppDispatch();
	const user = useAppSelector(selectUser);
	const status = useAppSelector(selectStatus);

	useEffect(() => {
		toast.success('Welcome to the app!', {
			position: toast.POSITION.TOP_RIGHT,
		});
	}, []);

	useEffect(() => {
		dispatch(getMyData('users/TonySilva7'));
	}, [dispatch]);

	return (
		<Layout>
      <Header style={{backgroundColor: theme.colors.info, marginBottom: '5rem'}}>
				<PageHeader
					// onBack={() => null}
					title="Home"
					subTitle="Seja Bem Vindo"
					style={{padding: theme.spacing.none}}
				/>
			</Header>


        <Content style={{padding: theme.spacing.regular, minHeight: 'calc(100vh - 18rem)'}}>
					{status === 'pending' ? (
						<Spin />
					) : (
						<List
								itemLayout="horizontal"
								dataSource={[user]}
								renderItem={item => (
									<List.Item>
										<List.Item.Meta
											avatar={<Avatar src={item.avatar_url} size={50}/>}
											title={<a href="https://ant.design">{item.name}</a>}
											description={item.url}
										/>
									</List.Item>
								)}
							/>
					)}

					<Affix style={{marginTop: '4rem'}}>
						<Link to='/dashboard'>
										Testar Redux 😎️?
						</Link>
					</Affix>

				</Content>

      <Footer style={{position: 'absolute', bottom: '0px', width: '100vw', backgroundColor: '#eaeaec'}}>By @Tony</Footer>
    </Layout>
	);
};

export default Home;
