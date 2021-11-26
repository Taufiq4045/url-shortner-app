import React,{useState,useContext,useEffect} from 'react'
import { useHistory } from 'react-router'
import { userContext } from '../../Context/AuthProvider'
import ScaleLoader from "react-spinners/ClipLoader";
import GetYearlyData from './GetYearlyData'
import DisplayYearlyChart from './YearlyChartPage';
import GetMonthlyData from './GetMonthlyData';
import DisplayMonthlyChart from './MonthlyChartPage';

// export const userData = React.createContext();
function Dashboard() {
    const {loggedIn,getLoggedInState,user} = useContext(userContext)
    const [flag,setFlag] = useState(true);
    const history = useHistory()
    //Yearly states
    const [data,setData] = useState(undefined)
     const [labels,setlabels] = useState(undefined)
     const [year,setYear] = useState(undefined)
    //Monthly states
    const [m_data,setm_data] = useState(undefined)
    const [m_labels,setm_labels] = useState(undefined)
    const [m_month, setm_month] = useState(undefined)
    const [m_year,setm_year] = useState(undefined)
    
    const Yearly = (yearlydata,year) => {
        setData(Object.values(yearlydata));
        setlabels(Object.keys(yearlydata))
        setYear(year)
    }

    const Monthly = (Monthlydata,month,year) =>{
        setm_data(Object.values(Monthlydata));
        setm_labels(Object.keys(Monthlydata))
        setm_month(month)
        setm_year(year)
    }
    useEffect(() => {
        getLoggedInState()
        setFlag(false);
        return () => {
            <></>
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
        {
            flag 
            ? 
            <div className="container-fluid center-content mt-4">
                <ScaleLoader color="blue" loading={flag} height = '35' width = '4' radius = '2' margin='2' />
            </div>
            :
            <>
                {
                    loggedIn 
                    ?
                    <>
                    <div className="container-fluid mt-3 authsetting" style={{color : 'rgb(97, 15, 89)'}}>
                    <p>Hello <strong className='text-capitalize'>{`${user}`}</strong>, Welcome Back!</p>

                    <div className = 'display-6'>
                        <div className = 'row'>
                            <div className = 'col-sm-12 col-md-4 col-lg-6 center-content display_graph'>
                                <GetYearlyData Yearly = {Yearly} />
                                <p className = 'pt-4 text-white'>Get an visual data of how many URL's created on each month</p>
                            </div>
                            <div className = 'col-sm-12 col-md-8 col-lg-6 center-content display_image'>
                                {
                                    data !== undefined && labels !== undefined && year !== undefined
                                    ?
                                    <>
                                    <DisplayYearlyChart /> 
                                    </>
                                    :
                                    <>
                                    <h4>Select appropriate Year to view Data</h4>
                                    </>
                                }
                            </div>
                        </div>
                        <div className = 'row'>
                        <div className = 'col-sm-12 col-md-4 col-lg-6 center-content display_graph'>
                                <GetMonthlyData Monthly = {Monthly} />
                                <p className = 'pt-4 text-white'>Get an visual data of how many URL's created on each day</p>
                            </div>
                            <div className = 'col-sm-12 col-md-8 col-lg-6 center-content display_image pb-3'>
                                {
                                    m_data !== undefined && m_labels !== undefined && m_month !== undefined && m_year !== undefined
                                    ?
                                    <>
                                    <DisplayMonthlyChart monthlydata = {m_data} labels = {m_labels} year = {m_year} />
                                    </>
                                    :
                                    <>
                                    <h4>Select appropriate Year and Month to view Data</h4>
                                    </>
                                }
                            </div>
                        </div>
                    </div>
                    </div>
                    
                    </>
                    : 
                    <>
                    <button onClick = {()=> history.push('/login')} className = 'btn btn-success'>Login to continue</button>
                    </>
                }
            </>
        }
        </>
    )
}

export default Dashboard