import axios from "axios"

const headerConfig={
    headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}
}
export const addData=(data)=>{
    let response=axios.post("http://localhost:8000/data",data,headerConfig)
    return response
}

export const getMarkerData=()=>{
    let response=axios.get("http://localhost:8000/data",headerConfig)
    return response
}

export const updateMarkerData=(data)=>{
    let response=axios.put(`http://localhost:8000/data/${data.id}`,data,headerConfig)
    return response
}

export const deleteData = (removeObj) => {
    let response = axios.delete(`http://localhost:8000/data/${removeObj.id}`, headerConfig)
    return response
}