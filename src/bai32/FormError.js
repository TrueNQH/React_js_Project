function FormError(props) {
    function renderErr() {
        const err = props.error
        if(Object.keys(err).length > 0) {
            return Object.keys(err).map(function(key, index) {
                
                return (
                    <li key={index}>{err[key]}</li>
                    ) 
                    
            })
        }
        
    }
    return  <ul>
           {renderErr()}
        </ul>
       
    
}
export default FormError