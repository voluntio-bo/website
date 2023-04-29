import React from 'react'
import {
    AppBar,
    Typography,
    Toolbar
} from '@mui/material'
import logoVoluntio from '../assets/logoVoluntio_small.png'

function Navbar() {
    return (
        <AppBar sx={{ marginBottom: '60px', position: 'fixed', backgroundColor: '#FFFFFF',boxShadow: 'none',border: `1px solid lightgray` }}>
            <Toolbar>
                <Typography marginTop= '8px'>
                    <img
                        height="50"
                        width="50"
                        src={logoVoluntio}
                        alt="Logo Voluntio"
                        className="logo-img-nvar"
                    />
                </Typography>
                <Typography variant="h4" style={{ color: '#FF8324', marginLeft : '10px',marginTop : '7px', }}>Voluntio</Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar