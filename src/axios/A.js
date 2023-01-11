import axios from "axios"
import { useEffect, useState } from "react"
import B from './B'

function A() {
    const [data, setData] = useState([])
    
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users' )
        .then(res => {
            console.log(res.data)
            setData(res.data)
        })
        .catch(error => console.log(error))
    }, [])
   
       if(data.length > 0 ) {
        return <B data = {data}/>
       }
    
    
    
}
export default A
