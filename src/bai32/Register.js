import { useState } from 'react'
import {  Link } from "react-router-dom"
import FormErrors from './FormError'
function Register() {
    const data = [
        {
            "id": "",
            "name": "vui lòng chon",
        },
        {
            "id": 1,
            "name": "Male",
        },
        {
            "id": 2,
            "name": "Female",
        }
    ]
    const [input, setInput] = useState({
        email: '',
        password: '',
        fileName: '',
        fileSize : '',
        endFile: '',
        select: ''
    })
    const [err, setErr] = useState({})

    let renderData = data.map(function(value, index) {
        return <option key = {index} value={value.id}>{value.name}</option>
    }) 

    function handleSubmit(e) {
        e.preventDefault()
        let mess = {}   
        let flag = true
        let arrEndFile = ['png', 'jpg', 'jpeg', 'PNG', 'JPG']
        let regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/

        if(input.email == '') {
            mess.email = 'vui long nhap email'
            flag = false
        } else {
            if(!regex.test(input.email)) {
                mess.erremail = 'khong dung dinh danh email'
                flag = false
            }
        }
        if(input.password == '') {
            mess.password = 'vui long nhap password'
            flag = false
        } 
        if(input.fileName == '') {
            mess.fileName = 'vui long nhap file'
            flag = false
        } else {
            if(input.fileSize > 1024*1024) {
                mess.fileSize = 'kich thuoc file qua lon'
                flag = false
            }
            if(!arrEndFile.includes(input.endFile)) {
                mess.endFile = 'file khong dung dinh dang hinh anh'
                flag = false
            }
        }
        if(input.select == '' ) {
            mess.select = 'vui long chon gioi tinh cua ban'
            flag = false
        }
        
        if(input.fileName != '' && input.password != ''&& input.email != '' && regex.test(input.email)
         && arrEndFile.includes(input.endFile) && input.fileSize < 1024*1024 && input.select !='') {
            
            mess.confirm = 'dang ki thanh cong'
            setErr(mess)
            localStorage.setItem('account',JSON.stringify(input)) 
        }
        if(!flag) {
            setErr(mess)
            
        }
    }
    function handleSelect(e) {
        setInput(state => ({...state, 'select': e.target.value}))
    }
    function handleInput(e) {
        const name = e.target.name
        const value = e.target.value
        setInput(state => ({...state, [name]:value}))
        console.log(input)

    }
    function handleFile(e) {
        let fileName = ''
        let fileSize = 0
        let FileEnd = ''

       const  filesArray = [].slice.call(e.target.files);
       filesArray.map(e => {
        console.log(e.name)
        fileName = e.name.split('.')
        FileEnd = fileName[1]
        fileName = fileName[0]
        fileSize = e.size
       })
       setInput(state => ({...state, 'fileName':fileName, 'fileSize': fileSize, 'endFile': FileEnd}))
    }
    

    return <div>
            <FormErrors error = {err}/>
            <form encType="multipart/form-data" onSubmit={handleSubmit}>
                <input name = 'email' placeholder="email" type='text' onChange={handleInput}/> <br/>
                <input name = 'password' placeholder="password" type='password' onChange={handleInput}/> <br/>
                <input name = 'avatar' placeholder="avatar" type='file' onChange={handleFile}/> <br/>
               <select onChange={handleSelect}>
                {renderData}
               </select> <br/>
                <input type='submit' value = 'submit'/> 
            </form>
            <Link to ='/login'>login</Link>
        </div>
    
}
export default Register