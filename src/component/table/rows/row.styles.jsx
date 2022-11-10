import styled from "styled-components";

export const Block = styled.ul`
	display: flex;
	height: 40px;
	list-style-type: none;
	padding: 0;
	margin: 0;
`;

export const DivCeilFirst = styled.li`
	width: 225px;
	height: 70px;
`;
export const DivCeilSecond = styled.li`
	width: 225px;
	height: 70px;
`;
export const DivCeilThird = styled.li`
	width: 190px;
	height: 70px;
	margin-right: 30px;
`;
export const DivCeilFourth = styled.li`
	width: 220px;
	height: 70px;
`;
export const DivCeilFifth = styled.li`
	width: 225px;
	height: 70px;
`;

export const Link = styled.a`
	text-decoration: none;
	color: #00ced1;
`;

export const String = styled.span`
	font-family: "Arial";
	font-style: normal;
	font-weight: 700;
	font-size: 14px;
	overflow: hidden;
	display: -webkit-box;
	-webkit-line-clamp: 1;
	-webkit-box-orient: vertical;
	&:hover + div {
		display: block;
	}
`;
