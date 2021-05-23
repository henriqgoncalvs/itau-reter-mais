import * as S from './Checkbox.styles';

function Checkbox({ opt, setValue, checked, name }) {
  const handleChange = () => {
    setValue(opt.id);
  };

  return (
    <S.Wrapper>
      <input
        onChange={handleChange}
        type="radio"
        name={name}
        value={opt.id}
        defaultChecked={checked}
      />
      <span></span>
      {opt.description}
    </S.Wrapper>
  );
}

export default Checkbox;
