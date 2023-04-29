import { Box } from "@mui/material";
import Reaction from './components/Reaction';
import NavBar from './components/NavBar';
import EventCard from './components/EventCard';
function App() {
  return (
    <Box sx={{display: 'flex',justifyContent: 'center',paddingTop:4}}>
     <EventCard></EventCard>
    </Box>
  );
}

export default App;
