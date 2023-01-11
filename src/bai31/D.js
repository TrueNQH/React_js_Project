function D(props) {
    const data2 = props.data2
    let ListData2 = 
        
        <li key = {data2.id}>
             <p>- id: {data2.id}</p>
                <p>- name: {data2.name}</p>
                <p>- username: {data2.username}</p>
                <p>- email: {data2.email}</p>
                <p>- address: </p>
                <ul>
                    <li>+ street: {data2.address.street}</li>
                    <li>+ suite: {data2.address.suite}</li>
                </ul>
                <p>- phone: {data2.phone}</p>
                <p>- website: {data2.website}</p>
                <p>- company: </p>
                <ul>
                    <li>+ name: {data2.company.name}</li>
                    <li>+ catchPhrase: {data2.company.catchPhrase}</li>
                </ul>
        </li>
    
    return <ul>{ListData2}</ul>
}
export default D