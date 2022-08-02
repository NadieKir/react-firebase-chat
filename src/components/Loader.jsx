import React from 'react'
import { Button, Container, Grid, Box } from '@mui/material';

function Loader() {
  return (
    <Container>
      <Grid container
        style={{ height: window.innerHeight - 50 }}
        alignItems={"center"}
        justify={"center"}
      >
        <Grid
          container
          alignItems={"center"}
          direction={"column"}
        >
          <div className="lds-hourglass"></div>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Loader