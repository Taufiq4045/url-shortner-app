import React,{useContext,useEffect} from 'react'
import { useHistory } from 'react-router'
import { userContext } from '../../Context/AuthProvider'
import ShortnerForm from './ShortnerForm'
function Shortner() {
    // eslint-disable-next-line no-unused-vars
    const {loggedIn,setLoggedIn,getLoggedInState} = useContext(userContext)
    const history = useHistory()
    useEffect(() => {
        getLoggedInState()
        return () => {
            <></>
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div className= 'container-fluid' style= {{color : 'rgb(97, 15, 89)'}}>
        {
            loggedIn 
            ?
            <>
                <ShortnerForm />
            </>
            :
            <>
                <button onClick = {()=> history.push('/login')} className = 'btn btn-success'>Login to continue</button>
            </>
        }
        </div>
    )
}

export default Shortner