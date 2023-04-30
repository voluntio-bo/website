import Typography from '@mui/material/Typography';
import { Box } from "@mui/material";
import MyChip from ".././components/chip";
import BasicTextFields from '../components/textField';
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
  organizationId : ''
}

function CreateEvent() {

  const navigate = useNavigate();
  const {organizationId} = useParams()
  var url = "https://voluntio-api.azurewebsites.net/api/events/Form"

  const [formEvent, setformEvent] = useState([eventDetails])

  const handleInputChange = (e) => {
    console.log("form: ", formEvent )
    const { name, value } = e.target
    setformEvent({
        ...formEvent,
        [name]: value
    })
  }

  // Con la implementacion de antes  
  const handleDateChange = (date) => {
    var month  = String(date.$d).split(' ')[1]
    month = date.toDate().getMonth() + 1;
    var dateFormated = date.$D + "/" + month + "/" + date.$y
    setformEvent({
        ...formEvent,
        ["eventDate"]: dateFormated
    })
    console.log("form: ", formEvent )
  };

  function handleFormSubmit() {
    formEvent.organizationId = 2
    var FormData = require('form-data');
    var data = new FormData();
    data.append('eventType', formEvent.eventType );
    data.append('description', formEvent.description);
    data.append('name', formEvent.name);
    data.append('startTime', formEvent.startTime);
    data.append('organizationId', formEvent.organizationId);

    axios.post(url, data)
      .then(function (response) {
        if (response.status == 201){
            navigate("/organizacion");
        }
      })
      .catch(function (error) {
        if (error.response){
            if (error.response.status == 400 )
                console.log("Something happend, the event was not created")
        }
      });
  }

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
     <BasicTextFields name="description" value={formEvent.description} handleInputChange={handleInputChange}></BasicTextFields>
     <h2>Nombre del Evento</h2>
     <BasicTextFields  name="name" value={formEvent.name} handleInputChange={handleInputChange}></BasicTextFields>
     <h2>Fecha</h2>
    <input
        name="eventDate"
        type="date"
        value={formEvent.eventDate}
        onChange={handleInputChange}
        style={{ marginLeft: '10px',width: '20%', height: '60px'}}
    ></input>

     <h2>Duración</h2>
     <BasicTextFields name="endTime" value={formEvent.endTime} handleInputChange={handleInputChange} ></BasicTextFields>
     <Box sx={{ display: 'flex', justifyContent: 'center', paddingTop: 4, paddingBottom: 4}}>
    <BasicButtons color="green" text="Enviar" onClick={handleFormSubmit} />
  </Box>
    </Typography>
    </Box>
  );
}

export default CreateEvent;