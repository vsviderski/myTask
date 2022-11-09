import { useState } from "react";
import Header from "./component/header/header";
import Table from "./component/table/table";
import * as S from "./App.styles";

function App() {
	const [value, setValue] = useState("");
	const handleUserName = (value) => {
		setValue(value);
	};

	return (
		<S.Block>
			<Header onChange={handleUserName} />
			<Table value={value} />
		</S.Block>
	);
}

export default App;
