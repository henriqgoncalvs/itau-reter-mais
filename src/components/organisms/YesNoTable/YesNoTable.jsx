import ListTable from 'components/common/ListTable';

import * as S from './YesNoTable.styles';

function YesNoTable({ tableItems }) {
  return (
    <S.Wrapper>
      <ListTable yes items={tableItems.yes} />
      <ListTable items={tableItems.no} />
    </S.Wrapper>
  );
}

export default YesNoTable;
