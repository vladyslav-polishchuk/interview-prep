import Link from 'next/link';
import Contributor from '../components/Contributor';
import Layout from '../components/Layout';

const contributors = [
  {
    id: '1',
    profileImg: '',
    title: 'Yukhum Liubarskyi, JavaScript Developer',
    text: `body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore
    consectetur, neque doloribus, cupiditate numquam dignissimos laborum
    fugiat deleniti? Eum quasi quidem quibusdam.`,
    linkedInUrl: '',
    gitHubUrl: 'https://github.com/FimaLb/',
    gmailUrl: '',
  },
  {
    id: '2',
    profileImg: '../static/profile-vlad.jpg',
    title: 'Vladyslav Polishchuk, JavaScript Developer',
    text: `body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore
    consectetur, neque doloribus, cupiditate numquam dignissimos laborum
    fugiat deleniti? Eum quasi quidem quibusdam.`,
    linkedInUrl: 'https://linkedin.com/in/vladyslav-polishchuk96/',
    gitHubUrl: 'https://github.com/vladyslav-polishchuk/',
    gmailUrl: 'https://github.com/vladyslav-polishchuk',
  },
];

const AboutPage = () => (
  <Layout title="Contributors">
    <h1>Contributors</h1>

    {contributors.map((contributor) => (
      <Contributor key={contributor.id} {...contributor} />
    ))}

    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
);

export default AboutPage;
