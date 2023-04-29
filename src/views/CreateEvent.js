import Typography from '@mui/material/Typography';
import { Box } from "@mui/material";
import MyChip from ".././components/chip";
import BasicTextFields from '../components/textField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import BasicButtons from ".././components/Button";
function CreateEvent() {
  return (
    <Box sx={{justifyContent: 'center',paddingTop:4,}}>
    <Typography variant="h6" sx={{marginTop: '7px', textAlign: 'center'}}>
        <h1>Crear Evento</h1>
    </Typography>
    <Typography variant="h7" sx={{marginTop: '7px', justifyContent: 'rigth'}}>
     <h2>Tipo de Evento</h2>
     <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center',justifyContent: 'center'}}>
  <MyChip label="Interacción Humana" src="https://img.europapress.es/fotoweb/fotonoticia_20150331134913-15031252339_400.jpg" />
  <MyChip label="Construcción" src="https://img.europapress.es/fotoweb/fotonoticia_20150331134913-15031252339_400.jpg" />
  <MyChip label="Interacción Humana" src="https://img.europapress.es/fotoweb/fotonoticia_20150331134913-15031252339_400.jpg" />
  <MyChip label="Cuidado animal" src="https://img.europapress.es/fotoweb/fotonoticia_20150331134913-15031252339_400.jpg" />
  <MyChip label="Ambiental" src="https://img.europapress.es/fotoweb/fotonoticia_20150331134913-15031252339_400.jpg" />
  <MyChip label="Recaudación de fondos" src="https://img.europapress.es/fotoweb/fotonoticia_20150331134913-15031252339_400.jpg" />
  <MyChip label="Salud" src="https://img.europapress.es/fotoweb/fotonoticia_20150331134913-15031252339_400.jpg" />
  <MyChip label="Recaudación de viveres" src="https://img.europapress.es/fotoweb/fotonoticia_20150331134913-15031252339_400.jpg" />
  <MyChip label="Otros" src="https://img.europapress.es/fotoweb/fotonoticia_20150331134913-15031252339_400.jpg" />
</Box>

     <h2>Descripcion breve</h2>
     <BasicTextFields></BasicTextFields>
     <h2>Nombre del Evento</h2>
     <BasicTextFields></BasicTextFields>
     <h2>Fecha</h2>
     <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker />
    </LocalizationProvider>
     <h2>Duración</h2>
     <BasicTextFields></BasicTextFields>
     <Box sx={{ display: 'flex', justifyContent: 'center', paddingTop: 4, paddingBottom: 4}}>
    <BasicButtons color="green" text="Enviar" />
  </Box>
    </Typography>
    </Box>
  );
}

export default CreateEvent;