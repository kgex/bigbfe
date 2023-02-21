import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { StaticDateRangePicker } from '@mui/x-date-pickers-pro';
import {Stack} from '@mui/material';

export default function PaperContentComponent() {
  const [value, setValue] = React.useState([null, null]);
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack spacing={4} alignItems="center">
        <StaticDateRangePicker
          displayStaticWrapperAs="desktop"
          onChange={(newValue) => setValue(newValue)}
          value={value}
          renderInput={() => <div/>}
          componentsProps={{ paperContent: { sx: { m: 2 }, setValue } }}/>
      </Stack>
    </LocalizationProvider>
  );
}