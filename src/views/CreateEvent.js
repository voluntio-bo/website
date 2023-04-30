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
        <Box
            sx={{
                position: 'absolute',
                top: '70%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '110vh',
                width: '80vw',
                maxWidth: '700px',
                borderRadius: 16,
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
                padding: 4,
                border: '3px solid orange',
            }}
        >
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                maxWidth: '600px',
                
            }}>
                <Typography variant="h4" sx={{ marginTop: '7px', textAlign: 'center', fontWeight: 'bold', color: 'orange' }}>
                    Crear Evento
                </Typography>
                <Typography variant="h5" sx={{ marginTop: '7px', justifyContent: 'right', color: 'orange', marginBottom: '7px' }}>
                    Tipo de Evento
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', padding: 1, width: '100%' }}>
                        <MyChip label="Interacción Humana" src="https://www.menudoscorazones.org/wp-content/uploads/2018/09/Como-funciona-el-corazon.png" />
                        <MyChip label="Construcción" src="https://www.menudoscorazones.org/wp-content/uploads/2018/09/Como-funciona-el-corazon.png" />
                        <MyChip label="Cuidado animal" src="https://www.menudoscorazones.org/wp-content/uploads/2018/09/Como-funciona-el-corazon.png" />
                        <MyChip label="Ambiental" src="https://www.menudoscorazones.org/wp-content/uploads/2018/09/Como-funciona-el-corazon.png" />
                        <MyChip label="Recaudación de fondos" src="https://www.menudoscorazones.org/wp-content/uploads/2018/09/Como-funciona-el-corazon.png" />
                        <MyChip label="Salud" src="https://www.menudoscorazones.org/wp-content/uploads/2018/09/Como-funciona-el-corazon.png" />
                        <MyChip label="Recaudación de viveres" src="https://www.menudoscorazones.org/wp-content/uploads/2018/09/Como-funciona-el-corazon.png" />
                        <MyChip label="Otros" src="https://www.menudoscorazones.org/wp-content/uploads/2018/09/Como-funciona-el-corazon.png" />
                    </Box><br></br>
                    Descripcion breve
                    <BasicTextFields></BasicTextFields>
                    Nombre del Evento
                    <BasicTextFields></BasicTextFields>
                    Fecha
                    <br></br><LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker /><br></br>
                    </LocalizationProvider><br></br>
                    Duración
                    <br></br><BasicTextFields></BasicTextFields>
                    <Box sx={{ display: 'flex', justifyContent: 'center', paddingTop: 4 }}>
                        <BasicButtons color="green" text="Enviar" />
                    </Box>
                </Typography>
            </Box>
        </Box>
    );
}

export default CreateEvent;