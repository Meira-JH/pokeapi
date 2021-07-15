import Button from '../../components/Button';
import { useRouter } from 'next/router';
import { useState } from 'react';
import * as S from './styles';
import Loading from "components/Loading";
import { EyeFill } from '@styled-icons/bootstrap/EyeFill';
import { EyeSlashFill } from '@styled-icons/bootstrap/EyeSlashFill';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import withStyles from '@material-ui/core/styles/withStyles';
import { login } from 'api/login';

const CssTextField = withStyles({
  root: {
    width: '100%',
    marginBottom: '20px',
    '& .MuiOutlinedInput-root': {
      '&.Mui-focused fieldset': {
        borderColor: '#bbbbbb',
      },
    },
  },
})(TextField);

const isNumberLowerUpperCase6Char =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})/;

const LoginSection = () => {
  const router = useRouter();

  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const [isLoading, setLoading] = useState(false);
  const [isHidden, setIsHidden] = useState('password');
  const [error, setError] = useState('');

  const handleOnChange = (event) => {
    setForm((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    if (
      form.password < 6 ||
      !isNumberLowerUpperCase6Char.test(form.password)
    ) {
      return setError(
        'A senha deve ter ao menos 6 caracteres, números, letras maíusculas e minúsculas.'
      );
    }

    const request = await login({
      email: form.email,
      password: form.password,
      device: navigator.userAgent,
      user: 'user',
    });
    setLoading(true);

    setForm({
      name: '',
      email: '',
    });

    if (request.status === 200) {
      return router.push('/');
    } else {
      return router.push('/error');
    }
  };

  const loginInputs = [
{
  name: 'email',
  type: 'text',
  label: 'Digite seu email  '
},
{
  name: 'password',
  type: 'password'
},
  ]

  const inputRenderer = () => {
    let renderArray = [];

    for (const input of loginInputs) {
      if (input.name !== 'password') {
        renderArray.push(
          <CssTextField
            key={input.name}
            size={ 'medium' }
            type={input.type}
            onChange={handleOnChange}
            name={input.name}
            value={form[input.name]}
            required={true}
            label={input.label}
            required
            variant="outlined"
            placeholder={input.placeholder}
            inputProps={{
              style: { fontSize: 20 },
            }}
            InputLabelProps={{
              style: { fontSize: 14, color: 'black' },
            }}
          />
        );
      } else if (input.name === 'password') {
        renderArray.push(
          <CssTextField
            key={input.name}
            size={ 'medium' }
            type={isHidden ? 'password' : 'text'}
            onChange={handleOnChange}
            name={input.name}
            value={form[input.name]}
            required={true}
            label="Digite sua senha "
            required
            variant="outlined"
            inputProps={{
              style: { fontSize: 20 },
            }}
            InputLabelProps={{
              style: { fontSize: 14, color: 'black' },
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setIsHidden(!isHidden)}
                    aria-label="muda a visibilidade da senha"
                    edge="end"
                  >
                    <S.EyeIcon>
                      {isHidden ? <EyeSlashFill /> : <EyeFill />}
                    </S.EyeIcon>
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        );
      }
    }

    return renderArray;
  };
  return (
    <S.Wrapper>
      <S.FormWrapper onSubmit={handleSubmit}>
        <S.WelcomeWrapper>
          <p>Faça login para acessar sua pokedex!</p>
        </S.WelcomeWrapper>
        <S.InputWrapper>
          <S.Error>{error}</S.Error>
          {inputRenderer()}
        </S.InputWrapper>
        <Button
          type="submit"
          variant="normal"
          children="LOGIN"
        />
      </S.FormWrapper>

      {isLoading && (
        <S.SpinnerWrapper>
          <Loading />
        </S.SpinnerWrapper>
      )}
    </S.Wrapper>
  );
};

export default LoginSection;
