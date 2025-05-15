import Link from "next/link";

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Link href="/" className="flex flex-col items-center justify-center">
        <img
          className="size-[200px]"
          src="https://s2.loli.net/2025/05/16/GqJYICoBukj15lT.png"
          alt="avatar"
        />
        <span className="text-xl">Work In Progress...</span>
      </Link>
      {/* <h1>CV: <a href="https://cv.zeon.wang/cv/">CN</a> / <a href="https://cv.zeon.wang/cv/en.html">EN</a></h1>
      <p>Mobile/WeChat: <a href="tel:15622209229">15622209229</a></p>
      <p>Email: <a href="mailto:scplay@gmail.com" >scplay@gmail.com</a></p> */}
    </div>
  );
}
