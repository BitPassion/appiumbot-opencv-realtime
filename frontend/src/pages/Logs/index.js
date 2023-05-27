import { useState } from 'react';
import Layout from '../Layout';
import {
  FormControl,
  InputLabel,
  OutlinedInput,
  Select,
  MenuItem,
} from '@material-ui/core';

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

function Logs() {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <Layout>
      <div className='text-white pt-36 px-10 md:px-20 font-normal text-xl'>
        <div
          style={{ maxHeight: '480px' }}
          className='bg-side rounded-md p-6 mb-6 overflow-auto'
        >
          <p className='mt-3'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <p className='mt-3'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <p className='mt-3'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <p className='mt-3'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <p className='mt-3'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <p className='mt-3'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <p className='mt-3'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <p className='mt-3'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <p className='mt-3'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <p className='mt-3'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <p className='mt-3'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <p className='mt-3'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <p className='mt-3'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <p className='mt-3'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <p className='mt-3'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <p className='mt-3'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <p className='mt-3'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <p className='mt-3'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <p className='mt-3'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <p className='mt-3'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <p className='mt-3'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <p className='mt-3'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <p className='mt-3'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <p className='mt-3'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <p className='mt-3'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <p className='mt-3'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <p className='mt-3'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <p className='mt-3'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <p className='mt-3'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <p className='mt-3'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <p className='mt-3'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <p className='mt-3'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <p className='mt-3'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <p className='mt-3'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <p className='mt-3'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <FormControl className='w-48' variant='outlined'>
          <InputLabel id='select-label'>Account</InputLabel>
          <Select
            labelId='select-label'
            id='select-outlined'
            value={selectedOption}
            onChange={handleChange}
            input={<OutlinedInput label='Select an option' />}
          >
            {options.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </Layout>
  );
}

export default Logs;
