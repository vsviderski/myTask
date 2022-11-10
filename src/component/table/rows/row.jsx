import * as S from "./row.styles";
const Row = ({ user }) => {
	const { name, email, address, phone, company } = user;
	const { street, suite, city } = address;
	return (
		<S.Block>
			<S.DivCeilFirst>
				<S.String>{name}</S.String>
			</S.DivCeilFirst>
			<S.DivCeilSecond>
				<S.Link href={email}>
					<S.String>{email}</S.String>
				</S.Link>
			</S.DivCeilSecond>
			<S.DivCeilThird>
				<S.String>
					{city}, {street}, {suite}
				</S.String>
			</S.DivCeilThird>
			<S.DivCeilFourth>
				<S.String>{phone}</S.String>
			</S.DivCeilFourth>
			<S.DivCeilFifth>
				<S.String>{company.name}</S.String>
			</S.DivCeilFifth>
		</S.Block>
	);
};

export default Row;
