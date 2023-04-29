import Typography from '@mui/material/Typography';
import { Box } from "@mui/material";

function NoPage() {
  return (
    <Box sx={{display: 'flex',justifyContent: 'center',paddingTop:4}}>
     <Typography variant="body2" color="text.secondary">
     This page does not exist :c
        </Typography>
    </Box>
  );
}

export default NoPage;