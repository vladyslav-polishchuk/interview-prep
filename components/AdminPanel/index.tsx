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
  const router = useRouter();
  const { section } = router.query;
  const { Component } =
    navigationItems.find(({ route }) => route === section) ?? {};
  const { isMobile } = useScreenSize();

  return (
    <Box sx={{ display: 'flex', py: 4 }}>
      <Box component="nav" padding={1}>
        {navigationItems.map(({ route, icon, title }) => (
          <List key={route}>
            <ListItem disablePadding onClick={() => router.push(route)}>
              <ListItemButton selected={route === section}>
                <ListItemIcon>{icon}</ListItemIcon>

                {!isMobile && <ListItemText primary={title} />}
              </ListItemButton>
            </ListItem>
          </List>
        ))}
      </Box>

      <Divider orientation="vertical" flexItem />

      <Box sx={{ width: '100%' }}>{Component && <Component />}</Box>
    </Box>
  );
};

export default AdminPanel;
