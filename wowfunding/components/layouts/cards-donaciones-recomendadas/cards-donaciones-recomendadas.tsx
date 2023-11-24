import React from 'react'
import LandingTitles from '../ui/landing-titles'
import { Button, Grid } from '@mui/material'
import MediaCard from '../ui/media-card'
import { ProyectoFinal } from 'interfaces/proyect.type';


interface Props {
    listaProyectos: ProyectoFinal[]
}

const CardsLanding = ({listaProyectos}: Props) => {
  const proyectosLimitados = listaProyectos.slice(0, 4);
    return (
        <>
            <LandingTitles smallTitle='Explora nuestros proyectos' title={"Proyectos recientes"} color={"black"} />
            <Grid container gap={4} justifyContent="center" alignItems="center" marginBottom={3}>
                {proyectosLimitados.map((card, index) =>
                    <MediaCard
                        key={index}
                        proyecto={card}
                        widthParam={false}
                    />
                )}
            </Grid>
            {/* <Grid sx={{display:"flex"}} marginTop={3} justifyContent={"center"}>
                <Button variant={"contained"}>Ver mas</Button>
            </Grid> */}
        </>
    )
}

export default CardsLanding