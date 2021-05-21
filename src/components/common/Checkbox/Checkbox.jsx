import * as S from './Checkbox.styles';

function Checkbox({ opt, setValue, checked }) {
  const handleChange = () => {
    setValue(opt.id);
  };

  return (
    <S.Wrapper>
      <input
        onChange={handleChange}
        type="radio"
        name="radio"
        value={opt.id}
        defaultChecked={checked}
      />
      <span></span>
      {opt.description}
    </S.Wrapper>
  );
}

export default Checkbox;
