import React from 'react'
import Grid from "@material-ui/core/Grid";
import { Container, Typography, Button, TextField, Checkbox } from "@material-ui/core";
import ImageListExample from "../components/Custom/ImageListExample";
import FormControlLabel from '@mui/material/FormControlLabel';

const Profile = () => {
    return (
    <Container>
      <Grid container direction={"row"} spacing={8}>
        <Grid item xs={6}>
          <MainContent />
        </Grid>
        <Grid item xs={6}>
          <SideContent />
        </Grid>
      </Grid>
    </Container>
    )
}

const MainContent = () => {
  return (
    <Grid container direction={"column"} spacing={4}>
      <Grid item>
        <Section title={"Your Wallet Address"}>
          <TextField id="outlined-basic" label="" variant="outlined" fullWidth />
        </Section>
      </Grid>
      <Grid item>
        <Section title={"Display Name"}>
          <TextField id="outlined-basic" label="" variant="outlined" fullWidth />
        </Section>
      </Grid>
      <Grid item>
        <Section title={"Email"}>
          <TextField id="outlined-basic" label="" variant="outlined" fullWidth />
        </Section>
      </Grid>
      <Grid item>
        <Section title={"Personal Webpage"}>
          <TextField id="outlined-basic" label="" variant="outlined" fullWidth/>
        </Section>
      </Grid>
      <Grid item>
        <Section title={"Description"}>
          <TextField
            id="outlined-multiline-flexible"
            variant={"outlined"}
            multiline
            rows={6}
            fullWidth
          />
        </Section>
      </Grid>

      <Grid item>
      <Section title={"Do you want to be a designer?"}>
          <FormControlLabel control={<Checkbox defaultChecked />} label="Yes" />
      </Section>
      </Grid>
    </Grid>
  );
};

const SideContent = () => {
  return (
    <Grid container direction={"column"} spacing={4}>
      <Grid item>
        <Section title={"Choose your avatar"}>
          <ImageListExample />
        </Section>
      </Grid>
      <Grid item>
        <Grid container direction={"row"} spacing={2} xs={12}>
          <Grid item xs={6}>
            <Button variant={"contained"} color={"secondary"} fullWidth>
              Cancel
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button variant={"contained"} color={"primary"} fullWidth>
              Submit
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};


const Section = ({ title, children }) => {
  return (
    <Grid container direction={"column"} spacing={2}>
      <Grid item>
        <Typography variant={"h5"}>{title}</Typography>
      </Grid>
      <Grid item>{children}</Grid>
    </Grid>
  );
};

export default Profile
