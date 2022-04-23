import { AppBar, Toolbar, IconButton, Typography, Box, Badge, InputBase } from '@material-ui/core'
import { More as MoreIcon, Notifications as NotificationsIcon, Search as SearchIcon, 
    AccountCircle, Menu as MenuIcon, Mail as MailIcon } from '@material-ui/icons'
import React, { useState } from 'react'
import { fade, makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import { classicNameResolver } from 'typescript'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    search: {
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      "&:hover": {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(3),
        width: "auto",
      },
    },
    searchIcon: {
      width: theme.spacing(7),
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    inputRoot: {
        color: 'inherit'
    },
    inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    }
  }
}
));

type Props = {
  books: any
  setBooks: any
}

const Header: React.FC<Props> = props => {

    const styles = useStyles()
    const [inputVal, setInputVal] = useState<string>('')

    function updateBooks(search: string) {
      setInputVal(search)
      props.setBooks(props.books.filter((book: any) => book.title.toLowerCase().includes(search)))
    }

    return(<AppBar position="static">
    <Toolbar>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="open drawer"
      >
        <MenuIcon />
      </IconButton>
      <Typography
        variant="h6"
        noWrap> Books
      </Typography>
      <div className={styles.search}>
          <div className={styles.searchIcon}>
          <SearchIcon />
          </div>
        <InputBase
        classes={{
            root: styles.inputRoot,
            input: styles.inputInput
        }}
        onChange={e => updateBooks(e.target.value)}
        value={inputVal}
          placeholder="Search…"
          inputProps={{ 'aria-label': 'search' }}
          />
          </div>
        <div style={{ flexGrow: 1 }} />
        <IconButton
          edge="end"
          aria-label="account of current user"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
      <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
        <IconButton
          aria-label="show more"
          aria-haspopup="true"
          color="inherit"
        >
          <MoreIcon />
        </IconButton>
      </Box>
    </Toolbar>
  </AppBar>)
}

export default Header