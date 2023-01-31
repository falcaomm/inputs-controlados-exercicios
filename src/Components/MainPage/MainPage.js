import React, { useState } from 'react'
import { MainContainer } from './styles'
import NameForm from '../NameForm/NameForm'
import ConfirmationForm from '../ConfirmationForm/ConfirmationForm'

const MainPage = () => {
  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const [email, setEmail] = useState("")
  const [email2, setEmail2] = useState("")
  const [formFlow, setFormFlow] = useState(1)

  const onChangeName = (event) => {
    setName(event.target.value)
  }

  const onChangeAge = (event) => {
    setAge(event.target.value)
  }

  const onChangeEmail = (event) => {
    setEmail(event.target.value)
  }

  const onChangeEmail2 = (event) => {
    setEmail2(event.target.value)
  }


  // const sendData = () => {
  //   if ( age > 18 && name.length < 31 && name.length > 9 && email.includes("@") && email === email2) {
  //     setFormFlow(2)
  //   } else{
  //     alert("Os dados não foram preenchidos corretamente")
  //   }
  // }

  const sendData = () => {
      setFormFlow(2)
  }

  return (
    <MainContainer>
      <h2>Formulário de inscrição</h2>
      {formFlow === 1 ?
        <NameForm
          name={name}
          age={age}
          email={email}
          email2={email2}
          formFlow={formFlow}
          onChangeName={onChangeName}
          onChangeAge={onChangeAge}
          onChangeEmail={onChangeEmail}
          onChangeEmail2={onChangeEmail2}
          sendData={sendData}
        />
        : <ConfirmationForm />}
    </MainContainer>
  )
}

export default MainPage