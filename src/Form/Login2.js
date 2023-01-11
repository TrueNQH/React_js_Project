import { useState } from "react"

function Login2() {
        const [input, setInput] = useState({
            email: '',
            password: ''
        })
        const [err, settErr] = useState({})



        function handleSubmit(e) {
            e.preventDefault()
            let flag = true
            let mess = {}
            if(input.email =='' ) {
                mess.email = 'vui long nhap email'
                flag = false
            }
            if(input.password == "") {
                mess.password = 'vui long nhap password'
                flag = false
            }
            if(!flag) {
                settErr(mess)
            }




           
        }

        function handleChange(e) {
            const name = e.target.name
            const value = e.target.value
            setInput(state => ({...state, [name]:value}) )
            console.log(input);
            console.log(err)
        }
        function renderErr() {
            if(Object.keys(err).length > 0) {
                return Object.keys(err).map(function(key, index) {
                    
                    return <li key={index}>{err[key]}</li>
                })
            }
            
        }


    return(
        <div>
            <ul>
            {renderErr()}
            </ul>
        <form onSubmit={handleSubmit}>
            <input name = 'email' placeholder="email" type='text' onChange={handleChange}/>
                <br></br>
            <input name = 'password' placeholder="password" type='password' onChange={handleChange}/>
            <br/>
            <button type="submit">submit</button>
        </form>
        </div>
    )
}
export default Login2