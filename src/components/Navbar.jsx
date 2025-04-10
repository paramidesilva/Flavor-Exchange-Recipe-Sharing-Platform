import React, { useState, useContext } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Menu,
  MenuItem,
  IconButton,
  Stack,
  Drawer,
  useMediaQuery,
  Box
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu'; //  MenuIcon for the hamburger menu

const Navbar = () => {
  const [recipeAnchor, setRecipeAnchor] = useState(null);
  const [accountAnchor, setAccountAnchor] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const isSmallScreen = useMediaQuery('(max-width: 600px)'); 

  const openRecipeMenu = (e) => setRecipeAnchor(e.currentTarget);
  const closeRecipeMenu = () => setRecipeAnchor(null);

  const openAccountMenu = (e) => setAccountAnchor(e.currentTarget);
  const closeAccountMenu = () => setAccountAnchor(null);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const toggleDrawer = (open) => setDrawerOpen(open);

  return (
    <>
      <AppBar position="static" sx={{ background: '#fff', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
        <Toolbar sx={{ justifyContent: 'space-between', padding: '0 30px' }}>
          {/*  Brand Name */}
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{
              color: 'green',
              textDecoration: 'none',
              fontWeight: 'bold',
              letterSpacing: 2,
              fontFamily: '"Roboto", sans-serif',
            }}
          >
            Flavor Exchange
          </Typography>

          {/* If it's a small screen */}
          {isSmallScreen ? (
            <IconButton color="primary" onClick={() => toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
          ) : (
            <Stack direction="row" spacing={3} alignItems="center">
              <Button color="black" component={Link} to="/" sx={{ fontWeight: 'bold', textTransform: 'none', color: 'black' }}>
                Home
              </Button>
              <Button color="black" component={Link} to="/recipes" sx={{ fontWeight: 'bold', textTransform: 'none', color: 'black' }}>
                Recipe Feed
              </Button>
              <Button color="black" onClick={openRecipeMenu} sx={{ fontWeight: 'bold', textTransform: 'none', color: 'black' }}>
                Recipe Management
              </Button>
              <Menu
                anchorEl={recipeAnchor}
                open={Boolean(recipeAnchor)}
                onClose={closeRecipeMenu}
              >
                <MenuItem component={Link} to="/create" onClick={closeRecipeMenu}>
                  Add Recipe
                </MenuItem>
                <MenuItem component={Link} to="/edit/1" onClick={closeRecipeMenu}>
                  Edit Recipe
                </MenuItem>
              </Menu>
              <Button color="black" component={Link} to="/favorites" sx={{ fontWeight: 'bold', textTransform: 'none', color: 'black' }}>
                Favorites
              </Button>
            </Stack>
          )}

          {/* User Profile Section */}
          <Stack direction="row" spacing={2} alignItems="center">
            {user ? (
              <>
                <Typography sx={{ color: '#000' }}>Hi, {user.username}</Typography>
                <IconButton color="primary" onClick={openAccountMenu}>
                  <AccountCircleIcon />
                </IconButton>
                <Menu
                  anchorEl={accountAnchor}
                  open={Boolean(accountAnchor)}
                  onClose={closeAccountMenu}
                >
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Menu>
              </>
            ) : (
              <>
                <IconButton color="primary" onClick={openAccountMenu}>
                  <AccountCircleIcon />
                </IconButton>
                <Menu
                  anchorEl={accountAnchor}
                  open={Boolean(accountAnchor)}
                  onClose={closeAccountMenu}
                >
                  <MenuItem component={Link} to="/login" onClick={closeAccountMenu}>
                    Login
                  </MenuItem>
                  <MenuItem component={Link} to="/signup" onClick={closeAccountMenu}>
                    Signup
                  </MenuItem>
                </Menu>
              </>
            )}
          </Stack>
        </Toolbar>
      </AppBar>

      {/* Drawer for mobile */}
      <Drawer anchor="left" open={drawerOpen} onClose={() => toggleDrawer(false)}>
        <Box sx={{ width: 250, padding: '20px' }}>
          <Stack direction="column" spacing={3}>
            <Button
              color="black"
              component={Link}
              to="/"
              sx={{ fontWeight: 'bold', textTransform: 'none', color: 'black' }}
              onClick={() => toggleDrawer(false)}
            >
              Home
            </Button>
            <Button
              color="black"
              component={Link}
              to="/recipes"
              sx={{ fontWeight: 'bold', textTransform: 'none', color: 'black' }}
              onClick={() => toggleDrawer(false)}
            >
              Recipe Feed
            </Button>
            <Button
              color="black"
              onClick={() => {
                toggleDrawer(false);
                openRecipeMenu();
              }}
              sx={{ fontWeight: 'bold', textTransform: 'none', color: 'black' }}
            >
              Recipe Management
            </Button>
            <Menu
              anchorEl={recipeAnchor}
              open={Boolean(recipeAnchor)}
              onClose={closeRecipeMenu}
            >
              <MenuItem component={Link} to="/create" onClick={closeRecipeMenu}>
                Add Recipe
              </MenuItem>
              <MenuItem component={Link} to="/edit/1" onClick={closeRecipeMenu}>
                Edit Recipe
              </MenuItem>
            </Menu>
            <Button
              color="black"
              component={Link}
              to="/favorites"
              sx={{ fontWeight: 'bold', textTransform: 'none', color: 'black' }}
              onClick={() => toggleDrawer(false)}
            >
              Favorites
            </Button>
            {user ? (
              <Button
                color="black"
                onClick={handleLogout}
                sx={{ fontWeight: 'bold', textTransform: 'none', color: 'black' }}
              >
                Logout
              </Button>
            ) : (
              <>
                <Button
                  color="black"
                  component={Link}
                  to="/login"
                  sx={{ fontWeight: 'bold', textTransform: 'none', color: 'black' }}
                  onClick={() => toggleDrawer(false)}
                >
                  Login
                </Button>
                <Button
                  color="black"
                  component={Link}
                  to="/signup"
                  sx={{ fontWeight: 'bold', textTransform: 'none', color: 'black' }}
                  onClick={() => toggleDrawer(false)}
                >
                  Signup
                </Button>
              </>
            )}
          </Stack>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
