import axios from "axios"
import { useState } from "react"

function DemoPost() {
    const [input, setInput] = useState('')
    function handleChange(e) {
        setInput(e.target.value)
    }
    function handleSubmit(e) {
        e.preventDefault()
        const data = {
            id: input
        }
        axios.delete('https://jsonplaceholder.typicode.com/users', data)
        .then((res) => {
            console.log(res)
        })
    }
    return (
        <form onSubmit={handleSubmit}>
            <input 
                type='text'
                name = 'id'
                value = {input}
                onChange = {handleChange}
            />
            <input value='submit' type = 'submit'/>
        </form>
    )

}
export default DemoPost
