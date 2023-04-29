import { Box } from "@mui/system";
import Wall from "../components/Wall";
function MainWall(){
    let events = [
        {"name":"Nombre 1","description":"Description"},
        {"name":"Nombre 2","description":"Description"}
    ]
    return (
        <Box sx={{display:'flex', flexDirection:'column', alignItems:'center'}}>
            <Box sx={{width:{sm:0.9,xs:0.9,md:0.55}}}>
                <Wall events={events}/>
            </Box>
        </Box>
    );
}
export default MainWall;