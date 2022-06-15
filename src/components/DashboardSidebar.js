import React, { useEffect, createContext, useContext  } from 'react';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import PropTypes from 'prop-types';
import { Box, Divider, Drawer, Typography, useMediaQuery } from '@mui/material';
import { Selector as SelectorIcon } from '../icons/selector';
import { Logo } from './logo';
import { NavItem } from './NavItem';
import { theme } from '../theme';
import SidebarContext from './Context/SidebarContext';
import { parseJSON } from 'date-fns';


const DashboardSidebar = (props) => {
  const { open, onClose } = props;
  // console.log(theme.breakpoints.up('sm'));
  const lgUp = useMediaQuery(theme.breakpoints.up('sm'), {
    defaultMatches: true,
    noSsr: false
  });
  const items = useContext(SidebarContext);

  useEffect(
    () => {
      if (!Router.isReady) {
        return;
      }

      if (open) {
        onClose();
      }
    },[onClose, open]
  );
  const user = JSON.parse(localStorage.getItem('user'))
  console.log(user.name);
  const content = (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%'
        }}
      >
        <div>
          <Box sx={{ p: 3 }}>
            <Link
              to="/"
            >
                <Logo
                  sx={{
                    height: 42,
                    width: 42
                  }}
                />
            </Link>
          </Box>
          <Box sx={{ px: 2 }}>
            <Box
              sx={{
                alignItems: 'center',
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'space-between',
                px: 3,
                py: '11px',
                borderRadius: 1
              }}
            >
              <div>
                <Typography
                  color="inherit"
                  variant="subtitle1"
                >
                  POS by {user.name}
                </Typography>
                <Typography
                  color="neutral.400"
                  variant="body2"
                >
                  User
                  {' '}
                  : Admin
                </Typography>
              </div>
              <SelectorIcon
                sx={{
                  color: 'neutral.500',
                  width: 14,
                  height: 14
                }}
              />
            </Box>
          </Box>
        </div>
        <Divider
          sx={{
            borderColor: '#2D3748',
            my: 3
          }}
        />
        <Box sx={{ flexGrow: 1 }}>
          {items.map((item) => (
           
            <NavItem
              key={item.title}
              icon={item.icon}
              href={item.href}
              title={item.title}
              submenu={item.submenu}
              sublink={item.sublink}
            />
       
          ))}
        </Box>
        <Divider sx={{ borderColor: '#2D3748' }} />
        
        </Box>
    </>
  );

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: 'neutral.900',
            color: '#FFFFFF',
            width: 280
          }
        }}
        variant="permanent"
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: 'neutral.900',
          color: '#FFFFFF',
          width: 280
        }
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant="temporary"
    >
      {content}
    </Drawer>
  );
};

DashboardSidebar.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool
};
export default DashboardSidebar;