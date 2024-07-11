import Link from "next/link";

export default function About() {
  return (
    <>
      <h1>CV: <a href="https://cv.zeon.wang/cv/">CN</a> / <a href="https://cv.zeon.wang/cv/en.html">EN</a></h1>
      <p>Mobile/WeChat: <a href="tel:15622209229">15622209229</a></p>
      <p>Email: <a href="mailto:scplay@gmail.com" >scplay@gmail.com</a></p>
      <div>
        Back to <Link href="/">Home</Link>
      </div>
    </>
  );
}
