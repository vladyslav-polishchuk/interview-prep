import Link from "next/link";
import Contributor from "../components/Contributor";
import Layout from "../components/Layout";

const contributors = [
  {
    profileImg: "",
    title: "Yukhum Liubarskyi, JavaScript Developer",
    text: `body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore
    consectetur, neque doloribus, cupiditate numquam dignissimos laborum
    fugiat deleniti? Eum quasi quidem quibusdam.`,
    linkedInUrl: "",
    gitHubUrl: "",
    gmailUrl: "",
  },
  {
    profileImg: "",
    title: "Vladyslav Polishchuk, JavaScript Developer",
    text: `body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore
    consectetur, neque doloribus, cupiditate numquam dignissimos laborum
    fugiat deleniti? Eum quasi quidem quibusdam.`,
    linkedInUrl: "",
    gitHubUrl: "",
    gmailUrl: "",
  },
];

const Contributors = () => (
  <Layout title="Contributors">
    <h1>Contributors</h1>

    {contributors.map((contributor) => (
      <Contributor {...contributor} />
    ))}

    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
);

export default Contributors;
