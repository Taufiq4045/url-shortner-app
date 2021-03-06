import axios from 'axios'
import React, { useEffect, useState,useContext } from 'react'
import TableView from './TableView'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { userContext } from '../../Context/AuthProvider';
import { SpinnerDotted } from 'spinners-react';

function URLViews() {
    // eslint-disable-next-line no-unused-vars
    const {loggedIn,setLoggedIn,getLoggedInState} = useContext(userContext)

    const [urlList,setUrlList] = useState([])
    // eslint-disable-next-line no-unused-vars
    const [flag,setFlag] = useState(true);

    const getURLs = async () => {
        const token = localStorage.getItem('authToken')
        try{
            const result = await axios.get(`https://url-shortner-bend.herokuapp.com/api/private/allurl`,
            {
                headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
                }
            })
           console.log(result.data.urls);
            setUrlList(result.data.urls)
        }catch(error){
            console.log(error);
            toast.error("Something wen't wrong", {
                position: "top-right",
                autoClose: false,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
            setLoggedIn(false);
        }
    }
    useEffect(() => {
        getURLs();
        setFlag(false);
        return () => {
            <></>
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    return (
        <div className= 'container-fluid viewssetting'>
            <ToastContainer
                position="top-right"
                autoClose={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
            />
            <h4 className='text-center text-success'>All URLS with views</h4>
            {
                urlList.length
                ?
                <TableView list = {urlList} />
                :
                <div className="viewssetting center-content mt-4" style={{height:'100%'}}>
                     <SpinnerDotted /> 
                </div>
            }
        </div>
    )
}

export default URLViews