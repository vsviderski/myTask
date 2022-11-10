import { useEffect, useState } from 'react';
import Row from './rows/row';
import * as S from './table.styles';

const Table = ({ searchValue }) => {
  const [initialUsers, setInitialUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [sortField, setSortField] = useState('');
  const [order, setOrder] = useState('');
  const ASC = 'asc';
  const DESC = 'desc';

  useEffect(() => {
    getUsers().then((users) => {
      setInitialUsers(users);
      setFilteredUsers(users);
    });
  }, []);

  useEffect(() => {
    const filteredUsers = getFilteredUsers();
    setFilteredUsers(filteredUsers);
  }, [searchValue]);

  const getUsers = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    if (!response.ok) {
      const message = `An error has occured: ${response.status}`;
      throw new Error(message);
    }
    const data = await response.json();

    return data;
  };

  const getFilteredUsers = () => {
    return initialUsers.filter((user) =>
      user.name.toLowerCase().includes(searchValue.toLowerCase())
    );
  };

  const handleSortingChange = (accessor) => {
    const sortOrder =
      accessor === sortField && order === ASC
        ? DESC
        : accessor === sortField && order === DESC
        ? ''
        : ASC;
    setSortField(accessor);
    setOrder(sortOrder);
    handleSorting(accessor, sortOrder);
  };

  const handleSorting = (sortField, sortOrder) => {
    const sorted = sortOrder
      ? [...filteredUsers].sort(
          (a, b) =>
            a[sortField].localeCompare(b[sortField], 'en') *
            (sortOrder === 'asc' ? 1 : -1)
        )
      : getFilteredUsers();

    setFilteredUsers(sorted);
  };

  return (
    <S.Block>
      <S.FirstSection>
        <S.DivCeil onClick={() => { handleSortingChange('name'); }}>
          <S.Line>ФИО</S.Line>
        </S.DivCeil>
        <S.DivCeil onClick={() => { handleSortingChange('email'); }}>
          <S.Line>E-mail</S.Line>
        </S.DivCeil>
        <S.DivAddress onClick={() => { handleSortingChange(); }}>
          <S.Line>Адрес</S.Line>
        </S.DivAddress>
        <S.DivCeil onClick={() => { handleSortingChange('phone'); }}>
          <S.Line>Телефон</S.Line>
        </S.DivCeil>
        <S.DivCeil>
          <S.Line>Компания</S.Line>
        </S.DivCeil>
      </S.FirstSection>
      <S.SecondSection>
        {filteredUsers.map((user) => (
          <Row user={user} key={user.id} />
        ))}
      </S.SecondSection>
      <S.Count>
        <S.LineCount>Итого: {filteredUsers.length}</S.LineCount>
      </S.Count>
    </S.Block>
  );
};

export default Table;
