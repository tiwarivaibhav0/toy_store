import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import "./App.css";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "./App";
import { TextField } from "@mui/material";

// const pages = ["Home", "My Blogs", "SignOut"];
// const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Nav = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [
    cart,
    setCart,
    total,
    setTotal,
    state,
    setState,
    data,
    setData,
    searchText,
    setsearchText,
  ] = React.useContext(CartContext);
  const [search, setSearch] = React.useState(false);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const clickhandler = () => {
    if (search === false) setSearch(true);
    else {
      setsearchText(false);
      setSearch(false);
    }
  };
  const navigate = useNavigate();
  return (
    <>
      <AppBar position="fixed" sx={{ background: "#00897B" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <h2 sx={{ marginRight: "35px" }}>ToysWorld</h2>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
                sx={{ color: "black" }}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none", color: "black" },
                }}
              >
                {/* {pages.map((page) => ( */}
                <MenuItem key={Math.random()} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <Link to="/superheros" id="menuLINK">Superheroes</Link>
                  </Typography>
                </MenuItem>
                <MenuItem key={Math.random()} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <Link to="/dolls" id="menuLINK">Dolls</Link>
                  </Typography>
                </MenuItem>
                <MenuItem key={Math.random()} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <Link to="/educational" id="menuLINK">Educational</Link>
                  </Typography>
                </MenuItem>
                <MenuItem key={Math.random()} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <Link to="/models" id="menuLINK">Model Building</Link>
                  </Typography>
                </MenuItem>
                <MenuItem key={Math.random()} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <Link to="/" id="menuLINK">Latest</Link>
                  </Typography>
                </MenuItem>

                {/* ))} */}
              </Menu>
            </Box>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                marginLeft: "25px",
              }}
            >
              {search === false ? (
                <>
                  <Button
                    key={Math.random()}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "", display: "block" }}
                    style={{ textTransform: "none" }}
                    // className="animate__animated animate__slideInLeft"
                  >
                    {window.location.pathname == "/superheros" ? (
                      <Link to="/superheros" id="latest">
                        Superheroes
                      </Link>
                    ) : (
                      <Link to="/superheros">Superheroes</Link>
                    )}{" "}
                  </Button>
                  <Button
                    key={Math.random()}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "", display: "block" }}
                    style={{ textTransform: "none" }}
                    // className="animate__animated animate__slideInLeft"
                  >
                    {window.location.pathname == "/dolls" ? (
                      <Link to="/dolls" id="latest">
                        Dolls
                      </Link>
                    ) : (
                      <Link to="/dolls">Dolls</Link>
                    )}
                  </Button>
                  <Button
                    key={Math.random()}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "", display: "block" }}
                    style={{ textTransform: "none" }}
                    // className="animate__animated animate__slideInLeft"
                  >
                    {" "}
                    {window.location.pathname == "/educational" ? (
                      <Link to="/educational" id="latest">
                        Educational
                      </Link>
                    ) : (
                      <Link to="/educational">Educational</Link>
                    )}
                  </Button>

                  <Button
                    key={Math.random()}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "", display: "block" }}
                    style={{ textTransform: "none" }}
                    // className="animate__animated animate__slideInLeft"
                  >
                    {window.location.pathname == "/models" ? (
                      <Link to="/models" id="latest">
                        Model Building
                      </Link>
                    ) : (
                      <Link to="/models">Model Building</Link>
                    )}{" "}
                  </Button>

                  <Button
                    key={Math.random()}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, display: "block" }}
                    style={{ textTransform: "none" }}
                    // className="animate__animated animate__slideInLeft"
                  >
                    {" "}
                    {window.location.pathname == "/" ? (
                      <Link to="/" id="latest">
                        Latest
                      </Link>
                    ) : (
                      <Link to="/">Latest</Link>
                    )}
                  </Button>
                </>
              ) : (
                <></>
              )}
            </Box>
            {search === true ? (
              <>
                {" "}
                <input
                  placeholder="Type here..."
                  onChange={(e) => setsearchText(e.target.value)}
                  // value={search}
                  className="searchInp animate__animated animate__slideInRight "
                  style={{
                    padding: "15px",
                    fontSize: "20px",
                    border: "none",
                    borderBottom: "2px solid #004D40",
                    width: "50%",
                    // borderRadius: "25px",
                    textAlign: "center",
                    backgroundColor: "transparent",
                    marginRight: "25px",
                    color: "#FFF176",
                  }}
                />
              </>
            ) : (
              <></>
            )}
            {window.location.pathname != "/checkout" ? (
              <>
                <Box
                  sx={{ position: "", color: "#212121", marginRight: "25px",cursor:"pointer" }}
                >
                  {search == true ? (
                    <>
                      {" "}<span onClick={clickhandler}>X</span>
                     {" "}
                    </>
                  ) : (
                    <> <i class="fa fa-search" onClick={clickhandler}></i></>
                  )}
                </Box>
                <Box sx={{ position: "relative", color: "#212121",cursor:"pointer" }}>
                  {" "}
                  <i
                    class="fa fa-shopping-cart"
                    onClick={() => {
                      setState(true);
                    }}
                  ></i>{" "}
                  <span
                    style={{
                      position: "absolute",
                      top: "-15px",
                      color: "whitesmoke",
                    }}
                  >
                    {cart.length}
                  </span>
                </Box>
              </>
            ) : (
              <></>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};
export default Nav;
