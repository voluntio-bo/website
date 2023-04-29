import { Box } from "@mui/material";
import Typography from '@mui/material/Typography';
import ProfileCard from "../components/ProfileCard";
import SocialMediaIcons from "../components/SocialMediaIcons";
function OrganizationView({misionText,visionText}) {
  misionText = "Best Buddies International es una organización sin fines de lucro 501(c)(3) dedicada a establecer un movimiento mundial de voluntarios que crea oportunidades para amistades individuales, empleo integrado, desarrollo de liderazgo y una vida inclusiva para las personas con discapacidad intelectual y de desarrollo (DDI)."
  visionText = "Para poner a Best Buddies fuera del negocio. Best Buddies prevee un mundo donde las personas con DDI se integren con tanto éxito en las escuelas, lugares de trabajo y comunidades que sus esfuerzos y servicios actuales serán innecesarios. Hasta que esa visión se convierta en realidad, la organización continuará educando a estudiantes de secundaria, preparatoria y universidad, miembros de la comunidad, corporaciones y empleadores sobre las necesidades emocionales, funcionales y naturales y las habilidades de las personas con IDD."
  

  const sxTypography = {
    borderRadius: '10px',
    border : '1px solid lightgray',
    margin:"15px",
    width : '80%',
    p :"20px"
  };
  
  return (
    <Box sx={{display: 'flex',justifyContent: 'center',paddingTop:4}}>
      <ProfileCard></ProfileCard>

        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            marginBottom: "25px",
            marginLeft: "50px"
              }}
            >

              <Typography variant="h6" color="#FF8324">
                Misión
              </Typography>

              <Typography variant="body5" sx={ sxTypography} >
                {misionText}
              </Typography>
              
              <Typography variant="h6" color="#FF8324">
                Visión
              </Typography>
              <Typography variant="body5" sx={sxTypography} >
                {visionText}
              </Typography>
              <Typography variant="h6" color="#FF8324" >
                Visita nuestras redes sociales
              </Typography>
              <SocialMediaIcons></SocialMediaIcons>
        </Box>

    </Box>
  );
}

export default OrganizationView;