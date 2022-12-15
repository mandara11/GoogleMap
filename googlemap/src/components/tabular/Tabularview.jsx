import { makeStyles } from '@mui/styles'
import Box from '@mui/material/Box';
import React, { useEffect, useState } from 'react'
import { deleteData, getMarkerData, updateMarkerData } from '../../services/dataService';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import InputBase from '@mui/material/InputBase';
import Modal from '@mui/material/Modal';


const useStyles = makeStyles({
    containertab: {
        width: '90vw',
        height: 'auto',
        border: '0px solid black',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container1: {
        width: '70%',
        height: '100%',
        border: '1px solid 	#C0C0C0',
        position: 'relative',
    },
    row1: {
        width: '100%',
        height: '50px',
        border: '0px solid red',
        display: 'flex',
        flexDirection: 'row',
        fontSize: '22px',
        fontWeight: '500',
        alignContent: 'center',
        justifyContent: 'centre',
        background: '#ff416c',
        background: 'linear-gradient(to left, #ff4b28, #ff228c)',
        transform: 'translateX(0)',
    },
    row1a: {
        width: '25%',
        border: '0px solid red',
        position:'relative',
        top:'8px',

    },
    row1b: {
        width: '25%',
        border: '0px solid red',
        position:'relative',
        top:'8px',
    },
    row1c: {
        width: '25%',
        border: '0px solid red',
        position:'relative',
        top:'8px',
    },
    row1d: {
        width: '25%',
        border: '0px solid red',
        position:'relative',
        top:'8px',

    },
    row2: {
        width: '100%',
        height: '40px',
        border: '0px solid red',
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'centre',
        fontSize: '15px',
        fontWeight: '500',
        marginTop:'10px',
    },
    row1dd:{
       width:'25%',
       display:'flex',
       flexDirection:'row',
    },
    row1e:{
        width:'50%',
        alignContent: 'center',
        justifyContent: 'centre',
        border:'0px solid black',
    },
    editcontainer: {
        width:'55vh',
        height:'15vh',
        border:'1px solid black',
        backgroundColor:'#fff',
        position:'relative',
        left:'600px',
        top:'200px',
    },
    twotext: {
        display: 'flex',
        flexDirection: 'column',
        rowGap: '20px',
    },
    btn2: {
        position: 'relative',
        left:'310px',
        color:'black',
        fontWeight:'550',
        fontSize:'15px',
    }
})

function Tabularview() {
    const classes = useStyles()

    const [view, setView] = useState()
    const [open, setOpen] = React.useState(false);
    const [inputValue, setInputValue] = useState({id:'', latitude: '', langitude: ''})

    const handleOpen = (dataDetails) => {
        console.log(dataDetails, "getting data details")
        setOpen(true)
        setInputValue({ id: dataDetails.id, latitude: dataDetails.latitude, longitude: dataDetails.longitude })
    };
    const handleClose = () => {
        setOpen(false);
    }

    useEffect(() => {
        getMarkerData().then((response) => {
            console.log(response)
            setView(response.data);
        }).catch((error) => {
            console.log(error)
        })
    }, [])
    console.log(view, 'state value')


    const updateLatitude = (event) => {
        setInputValue(prevState => ({
            ...prevState,
            latitude: event.target.value
        }))
    }
    const updateLongitude = (event) => {
        setInputValue(prevState => ({
            ...prevState,
            longitude: event.target.value
        }))
    }

    const saveData = () => {
        updateMarkerData(inputValue)
            .then((response) => {
                console.log(response)
            })
            .catch((error) => {
                console.log(error)
            })
        setOpen(false);
    }

    const removeData=(data)=> {
        // let removeObj = {data:data}
        console.log(data)
        deleteData(data)
        .then((response)=>{
            console.log(response)
        })
        .catch((error)=> {
            console.log(error)
        })
    //     console.log(removeObj, "deleted successfully")
     }


    return (
        <div>
            <Box className={classes.containertab}>
                <Paper elevation={3} className={classes.container1}>
                    <Paper elevation={1} className={classes.row1} >
                        <span className={classes.row1a}>ID</span>
                        <span className={classes.row1b}>Latitude</span>
                        <span className={classes.row1c}>Longitude</span>
                        <span className={classes.row1d}>Edit</span>
                    </Paper>
                    <Box>
                        {
                            view.map((data) => (
                                <Box>
                                <Box elevation={1} className={classes.row2} >
                                    <span className={classes.row1a}>{data.id}</span>
                                    <span className={classes.row1b}>{data.latitude}</span>
                                    <span className={classes.row1c}>{data.longitude}</span>
                                    <span className={classes.row1dd}>
                                        <span className={classes.row1e}><EditOutlinedIcon onClick={() => handleOpen(data)} /></span>
                                        <span className={classes.row1e}><DeleteOutlineOutlinedIcon onClick={() => removeData(data)} /></span>
                                    </span>
                                </Box>
                                </Box>
                            ))
                        }
                    </Box>
                </Paper>
                <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className={classes.editcontainer}>
                    <div className="title4">
                        <div className="twotext" style={{ display: "flex", flexDirection: "column",color:"black" }}>
                            <InputBase type='textbox' name='' onChange={updateLatitude} placeholder='latitude' defaultValue={inputValue.title} />
                            <InputBase type='textbox' name='' onChange={updateLongitude} placeholder='longitude' defaultValue={inputValue.description} />
                        </div>
                    </div>
                    <div className={classes.icons4}>
                        <div><Button className={classes.btn2} style={{ textTransform: 'capitalize' }} onClick={saveData}>Save</Button></div>
                    </div>
                </Box>
            </Modal>
            </Box>
        </div>
    )
}

export default Tabularview
