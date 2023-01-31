import React from 'react'
import { Form, Input } from '../MainPage/styles'

const ConfirmationForm = () => {
  return (
    <Form>
      <label>
        Data Nascimento:
        <Input
          placeholder='Data Nascimento'
          type={'date'}
        />
      </label>

      <label>
        Telefone:
        <Input
          placeholder='Telefone'
          type={'tel'}
        />
      </label>

      <label>
        Genero:
        <select name="select">
          <option value="valor1">Valor 1</option>
          <option value="valor2" selected>Valor 2</option>
          <option value="valor3">Valor 3</option>
        </select>
      </label>

      <label>
        Autodeclarado:
        <select name="select">
          <option value="valor1">Valor 1</option>
          <option value="valor2" selected>Valor 2</option>
          <option value="valor3">Valor 3</option>
        </select>
        </label>

        <label>
          Curso integral web fullstack
          <Input type={'radio'}
          />
        </label>

        <label>
          Curso noturno web fullstack
          <Input type={'radio'}
          />
        </label>

        <input type="checkbox" />
        <label for="vehicle1"> I have a bike</label>

          <button>Enviar dados</button>
        </Form>
        )
}

        export default ConfirmationForm