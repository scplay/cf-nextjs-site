import Link from "next/link";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <p>Hello World! This is ZeonWang</p>
      <p>
        Visit the <Link href="/about">About</Link> page.
      </p>
    </div>
  );
};

export default Home;
