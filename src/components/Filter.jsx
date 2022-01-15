import React, { useState, Fragment, useEffect } from "react";
import {
    Grid,
    Card,
    CardActionArea,
    CardMedia,
    makeStyles,
    CardContent,
    Typography,
    Box,
    FormControl,
    InputLabel,
    Select,
    Checkbox,
    FormGroup,
    FormControlLabel,
    TextField
  } from "@material-ui/core";
import '../App.css'

const NFT = [
    { app: "metaverse" },
    { app: "merchandise" },
  ];



const Filter = (props) => {

    const [app, setApp] = useState([]);
    const [filteredApp, setFilteredApp] = useState([]);

    const handleChange = e => {
        if (e.target.checked) {
            setApp([...app, e.target.value]);
        } else {
            setApp(app.filter(id => id !== e.target.value));
        }
    };

    useEffect(() => {
        if (app.length === 0) {
          setFilteredApp(props.collections);
        } else {
          setFilteredApp(
            props.collections.filter(nft =>
              app.some(category => [nft.app].flat().includes(category))
            )
          );
        }
      }, [app]);

    return (
        // <div className="Filter"> 
           
        // </div>
        <Fragment>
            <TextField value={app} fullWidth onChange={handleChange} />
            <FormControl>
                <FormGroup>
                {NFT.map(nft => (
                    <FormControlLabel
                    control={<Checkbox onChange={handleChange} />}
                    label={nft.app}
                    value={nft.app}
                    />
                ))}
                </FormGroup>
            </FormControl>

            {filteredApp.map((NFT, index) => (
                <Card style={{ background: "lightgreen", marginBottom: "5px" }}>
                <Typography gutterBottom variant="h6" noWrap>
                    name: {NFT.name}
                </Typography>
                <Typography gutterBottom variant="h6" noWrap>
                    app: {NFT.app}
                </Typography>
                </Card>
            ))}
        </Fragment>
    )
}

export default Filter

