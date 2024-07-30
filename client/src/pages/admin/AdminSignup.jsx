
import Btn from '../../component/Btn'
import Form from '../../component/Form'
import FormBody from '../../component/FormBody'
import Input from '../../component/Input'

export const AdminSignup = () => {
  return (
    <FormBody>
        <Form>
            <Input type="text" placeholder="name"/>
            <Input type="email" placeholder="email"/>
            <Input type="text" placeholder="username"/>
            <Input type="text" placeholder="secret question"/>
            <Input type="text" placeholder="password"/>
            <Btn innerText="Sign Up"/>
        </Form>
    </FormBody>
  )
}


