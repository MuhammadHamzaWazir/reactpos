import React, { useContext } from 'react';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import PropTypes from 'prop-types';
import { Box, Button, ListItem } from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import StarBorder from '@mui/icons-material/StarBorder';
import SidebarContext from './Context/SidebarContext';

const Subnavitems = (props) => { 
  const titleHaveSiblinks = props.title;
  const items = useContext(SidebarContext);
  var newArray = items.filter(function (item) {    
  return item.title === titleHaveSiblinks && item.submenu === true;
  });
  const childSublinks = newArray[0].sublink;
  return (
  <>
    {
      childSublinks.map((cLink) => (
        <ListItemButton sx={{ pl: 4 }}>
          <Link to={cLink.href}>
          </Link>
          <ListItemIcon sx={{ justifyContent: 'center' }}>
        <StarBorder />
      </ListItemIcon>
      <ListItemText primary={cLink.title} />
    </ListItemButton>
      ))}
    </>
  );
  
};


export const NavItem = (props) => {
  const { href, icon, title, submenu, sublink, ...others } = props;
  const active = href ? (Router.pathname === href) : false;

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  

  if (submenu) {
    return (
      <>
    <ListItem  onClick={handleClick}
      disableGutters
      sx={{
        display: 'flex',
        mb: 0.5,
        py: 0,
        px: 2
      }}
      {...others}
    >
      <Link
        to="#"
      >
        <Button
          component="a"
          startIcon={icon}
          disableRipple
          sx={{
            backgroundColor: active && 'rgba(255,255,255, 0.08)',
            borderRadius: 1,
            color: active ? 'secondary.main' : 'neutral.300',
            fontWeight: active && 'fontWeightBold',
            justifyContent: 'flex-start',
            px: 3,
            textAlign: 'left',
            textTransform: 'none',
            width: '100%',
            '& .MuiButton-startIcon': {
              color: active ? 'secondary.main' : 'neutral.400'
            },
            '&:hover': {
              backgroundColor: 'rgba(255,255,255, 0.08)'
            }
          }}
        >
          <Box sx={{ flexGrow: 1 }}>
            {title}
          </Box>
        </Button>
        </Link>
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {submenu ? <Subnavitems title={title} />:''}
        </List>
      </Collapse>
      </>
  );
  } else {
    return (
    <ListItem
      disableGutters
      sx={{
        display: 'flex',
        mb: 0.5,
        py: 0,
        px: 2
      }}
      {...others}
    >
      <Link
        to={href}
      >
        <Button
          component="a"
          startIcon={icon}
          disableRipple
          sx={{
            backgroundColor: active && 'rgba(255,255,255, 0.08)',
            borderRadius: 1,
            color: active ? 'secondary.main' : 'neutral.300',
            fontWeight: active && 'fontWeightBold',
            justifyContent: 'flex-start',
            px: 3,
            textAlign: 'left',
            textTransform: 'none',
            width: '100%',
            '& .MuiButton-startIcon': {
              color: active ? 'secondary.main' : 'neutral.400'
            },
            '&:hover': {
              backgroundColor: 'rgba(255,255,255, 0.08)'
            }
          }}
        >
          <Box sx={{ flexGrow: 1 }}>
            {title}
          </Box>
        </Button>
        </Link>
      </ListItem>
  );
  }

  
};

NavItem.propTypes = {
  href: PropTypes.string,
  icon: PropTypes.node,
  title: PropTypes.string,
  submenu: PropTypes.bool,
  sublink: PropTypes.array,
};
