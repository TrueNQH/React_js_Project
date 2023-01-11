import { useState } from "react"
import {  Link } from "react-router-dom"
import FormError from "./FormError"
function Login() {
    
    const account = JSON.parse(localStorage.getItem('account'))

        
    const [input, setInput] = useState({
        email: '',
        password: ''
    })
    const [err, setErr] = useState({})
    function handleSubmit(e) {
        let mess = {}
        let flag = true
        let regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
        
        e.preventDefault()
        if(input.email =='') {
            mess.email = 'vui long nhap email'
            flag = false
        } else {
            if(!regex.test(input.email)) {
                mess.erremail = 'khong dung dinh dang email'
                flag = false
            }
        }
        if(input.password =='') {
            mess.password = 'vui long nhap password'
            flag = false
        }
        if(!flag) {
            setErr(mess)
        }
        if(input.email !='' && input.password != '' && regex.test(input.email)) {
            if(account.email == input.email  && account.password == input.password) {
                mess.confirm = 'dang nhap thanh cong'
                
            } else {
                mess.confirm = 'dang nhap khong thanh cong, tai khoan hoac mat khau  sai'
            }
            setErr(mess)
        }
        
    }
    function handleInput(e) {
        const name = e.target.name
        const value = e.target.value
        setInput(state => ({...state, [name]:value}))
    }
    return(
        <div>
            <FormError error = {err}/>
            <form onSubmit={handleSubmit}>
                <input type='text' name='email' placeholder="email" onChange={handleInput}/>
                <input type='password' name='password' placeholder="password" onChange={handleInput}/>
                <input type='submit' value='submit'/>
            </form>
           <Link to = '/'>Register</Link>
          
        </div>
    )
}
export default Login
