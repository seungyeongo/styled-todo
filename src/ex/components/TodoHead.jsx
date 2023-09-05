import React from 'react';
import { styled } from 'styled-components';

const Header = styled.header`
	display: flex;
	justify-content: space-around;
	align-items: center;
	color: #fff;
	background-color: ${(props) => props.bgc};
	border: 1px solid ${(props) => props.bgc};
	border-radius: 10px 10px 0 0;
`;

const Title = styled.h1`
	height: 150px;
	font-size: 30px;
	line-height: 150px;
`;

const DateTime = styled.p`
	font-size: 1px;
	text-align: right;
`;

const Time = styled.time`
	display: block;
	margin-top: 8px;
`;

const Day = styled.span`
	display: block;
	margin-top: 8px;
`;

const TodoHead = ({ children }) => {
	return (
		<Header bgc={`green`}>
			<Title>{children}</Title>
			<DateTime>
				<Time>{new Date().toLocaleDateString()}</Time>
				<Day>{new Date().toLocaleDateString('ko-KR', { weekday: 'long' })}</Day>
			</DateTime>
		</Header>
	);
};

export default TodoHead;
