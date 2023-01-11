import { useState } from "react"

function FormTest() {
    const [getInput, setInput] = useState('')
    const [getInputOption, setInputOption] = useState('')
    const [getInputArea, setInputArea] = useState('')

    const [errInput, setErrInput] = useState('')
    const [errInputArea, setErrInputArea] = useState('')
    const [errInputOption, setErrInputOption] = useState('')
    function handelInput(e) {
        setInput(e.target.value)
        
    }
    function handelChangeArea(e) {
        setInputArea(e.target.value)

    }
    function handelChangeOption(e) {
        setInputOption(e.target.value)

    }
    function handelClick(e) {
        e.preventDefault()
        if(getInput === '') {
        
            setErrInput('nhap input')
        } else {
            setErrInput('')
        }
        if(getInputOption === '') {
        
            setErrInputOption('nhap inputOption')
        } else {
            setErrInputOption('')
        }
        if(getInputArea === '') {
        
            setErrInputArea('nhap inputArea')
        } else {
            setErrInputArea('')
        }


    }
    return (
        <div>
            <form onSubmit={handelClick}>
                <input value={getInput} onChange={handelInput} />
                <p>{errInput}</p>
                <textarea onChange={handelChangeArea} >{getInputArea}</textarea>
                <p>{errInputArea}</p>
                <select onChange={handelChangeOption}>
                    <option value='' >Vui long chon</option>
                    <option value='1' >1 </option>
                    <option value='2' >2 </option>
                </select>
                <p>{errInputOption}</p>
                
                <button type="submit">Click</button>
            </form>
        </div>
    )
}
export default FormTest