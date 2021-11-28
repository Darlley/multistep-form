import {useHistory} from 'react-router-dom';
import {useForm,FormActions} from "./../../contexts/FormContext"
import { Theme } from '../../components/Theme';
import * as C from './styles';
import { ChangeEvent, useEffect } from 'react';

export const FormStep1 = () => {
  const history = useHistory();
  const { state, dispatch } = useForm();

  useEffect(() => {
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 1
    })
  }, [])

  const handleNextStep = () => {
    if(state.name !== ''){
      history.push('/step2')
    }else{
      alert('Me fala seu nome :)')
    }
  }
  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setName,
      payload: e.target.value
    })
  }

  return (
    <Theme>
      <C.Container>
        <p>Passo {state.currentStep}/3</p>
        <h1>Vamos começar com o seu nome :)</h1>
        <p>Prencha o campo abaixo com seu nome completo.</p>
        <hr />
        <label>
          Qual o seu nome?
          <input type="text" autoFocus value={state.name} onChange={handleNameChange} />
        </label>

        <button onClick={handleNextStep}>
          Próximo
        </button>
      </C.Container>
    </Theme>
  );
}