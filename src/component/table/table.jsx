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
			<S.Table>
				<S.Tbody>
					<S.TrHeader>
						<S.TdCeil
							onClick={() => {
								sortName();
							}}
						>
							ФИО
						</S.TdCeil>
						<S.TdCeil
							onClick={() => {
								sortName();
							}}
						>
							E-mail
						</S.TdCeil>
						<S.TdAddress
							onClick={() => {
								sortName();
							}}
						>
							Адрес (город/улица/здание)
						</S.TdAddress>
						<S.TdCeil
							onClick={() => {
								sortName();
							}}
						>
							Телефон
						</S.TdCeil>
						<S.TdCeil
							onClick={() => {
								sortName();
							}}
						>
							Компания
						</S.TdCeil>
					</S.TrHeader>

					{filteredUsers.map((user) => (
						<Row user={user} key={user.id} />
					))}
				</S.Tbody>
			</S.Table>

			<S.Count>
				<S.Line>Итого: {data.length}</S.Line>
			</S.Count>
		</S.Block>
	);
};

export default Table;
