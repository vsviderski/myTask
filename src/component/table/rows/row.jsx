import * as S from "./row.styles";
const Row = ({ user }) => {
	const { name, email, address, phone, company } = user;
	const { street, suite, city } = address;
	return (
		<S.TrBlock>
			<S.TdBlock><S.String>{name}</S.String></S.TdBlock>
			<S.TdBlock><S.Link href={email}><S.String>{email}</S.String></S.Link></S.TdBlock>
			<S.TdBlock><S.String>
				{city}, {street}, {suite}</S.String>
			</S.TdBlock>
			<S.TdBlock><S.String>{phone}</S.String></S.TdBlock>
			<S.TdBlock><S.String>{company.name}</S.String></S.TdBlock>
		</S.TrBlock>
	);
};

export default Row;
