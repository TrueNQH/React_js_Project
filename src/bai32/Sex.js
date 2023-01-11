import { useState } from "react"

function Sex(props) {
    const Data = props.data
   
    let renderData = Data.map(function(value, index) {
        
        return <option key = {index} value={value.id}>{value.name}</option>
    }) 
    
    return (
        <div>
            <select >
            {renderData}
            </select>
        </div>
    )
}
export default Sex