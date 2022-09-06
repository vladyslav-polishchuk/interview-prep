import AdminPanelSettings from '@mui/icons-material/AdminPanelSettings';
import React from 'react';
import {
  Typography,
  Menu,
  IconButton,
  Tooltip,
  MenuItem,
  Box,
  Divider,
  Button,
  Avatar,
} from '@mui/material';
import { useRouter } from 'next/router';
import type { DefaultSession } from 'next-auth';

interface UserMenuProps {
  user: DefaultSession['user'];
  signOut: () => void;
}

export default function Header({ user, signOut }: UserMenuProps) {
  const router = useRouter();
  const [menuNode, setMenuNode] = React.useState<null | HTMLElement>(null);

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMenuNode(event.currentTarget);
  };
  const handleClose = () => setMenuNode(null);

  return (
    <>
      <Tooltip title="User menu">
        <IconButton onClick={handleOpen} color="inherit">
          <Avatar src={user.image} />
        </IconButton>
      </Tooltip>

      <Menu
        sx={{ mt: '60px' }}
        anchorEl={menuNode}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(menuNode)}
        onClose={handleClose}
      >
        <Box sx={{ mb: 1.5, px: 2.5 }}>
          <Typography variant="subtitle1" noWrap>
            {user.name}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
            {user.email}
          </Typography>
        </Box>

        <Divider sx={{ my: 1 }} />

        <MenuItem
          onClick={() => {
            router.push('/admin/questions');

            handleClose();
          }}
        >
          <AdminPanelSettings sx={{ mx: 1 }} />

          <Typography textAlign="center">Admin</Typography>
        </MenuItem>

        <Box sx={{ p: 2, pt: 1.5, pb: 1 }}>
          <Button fullWidth variant="outlined" onClick={() => signOut()}>
            Logout
          </Button>
        </Box>
      </Menu>
    </>
  );
}
