import { GitHub, Google, LinkedIn } from '@mui/icons-material';
import { Avatar, Box, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import Link from './Link';

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
  const socialNetworks = [
    {
      id: 'linkedIn',
      image: <LinkedIn />,
      link: linkedInUrl,
    },
    {
      id: 'gitHub',
      image: <GitHub />,
      link: gitHubUrl,
    },
    {
      id: 'gmail',
      image: <Google />,
      link: gmailUrl,
    },
  ];

  return (
    <Paper elevation={3} sx={{ marginBottom: '20px' }}>
      <Box sx={{ display: 'flex', padding: '20px' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Avatar
            sx={{
              width: '128px',
              height: '128px',
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
              justifyContent: 'space-around',
              marginRight: '20px',
              height: '24px',
            }}
          >
            {socialNetworks.map(({ id, image, link }) =>
              link ? (
                <Link key={id} href={link}>
                  {image}
                </Link>
              ) : (
                ''
              ),
            )}
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
