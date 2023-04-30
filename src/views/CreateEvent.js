import Typography from '@mui/material/Typography';
import { Box } from "@mui/material";
import MyChip from ".././components/chip";
import BasicTextFields, {DateText} from '../components/textField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import BasicButtons from ".././components/Button";

import axios from 'axios'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const eventDetails = {
    eventType: '',
    description: '',
    name: '',
    eventDate: '',
    startTime: '',
    endTime: '',
    Image: '',
    organizationId: ''
}

function CreateEvent() {

    const navigate = useNavigate();
    const { organizationId } = useParams()
    var url = "https://voluntio-api.azurewebsites.net/api/events/Form"

    const [formEvent, setformEvent] = useState([eventDetails])

    const handleInputChange = (e) => {
        console.log("form: ", formEvent)
        const { name, value } = e.target
        setformEvent({
            ...formEvent,
            [name]: value
        })
    }

    // Con la implementacion de antes  
    const handleDateChange = (date) => {
        var month = String(date.$d).split(' ')[1]
        month = date.toDate().getMonth() + 1;
        var dateFormated = date.$D + "/" + month + "/" + date.$y
        setformEvent({
            ...formEvent,
            ["eventDate"]: dateFormated
        })
        console.log("form: ", formEvent)
    };

    function handleFormSubmit() {
        formEvent.organizationId = 2
        var FormData = require('form-data');
        var data = new FormData();
        data.append('eventType', formEvent.eventType);
        data.append('description', formEvent.description);
        data.append('name', formEvent.name);
        data.append('startTime', formEvent.startTime);
        data.append('organizationId', formEvent.organizationId);

        axios.post(url, data)
            .then(function (response) {
                if (response.status == 201) {
                    navigate("/organizacion");
                }
            })
            .catch(function (error) {
                if (error.response) {
                    if (error.response.status == 400)
                        console.log("Something happend, the event was not created")
                }
            });
    }

    return (
        <Box
            sx={{
                position: 'absolute',
                top: '74%',
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
                    <BasicTextFields name="description" value={formEvent.description} handleInputChange={handleInputChange}></BasicTextFields>
                    Nombre del Evento
                    <BasicTextFields name="name" value={formEvent.name} handleInputChange={handleInputChange}></BasicTextFields>
                    Fecha
                    <DateText name="eventDate" value={formEvent.eventDate} handleInputChange={handleInputChange} ></DateText>
                    Duración
                    <br></br><BasicTextFields name="endTime" value={formEvent.endTime} handleInputChange={handleInputChange} ></BasicTextFields>
                    <Box sx={{ display: 'flex', justifyContent: 'center', paddingTop: 4 }}>
                        <BasicButtons color="green" text="Enviar" onClick={handleFormSubmit} />
                    </Box>
                </Typography>
            </Box>

            </Box>
            );
}

            export default CreateEvent;