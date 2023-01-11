function FormErrors(props) {
    function renderError() {
         let {error} = props
        if(Object.keys(error).length > 0) {
            return Object.keys(error).map((key,index) => {
                return (
                    <li key = {index}>{error[key]}</li>
                )
            })
        }
        
    }
    return (
        <div>
            <ul>
                {renderError()}
            </ul>
        </div>
    )
}
export default FormErrors