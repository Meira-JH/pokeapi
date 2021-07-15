import * as S from './styles';

const Button = ({ children, icon, variant = 'normal', ...props }) => {

  return (
    <S.Wrapper variant={variant} {...props}>
      {icon}
      {!!children && <span>{children}</span>}
    </S.Wrapper>
  );
};

export default Button;

