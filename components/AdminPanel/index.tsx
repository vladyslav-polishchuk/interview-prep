import { useRouter } from 'next/router';
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import QuestionMark from '@mui/icons-material/QuestionMark';
import People from '@mui/icons-material/People';
import QuestionsPage from './Pages/Questions';
import UsersPage from './Pages/Users';
import useScreenSize from '../../hooks/useScreenSize';

const navigationItems = [
  {
    title: 'Questions',
    icon: <QuestionMark />,
    route: 'questions',
    Component: QuestionsPage,
  },
  {
    title: 'Users',
    icon: <People />,
    route: 'users',
    Component: UsersPage,
  },
];

const AdminPanel = () => {
  const { isMobile } = useScreenSize();
  const router = useRouter();
  const { section } = router.query;
  const { Component } =
    navigationItems.find(({ route }) => route === section) ?? {};
  const padding = isMobile ? 1 : 2;

  return (
    <Box sx={{ display: 'flex', pt: 4 }}>
      <Box component="nav" sx={{ px: padding }}>
        <List disablePadding>
          {navigationItems.map(({ route, icon, title }) => (
            <ListItem
              disablePadding
              key={route}
              onClick={() => router.push(route)}
            >
              <ListItemButton selected={route === section}>
                <ListItemIcon sx={{ minWidth: 2 }}>{icon}</ListItemIcon>

                {!isMobile && <ListItemText primary={title} sx={{ ml: 1 }} />}
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>

      <Divider orientation="vertical" flexItem />

      <Box sx={{ width: '100%', px: padding }}>
        {Component && <Component />}
      </Box>
    </Box>
  );
};

export default AdminPanel;
