function Infor(props) {
    const data = props.data
    const ListData = data.map(function(value, index) {
        return <li key = {index}>
            <p>- ID: {value.id}</p>
            <p>- name: {value.name}</p>
            <p>- username: {value.username}</p>
            <p>- email: {value.email}</p>
            <p>- address: </p>
            <ul>
                <li>+ street: {value.address.street}</li>
                <li>+ suite: {value.address.suite}</li>
            </ul>
            <p>- phone: {value.phone}</p>
            <p>- website: {value.website}</p>
            <p>- company: </p>
            <ul>
                <li>+ name: {value.address.name}</li>
                <li>+ catchPhrase: {value.address.catchPhrase}</li>
            </ul>
        </li>
    })
    return <ul>{ListData}</ul>
}
export default Infor