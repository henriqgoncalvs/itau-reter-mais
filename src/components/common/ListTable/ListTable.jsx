import checkmarkWhite from 'assets/img/checkmark-white.svg';

import * as S from './ListTable.styles';

function ListTable({ items, yes }) {
  return (
    <S.Wrapper yes={yes}>
      <S.TableTitle yes={yes}>
        <span>
          <img src={checkmarkWhite} />
        </span>
        {yes ? 'Sim' : 'Não'}
      </S.TableTitle>
      {items.map((item) => (
        <li key={item}>
          <span>
            <img src={checkmarkWhite} />
          </span>
          {item}
        </li>
      ))}
    </S.Wrapper>
  );
}

export default ListTable;
