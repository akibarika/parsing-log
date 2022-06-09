import React, {useState} from 'react';
import DataTable from './components/DataTable';
import {Box, Button, Container, Input, Stack, styled} from '@mui/material';
import DataAnalytics from './components/DataAnalytics';

const App = () => {
  const [data, setData] = useState([])
  const Input = styled('input')({
    display: 'none',
  });

  const changeHandler = (event) => {
    event.preventDefault()
    const reader = new FileReader()
    reader.onload = async (e) => {
      const text = (e.target.result)
      let lines = text.trim().split('\n')
        .map((line) => {
          return line.split(' ')
        });
      lines = lines.map(function (d) {
        return {
          ip: d[0],
          time: d[3] + d[4],
          URL: d[6],
        };
      });
      setData(lines)
      console.log(lines)
    };
    reader.readAsText(event.target.files[0])
  };
  return (
    <>
      <Container maxWidth="sm">
        <Box sx={{width: '100%'}}>
          <Stack spacing={2}>
            <label htmlFor="contained-button-file">
              <Input accept=".log" id="contained-button-file" multiple type="file" onChange={changeHandler}/>
              <Button variant="contained" component="span">
                Upload your log file here
              </Button>
            </label>
          </Stack>
          <DataAnalytics data={data}/>
          <DataTable data={data}/>
        </Box>
      </Container>
    </>

  );
};

export default App;
