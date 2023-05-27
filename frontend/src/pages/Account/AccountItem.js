import { FormControlLabel, FormGroup, Switch } from '@material-ui/core';
import SettingImg from '../../assets/setting.png';
import DeleteImg from '../../assets/delete.png';

function AccountItem({ onEdit = () => {}, data={} }) {
  return (
    <div className='p-3 w-full grid grid-cols-12 items-center bg-side rounded-md text-base'>
      <div className='col-span-1 break-all'>{data?.index}</div>
      <div className='col-span-6 break-all'>{data?.name}</div>
      <div className='col-span-3 break-all'>
        <FormGroup>
          <FormControlLabel
            control={<Switch defaultChecked color='primary' />}
            label='On'
          />
        </FormGroup>
      </div>
      <div className='col-span-2 break-all flex justify-end items-center'>
        <img
          onClick={onEdit}
          className='w-5 cursor-pointer ml-1'
          src={SettingImg}
          alt='setting'
        />
        <img className='w-5 cursor-pointer ml-1' src={DeleteImg} alt='delete' />
      </div>
    </div>
  );
}

export default AccountItem;
