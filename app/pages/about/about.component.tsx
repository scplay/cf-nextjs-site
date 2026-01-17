import Link from "next/link";
import { aboutData } from "./about.data";
import type { Lang } from "../../i18n/config";

export function AboutContent({ lang = 'en' }: { lang?: Lang }) {
  const data = aboutData[lang];

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Link href="/" className="flex flex-col items-center justify-center">
        <img
          className="size-[200px]"
          src="https://s2.loli.net/2025/05/16/GqJYICoBukj15lT.png"
          alt="avatar"
        />
        <span className="text-xl">{data.text}</span>
      </Link>
    </div>
  );
}
