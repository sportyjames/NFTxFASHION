import React from "react";
import Grid from "@material-ui/core/Grid";
import { Container, Typography, Button, TextField } from "@material-ui/core";
import ImageListExample from "../components/Custom/ImageListExample";

const DesignerPortfolio = ({ }) => {
  return (
    <Container>
      <Grid container direction={"row"} spacing={2}>
        <Grid item xs={8}>
          <MainContent />
        </Grid>
        <Grid item xs={4}>
          <SideContent />
        </Grid>
      </Grid>
    </Container>
  );
};

const MainContent = () => {
  return (
    <Grid container direction={"column"} spacing={4}>
      <Grid item>
        <Section title={"Area of Expertise"}>
          <Grid container direction={"row"} spacing={2}>
            <Grid container direction={"row"} spacing={2}>
              {[
                "Metaverse Virtual Applicable NFT",
                "Merchandise Physical Products",
              ].map((elem) => (
                <Grid item>
                  <Button variant="contained">{elem}</Button>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Section>
      </Grid>
      <Grid item>
        <Section title={"Artwork Type"}>
          <Grid container direction={"row"} spacing={2}>
            {["Clothes", "Pants", "Sneakers", "Accessories"].map((elem) => (
              <Grid item>
                <Button variant="contained">{elem}</Button>
              </Grid>
            ))}
          </Grid>
        </Section>
      </Grid>
      <Grid item>
        <Section title={"About me"}>
          <TextField
            id="outlined-multiline-flexible"
            variant={"outlined"}
            multiline
            rows={6}
            fullWidth
          />
        </Section>
      </Grid>
    </Grid>
  );
};

const SideContent = () => {
  return (
    <Grid container direction={"column"} spacing={4}>
      <Grid item>
        <Section title={"Showcase my artwork to buyer"}>
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

export default DesignerPortfolio;
