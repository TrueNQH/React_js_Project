import { useState } from "react"
import ErrorForm from './FormErrors'
function Login(props) {
    
    const [input, setInput] = useState({
        email: '',
        password: ''
    })
    const [error, setError] = useState({})
// 
    function handleInput(e) {
        const nameInput = e.target.name
        const value = e.target.value
        setInput(state => ({...state, [nameInput]:value}))
        console.log(input)
     }
    function handleSubmit(e) {
        e.preventDefault()
        let ErrSubmit = {}
        let flag = true

        if(input.email == '') {
            ErrSubmit.email = 'vui long nhap email'
            flag = false
        }
        if(input.password == '') {
            ErrSubmit.password = 'vui long nhap password'
            flag = false
        } 
       
        if(!flag) {
            setError(ErrSubmit)
        }

       
        
    }

    // 
      return <div>
       <ErrorForm error = {error}/>
        <h1>form</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" name="email" placeholder="Email" onChange={handleInput}/>
            <input type="password" name="password" placeholder="Password" onChange={handleInput}/>
                <button type="submit">submit</button>
        </form>
      </div>
    }


 
export default Login