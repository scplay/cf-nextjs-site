// 如果要使用 SSG, 入口就要使用，否则会报错 ? 没报错呀
// "use client"

import Home from "./pages/home/page";

// SSG 使用这个和 "use client" 功能是一样的，任意一个都可以？
// export const dynamic = 'force-static';

export default Home;
