import React from 'react';
import './index.css'
import { Card, 
  Switch, 
  FormGroup, 
  FormControlLabel, 
  Slider, 
  TextField, 
  Button 
} from '@mui/material';

function App() {
  return (
    <div className="App">
      <h1>Password Generator</h1>
      <h4>
        Created by <a href="https://github.com/DeclanElk">DeclanElk</a>
      </h4>
      <Card
      sx = {{
        width: '90%',
        margin: '0 auto',
        maxWidth: '900px',
      }}>
        <FormGroup>
          <FormControlLabel control={<Switch defaultChecked />} label="Uppercase" />
          <FormControlLabel control={<Switch defaultChecked />} label="Lowercase" />
          <FormControlLabel control={<Switch defaultChecked />} label="Numbers" />
          <FormControlLabel control={<Switch defaultChecked />} label="Symbols" />
          <Slider
            defaultValue = {15}
            min = {5}
            max = {30}
            step = {1}
            marks
            valueLabelDisplay = "auto"
            aria-label = "Password length" 
            sx = {{
              width: "90%",
              margin: "0 auto"
            }}
          />
          <TextField 
            id = "outlined-basic" 
            variant = "outlined" 
            value = {"test val"} 
            InputProps = {{
              readOnly: true,
            }}
            aria-readonly />
          <Button>Generate</Button>
        </FormGroup>
      </Card>
    </div>
  );
}

export default App;
