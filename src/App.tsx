import React, { useState } from 'react';
import './index.css'
import generatePassword from './Functions';
import { Card, 
  Switch, 
  FormGroup, 
  FormControlLabel, 
  Slider, 
  TextField, 
  Button, 
} from '@mui/material';

function App() {
  const minLength = 5;
  const maxLength = 20;
  const defaultLength = 12

  const [length, setLength] = useState<number>(defaultLength)
  const [lowercase, setLowercase] = useState<boolean>(true)
  const [uppercase, setUppercase] = useState<boolean>(true)
  const [numbers, setNumbers] = useState<boolean>(true)
  const [symbols, setSymbols] = useState<boolean>(true)
  const [password, setPassword] = useState<string>(generatePassword(lowercase, uppercase, numbers, symbols, length))

  //Input handling functions
  const handleSliderChange = (event: Event, newLength: number|number[]) => {
    setLength(newLength as number)
  }
  
  const handleCounterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const valueString: string = event.target.value
    const valueInt: number = Number(valueString)
    if(!Number.isNaN(valueInt) && valueInt >= minLength && valueInt <= maxLength) {
      setLength(valueInt)
    }
  }

  const handleLowercaseSwitch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLowercase(event.target.checked)
  }

  const handleUppercaseSwitch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUppercase(event.target.checked)
  }

  const handleNumbersSwitch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNumbers(event.target.checked)
  }

  const handleSymbolsSwitch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSymbols(event.target.checked)
  }

  const handleGeneratePassword = () => {
    setPassword(generatePassword(lowercase, uppercase, numbers, symbols, length))
  }

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
        <FormGroup
        sx = {{
          padding: '2rem'
        }}
        >
          <h3>Options</h3>
          <div className='switch-container'>
            <FormControlLabel 
            control={<Switch 
              checked={lowercase}
              onChange={handleLowercaseSwitch} 
              data-testid="lowerSwitch" />} 
            label="Lowercase" 
            labelPlacement='start' />
            <FormControlLabel 
            control={<Switch 
              checked={uppercase}
              onChange={handleUppercaseSwitch} 
              data-testid="upperSwitch" />} 
            label="Uppercase" 
            labelPlacement='start' />
            <FormControlLabel 
            control={<Switch 
              checked={numbers}
              onChange={handleNumbersSwitch} 
              data-testid="numbersSwitch" />} 
            label="Numbers" 
            labelPlacement='start' />
            <FormControlLabel 
            control={<Switch 
              checked={symbols}
              onChange={handleSymbolsSwitch} 
              data-testid="symbolsSwitch" />} 
            label="Symbols" 
            labelPlacement='start' />
          </div>
          <h3>Length</h3>
          <FormControlLabel 
          control={<Slider
            value={length}
            onChange={handleSliderChange}
            min = {minLength}
            max = {maxLength}
            step = {1}
            marks
            valueLabelDisplay = "auto"
            aria-label = "Password length" 
            sx = {{
              width: "90%",
              margin: "0 auto"
            }}
            />}
          sx = {{
            margin: 0
          }} 
          label={<TextField
            type = "number"
            value = {length}
            onChange = {handleCounterChange}
            size = 'small'
            sx = {{
              marginRight: '1rem',
              width: '75px'
            }}
            />}
          labelPlacement="start" />
          <h3>Generated Password</h3>
          <TextField 
            id = "outlined-basic" 
            variant = "outlined" 
            value = {password} 
            InputProps = {{
              readOnly: true,
            }}
            aria-readonly />
          <Button 
          variant = "contained"
          onClick={handleGeneratePassword}
          sx = {{
            width: '120px',
            margin: '1rem auto 0',
          }}>
            Generate
          </Button>
        </FormGroup>
      </Card>
    </div>
  );
}

export default App;
