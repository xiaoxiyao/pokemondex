import {
  AppBar,
  Chip,
  Divider,
  IconButton,
  Stack,
  Toolbar,
  Typography
} from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import SearchIcon from "@mui/icons-material/Search"
import MoreIcon from "@mui/icons-material/MoreVert"

export default function TopBar(props: { toggleDrawer: (state: boolean) => void }) {
  return (
    <AppBar>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={() => props.toggleDrawer(true)}
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h5"
          noWrap
          component="div"
          sx={{ flexGrow: 1 }}
        >
          Pokédex
        </Typography>
        <IconButton size="large" aria-label="search" color="inherit">
          <SearchIcon />
        </IconButton>
        <IconButton
          size="large"
          aria-label="display more actions"
          edge="end"
          color="inherit"
        >
          <MoreIcon />
        </IconButton>
      </Toolbar>
      <Stack
        direction="row"
        spacing={2}
        divider={<Divider orientation="vertical" variant="middle" flexItem />}
        justifyContent="center"
        alignItems="center"
        sx={{ pb: 1 }}
      >
        <Chip
          label="版本"
          clickable
        />
        <Chip label="属性"
          clickable
        />
      </Stack>
    </AppBar>
  )
}