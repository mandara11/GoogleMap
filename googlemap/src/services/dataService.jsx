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