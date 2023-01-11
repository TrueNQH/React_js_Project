import A from './A'
function B(props) {

    const Data = props.data
    function renderData() {
        return Data.map((value, index) => {
            return (
                <li key={index}>
                <p>- ID: {value.id}</p>
                <p>- name: {value.name}</p>
                
                    <ul>
                
                    <p>-address: </p>
                        <li> street: {value.address['street']}</li>
                    </ul>
                <p>
                    -phone: {value.phone}
                </p>
                
                <ul>
                <p>-company: </p>
                        <li> name: {value.company['name']}</li>
                </ul>
                
                </li>
            )
        })
            
        
    }
    return <ul>
        {renderData()}
    </ul>
}
export default B
