import { Box } from "@mui/material";
import Typography from '@mui/material/Typography';

function OrganizationView() {
  return (
    <Box sx={{display: 'flex',justifyContent: 'center',paddingTop:4}}>
     <Typography variant="body2" color="text.secondary">
            Vista para organización
        </Typography>
    </Box>
  );
}

export default OrganizationView;