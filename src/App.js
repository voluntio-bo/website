import EventCard from "./components/EventCard";
import { Box } from "@mui/material";
function App() {
  return (
    <Box sx={{display: 'flex',justifyContent: 'center',paddingTop:4}}>
    <EventCard message={"BUG : series assignment with a boolean indexer AND a series as a value would give incorrect results"}/>
    </Box>
  );
}

export default App;
