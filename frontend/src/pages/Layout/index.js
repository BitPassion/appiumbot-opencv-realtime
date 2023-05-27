import { Drawer, Fab, makeStyles } from '@material-ui/core';
import { useState } from 'react';
import SideBarCom from '../../components/SideBarCom';

import LogoImg from '../../assets/logo.png';
import MenuImg from '../../assets/menu.png';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'rgba(0,0,0,0)',
  },
}));

function Layout({ children = <></> }) {
  const classes = useStyles();
  const [state, setState] = useState({
    isSideBar: false,
  });
  return (
    <>
      <div class='grid grid-cols-12 gap-4'>
        <div class='hidden md:col-span-3 md:inline'>
          <SideBarCom />
        </div>
        <div class='col-span-12 md:col-span-9'>
          <div className='md:hidden p-3 flex items-center justify-between'>
            <img className='w-36' src={LogoImg} alt='logo' />
            <Fab
              onClick={() => setState((pre) => ({ ...pre, isSideBar: true }))}
              className={classes.root}
              size='small'
            >
              <img src={MenuImg} className='w-6' alt='menu' />
            </Fab>
          </div>
          {children}
        </div>
      </div>
      <Drawer
        anchor={'left'}
        open={state?.isSideBar}
        onClose={() => setState((pre) => ({ ...pre, isSideBar: false }))}
      >
        <SideBarCom />
      </Drawer>
    </>
  );
}

export default Layout;
