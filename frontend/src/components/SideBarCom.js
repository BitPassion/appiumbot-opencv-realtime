import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import DocImg from '../assets/document.png';
import LogImg from '../assets/log.png';
import LogoImg from '../assets/logo.png';
import RefreshImg from '../assets/refresh.png';
import UserImg from '../assets/user.png';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    textTransform: 'none',
    display: 'flex',
    justifyContent: 'start',
  },
});

function SideBarCom() {
  const history = useNavigate();
  const classes = useStyles();
  return (
    <div className='p-8 bg-side h-screen relative'>
      <img onClick={() => history('/dashboard')} className='w-36 cursor-pointer' src={LogoImg} alt='logo' />
      <div className='mt-28 relative'>
        <Button
          onClick={() => history('/account')}
          classes={{ root: classes.root }}
          variant='text'
          className='absolute bottom-9 w-full flex justify-start items-center cod-button p-3 MuiListItem-button'
        >
          <img src={UserImg} alt='user' />
          <p className='pl-3 text-white text-base md:text-xl'>Accounts</p>
        </Button>
        <div className='mb-4'></div>
        <Button
          onClick={() => history('/logs')}
          classes={{ root: classes.root }}
          variant='text'
          className='absolute bottom-9 w-full flex justify-start items-center cod-button p-3 MuiListItem-button'
        >
          <img src={LogImg} alt='logs' />
          <p className='pl-3 text-white text-base md:text-xl'>Logs</p>
        </Button>
        <div className='mb-4'></div>
        <Button
          classes={{ root: classes.root }}
          variant='text'
          className='absolute bottom-9 w-full flex justify-start items-center cod-button p-3 MuiListItem-button'
        >
          <img src={DocImg} alt='documentation' />
          <p className='pl-3 text-white text-base md:text-xl'>Documentation</p>
        </Button>
      </div>
      <div className='absolute bottom-0'>
        <Button
          classes={{ root: classes.root }}
          variant='text'
          className='absolute bottom-9 w-full flex justify-start items-center cod-button p-3 MuiListItem-button'
        >
          <img src={RefreshImg} alt='documentation' />
          <p className='pl-3 text-white text-base md:text-xl'>
            Check for Updates
          </p>
        </Button>
      </div>
    </div>
  );
}

export default SideBarCom;
