import { Box } from "@mui/system";
import Wall from "../components/Wall";
function MainWall(){
    let events = [
        {"name":"Nombre 1","description":"Description"},
        {"name":"Nombre 2","description":"Description"}
    ]
    return (
        <Box sx={{display:'flex', alignItems:'center'}}>
            <Wall events={events}/>
        </Box>
    );
}
export default MainWall;