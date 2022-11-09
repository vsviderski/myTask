import * as S from "./header.styles";

const Header = ({ onChange }) => {
	const handleUserName = (event) => {
		onChange(event.target.value);
	};

	return (
		<S.Block>
			<S.Title>Список пользователей</S.Title>
			<S.Input
				onChange={handleUserName}
				placeholder="Поиск по Ф.И.О"
				type="text"
			/>
		</S.Block>
	);
};

export default Header;
