import styled from "styled-components";

export const Block = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 1150px;
	background-color: #ffffff;
`;

export const DivCeil = styled.li`
	width: 460px;
	height: 70px;
	cursor: pointer;
	color: black;
	display: flex;
	justify-content: flex-start;
`;

export const DivAddress = styled.div`
	width: 450px;
	height: 70px;
	cursor: pointer;
	color: black;
`;

export const Count = styled.div`
	position: relative;
	left: 520px;
`;

export const Line = styled.span`
	font-family: "Arial";
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	color: #cdcdcd;
`;

export const LineCount = styled.span`
	font-family: "Arial";
	font-style: normal;
	font-weight: 700;
	font-size: 20px;
	color: #000;
`;
export const Input = styled.input`
	width: 250px;
	height: 30px;
`;

export const LineHeader = styled.span`
	font-family: "Arial";
	font-style: normal;
	font-weight: 700;
	font-size: 24px;
`;

export const FirstSection = styled.ul`
	display: flex;
	width: 1120px;
	height: 35px;
	border-bottom: 2px solid #cdcdcd;
	padding: 16px;
`;

export const SecondSection = styled.div`
	width: 1120px;
	overflow: overlay;
	height: 430px;
`;
