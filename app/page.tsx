import Link from "next/link";

const Home = () => {
  return (
    <div>
      <h1>Hi! This is ZeonWang, a developer</h1>
      <p>
        Visit the <Link href="/about">About</Link> page.
      </p>
    </div>
  );
};

export default Home;
