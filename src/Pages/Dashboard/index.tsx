import { Avatar, Badge, Button, Modal } from 'antd';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../Components/Header';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import {
  handleDecrement,
  handleIncrement,
  selectMyNum
} from '../../slices/myReducer/mySlice';


const Dashboard = () => {
	const dispatch = useAppDispatch();
	const myNum = useAppSelector(selectMyNum);
	const navigate = useNavigate();


	const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
		navigate('/');
  };

	useEffect(() => {
		setTimeout(() => {
			showModal();
		}, 300);
	}, []);


	return (
		<>

			<Modal title="Testando Redux" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <p>Teste o Redux pressionando os botões desta página</p>
      </Modal>

			<Header />

			<div style={{ marginLeft: '2rem' }}>
				<h3>Teste o Redux nos botões abaixo!</h3>
				<span style={{ display: 'flex' }}>
					<Button type="primary" danger onClick={() => dispatch(handleDecrement())} style={{margin: '2rem'}}> - </Button>

					<Badge count={myNum}>
						<Avatar shape="circle" size="large" />
					</Badge>

					<Button type="primary" onClick={() => dispatch(handleIncrement())} style={{margin: '2rem'}}> + </Button>
				</span>



			</div>
		</>
	);
};

export default Dashboard;
