import { useState } from "react"

function FormTest2() {
    const [getInput, setInput] = useState('')
    const [getTextArea, setTextArea] = useState('')
    const [getOption, setOption] = useState('')

    const [getErrInput, setErrInput] =useState('')
    const [getErrTextArea, setErrTextArea] = useState('')
    const [getErrOption, setErrOption] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        // bat ngoai le o day
        if(getInput === '' ) {
            setErrInput('vui long nhap ')
        } else {
            setErrInput('')
        }
        if(getTextArea === '' ) {
            setErrTextArea('vui long nhap ')
        } else {
            setErrTextArea('')
        }
        if(getOption === '' ) {
            setErrOption('vui long chon')
        }  else {
            setErrOption('')
        } 
            
        
    }


    function onChangeInput(e) {
        setInput(e.target.value)
    }
    function onChangeOption(e) {
        setOption(e.target.value)
    }
    function onChangeTextArea(e) {
        setTextArea(e.target.value)
    }
    return <div>
        <form onSubmit={handleSubmit}>
        <input onChange={onChangeInput}  /> 
        <p>{getErrInput}</p>
        <br/>
        <textarea onChange={onChangeTextArea}></textarea>
        <p>{getErrTextArea}</p>

        <br/>
        <select onChange={onChangeOption}>
            <option value=''>chon</option>
            <option value='1'>1</option>
            <option value='2'>2</option>
        </select>
        <p>{getErrOption}</p>
        <br/>
        <button type="submit">submit</button>
        </form>
    </div>
}
export default FormTest2