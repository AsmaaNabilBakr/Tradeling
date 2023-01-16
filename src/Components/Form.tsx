import {
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "../App.css";

interface CountryObj {
  country: string;
  region: string;
}

function Form() {
  const List = [
    {
      country: "Algeria",
      region: "Africa",
    },
    {
      country: "Egypt",
      region: "Africa",
    },
  ];
  const [countryList, setCountryList] = useState<CountryObj[]>(List);
  const [selectedCountry, setSelectedCountry] = useState<string>();

  const handleChange = () => {};

  //   const getAllCOuntries = async () => {
  //     const List = await axios.get("https://api.first.org/data/v1/countries", {
  //       headers: {
  //         "Access-Control-Allow-Origin": "*",
  //         "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  //       },
  //     });
  //     console.log(List);
  //   };
  return (
    <Container className="section">
      <div className="form">
        <div className="field">
          <label>Company name</label>
          <TextField
            className="field-input"
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
          />
        </div>
        <div className="field">
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={countryList}
              label="Age"
              onChange={handleChange}
            >
              {countryList?.map((item) => (
                <MenuItem value={item.country} key={item.country}>
                  {item.country}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      </div>
    </Container>
  );
}

export default Form;
