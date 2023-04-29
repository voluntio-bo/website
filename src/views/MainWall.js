import { Box } from "@mui/system";
import Wall from "../components/Wall";
import { useParams } from 'react-router-dom'
import axios from "axios";
import React , { useState , useEffect} from 'react';

function MainWall(){
    const urlEvents = "https://voluntio-api.azurewebsites.net/api/events"
    const [events, setEvents] = useState([])
    
    const fetchEventsData = () => {
        var responseOrganizationData = axios(urlEvents);
        axios.all([responseOrganizationData]).then(
            axios.spread((...allData) => {
                var dataBK = allData[0].data
                setEvents(dataBK)
            })
    )}
    useEffect(() => { 
        fetchEventsData();
    }, [])

    // let events = [
    //     {"name":"Nombre 1","description":"Description"},
    //     {"name":"Nombre 2","description":"Description"}
    // ]
    return (
        <Box sx={{display:'flex', flexDirection:'column', alignItems:'center'}}>
            <Box sx={{width:{sm:0.9,xs:0.9,md:0.55}}}>
                <Wall events={events}/>
            </Box>
        </Box>
    );
}
export default MainWall;