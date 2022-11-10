import * as S from "./table.styles";
import Row from "./rows/row";
import { useEffect, useState } from "react";
const Table = ({ value }) => {
	const [data, setData] = useState([]);
	const [direction, setDirection] = useState(true);

	useEffect(() => {
		loadUsers();
	}, []);

	const loadUsers = () => {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((response) => response.json())
			.then((data) => {
				setData(data);
			});
	};

	const sortName = (name) => {
		const copyData = [...data];
		const sortData = copyData.sort((a, b) => {
			return a.name > b.name ? 1 : -1;
		});
		setData(sortData);
	};
	const filteredUsers = data.filter((user) => {
		return user.name.toLowerCase().includes(value.toLowerCase());
	});

	return (
		<S.Block>
			<S.FirstSection>
				<S.DivCeil
					onClick={() => {
						sortName();
					}}
				>
					<S.Line>ФИО</S.Line>
				</S.DivCeil>
				<S.DivCeil
					onClick={() => {
						sortName();
					}}
				>
					<S.Line>E-mail</S.Line>
				</S.DivCeil>
				<S.DivAddress
					onClick={() => {
						sortName();
					}}
				>
					{" "}
					<S.Line>Адрес</S.Line>
				</S.DivAddress>
				<S.DivCeil
					onClick={() => {
						sortName();
					}}
				>
					{" "}
					<S.Line>Телефон</S.Line>
				</S.DivCeil>
				<S.DivCeil
					onClick={() => {
						sortName();
					}}
				>
					{" "}
					<S.Line>Компания</S.Line>
				</S.DivCeil>
			</S.FirstSection>
			<S.SecondSection>
				{filteredUsers.map((user) => (
					<Row user={user} key={user.id} />
				))}
			</S.SecondSection>
			<S.Count>
				<S.LineCount>Итого: {data.length}</S.LineCount>
			</S.Count>
		</S.Block>
	);
};

export default Table;
