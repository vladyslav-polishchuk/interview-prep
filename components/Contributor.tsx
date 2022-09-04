import { GitHub, Google, LinkedIn } from '@mui/icons-material';
import { Avatar, Box, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';

interface ContributorProps {
  profileImg: string;
  title: string;
  text: string;
  linkedInUrl: string;
  gitHubUrl: string;
  gmailUrl: string;
}

const Contributor = (props: ContributorProps) => {
  const { profileImg, title, text, linkedInUrl, gitHubUrl, gmailUrl } = props;
  return (
    <Paper elevation={3} sx={{ marginBottom: '20px' }}>
      <Box sx={{ display: 'flex', padding: '20px' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Avatar
            sx={{
              width: '120px',
              height: '120px',
              margin: '0 20px 20px 0',
              borderRadius: '10px',
            }}
            src={profileImg}
            variant="square"
            alt="profile image"
          />
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              marginRight: '20px',
            }}
          >
            <LinkedIn></LinkedIn>
            <GitHub></GitHub>
            <Google></Google>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography variant="h4" gutterBottom>
            {title}
          </Typography>
          <Typography variant="body1" gutterBottom>
            {text}
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
};

export default Contributor;
