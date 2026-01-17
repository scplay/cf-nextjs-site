export const cvData = {
  en: {
    header: {
      name: 'Zeon Wang',
      avatar: 'https://s2.loli.net/2025/05/16/GqJYICoBukj15lT.png',
      email: 'me@zeon.wang',
      phone: '+86 15622209229',
      address: 'ShenZhen, China'
    },

    profile: {
      meta: {
        title: 'Who I Am'
      },
      content: [
        'Curious mind, building order.',
      ],
      inspirations: {
        prefix: 'Inspired by',
        items: [
          { name: 'Steve Jobs', url: 'https://www.youtube.com/watch?v=UF8uR6Z6KLc' },
          { name: 'Taylor Otwell', url: 'https://www.youtube.com/watch?v=HYwRc7WUjsM' },
          { name: 'Charlie Munger', url: 'https://www.stripe.press/poor-charlies-almanack' },
        ],
        suffix: '',
      },
      footer: 'For technical deep-dives and project stories → medium.com/@vowsole'
    },

    work: {
      meta: {
        title: 'Work Experience'
      },
      timeline: [
        {
          company: 'OSL',
          logo: 'https://mma.prnewswire.com/media/2620420/Untitled_design_Logo.jpg',
          url: 'https://www.osl.com/',
          position: 'Expert Frontend Engineer',
          year: `2024.8 - ${new Date().getFullYear()}.${new Date().getMonth() + 1}(Now)`,

          projects: [
            {
              name: 'Trade System',
              description: 'Spot / Futures trading system',
              year: '2025.05 - Now',
              stack: ['React', 'Vite', 'TradingView']
            },

            {
              name: 'Official Site',
              description: 'Global / HK / JP official site rebranding / CMS',
              year: '2024.08 - 2025.04',
              stack: ['Next.js', 'Vue', 'Contentful', "Modern.js"]
            },
          ]
        },

        {
          company: 'Freelance',
          logo: 'https://s2.loli.net/2026/01/17/Z5QTKorI8g6qOwa.png',
          position: 'Full Stack Developer',
          year: '2022.10 - 2024.8',

          projects: [
            {
              name: 'IdleFish Assistant',
              description: 'Build a crawler to help customers find the best deals on IdleFish',
              year: '2023.5 - 2024.5',
              stack: ['Vue', 'Node.js', 'Frida.js', 'Postgres', 'Linux']
            },
          ]
        },

        {
          company: 'Shopee',
          logo: 'https://s2.loli.net/2025/05/19/fB5Fby4umT1XrQ8.webp',
          url: 'https://www.shopee.com/',
          position: 'Expert Engineer',
          year: '2021.9 - 2022.10',

          projects: [
            {
              name: 'Shopee Food - Merchant',
              description: 'Merchant App & Admin for Vietnam / Indonesia',
              year: '2021.9 - 2022.10',
              stack: ['React', 'Node.js', 'ReactNative']
            },
          ]
        },


        {
          company: 'Bigo',
          logo: 'https://s2.loli.net/2026/01/17/2ciTRZzmSD7aFjG.png',
          url: 'https://www.bigo.tv/',
          position: 'Senior Frontend Engineer',
          year: '2020.11 - 2021.9',

          projects: [
            {
              name: 'Livestream Admin',
              description: 'Admin dashboard, review microservice, RTC SDK',
              year: '2020.11 - 2021.9',
              stack: ['Vue', 'PHP', 'Docker', 'Deno', 'Egg.js', 'WebRTC']
            },
          ]
        },

        {
          company: 'ifanr, Inc.',
          logo: 'https://ykimg.alicdn.com/product/image/2022-12-07/cddc57cc869dd80e1862017164f44bee.png',
          url: 'https://www.ifanr.com/',
          position: 'Senior Frontend Engineer',
          year: '2019.7 - 2020.11',

          projects: [
            {
              name: 'Candy - Mini Program',
              description: 'Product review community',
              year: '2019.7 - 2021.7',
              stack: ['React', 'Node.js', 'WeChat Mini Program']
            },
          ]
        },

        {
          company: 'PanX Software',
          logo: 'https://s2.loli.net/2025/05/19/HT7PRmCo9qSJh45.png',
          url: 'https://www.panxsoft.com/',
          position: 'Frontend Engineer / Web Lead',
          year: '2016.7 - 2019.7',

          projects: [
            {
              name: 'Web AR Platform',
              description: 'Glasses/cosmetics AR try-on, Web SDK, e-commerce',
              year: '2016-2019',
              stack: ['Vue', 'Node.js', 'Three.js', 'Laravel']
            },
          ]
        },
      ]
    },
    
    education: {
      meta: {
        title: 'Education'
      },
      timeline: [
        {
          school: 'South China University of Technology',
          logo: 'https://s2.loli.net/2026/01/17/CL37rkfs6JgvxPQ.png',
          degree: 'Master of Industrial Design Engineering',
          major: 'Industrial Design',
          year: '2013-2016'
        },
        {
          school: 'Shenyang University of Technology',
          logo: 'https://s2.loli.net/2026/01/17/FPH8wLRput35ZWI.png',
          degree: 'Bachelor',
          major: 'Industrial Design',
          year: '2008-2012'
        },
      ]
    }
  },

  zh: {
    header: {
      name: '王智翔',
      avatar: 'https://s2.loli.net/2025/05/16/GqJYICoBukj15lT.png',
      email: 'me@zeon.wang',
      phone: '+86 15622209229',
      address: '深圳, 中国'
    },

    profile: {
      meta: {
        title: '我'
      },
      content: [
        '充满好奇，构建秩序',
      ],
      inspirations: {
        prefix: '受到',
        items: [
          { name: 'Steve Jobs', url: 'https://www.youtube.com/watch?v=UF8uR6Z6KLc' },
          { name: 'Taylor Otwell', url: 'https://www.youtube.com/watch?v=HYwRc7WUjsM' },
          { name: 'Charlie Munger', url: 'https://www.stripe.press/poor-charlies-almanack' },
        ],
        suffix: ' 的启发',
      },
      footer: '技术深度文章和项目故事 → medium.com/@vowsole'
    },

    work: {
      meta: {
        title: '工作经历'
      },
      timeline: [
        {
          company: 'OSL',
          logo: 'https://mma.prnewswire.com/media/2620420/Untitled_design_Logo.jpg',
          url: 'https://www.osl.com/',
          position: 'Expert Frontend Engineer',
          year: `2024.8 - ${new Date().getFullYear()}.${new Date().getMonth() + 1}(至今)`,

          projects: [
            {
              name: '交易系统',
              description: '现货 / 合约交易系统',
              year: '2025.05 - Now',
              stack: ['React', 'Vite', 'TradingView']
            },

            {
              name: '官方网站',
              description: '官网重构 / 内容管理系统',
              year: '2024.08 - 2025.04',
              stack: ['Next.js', 'Vue', 'Contentful', "Modern.js"]
            },
          ]
        },

        {
          company: '自由职业',
          logo: 'https://s2.loli.net/2026/01/17/Z5QTKorI8g6qOwa.png',
          position: 'Full Stack Developer',
          year: '2022.10 - 2024.8',

          projects: [
            {
              name: '电商助手',
              description: '商品爬虫通知系统，帮助用户在闲鱼上找到最优惠的商品',
              year: '2023.5 - 2024.5',
              stack: ['Vue', 'Node.js', 'Frida.js', 'Postgres', 'Linux']
            },
          ]
        },

        {
          company: 'Shopee',
          logo: 'https://s2.loli.net/2025/05/19/fB5Fby4umT1XrQ8.webp',
          url: 'https://www.shopee.com/',
          position: 'Expert Engineer',
          year: '2021.9 - 2022.10',
          projects: [
            {
              name: 'Shopee Food - 商家端',
              description: '越南 / 印尼的商家端 App 、管理后台开发',
              year: '2021.9 - 2022.10',
              stack: ['React', 'Node.js', 'ReactNative']
            },
          ]
        },


        {
          company: 'BIGO',
          logo: 'https://s2.loli.net/2026/01/17/2ciTRZzmSD7aFjG.png',
          url: 'https://www.bigo.tv/',
          position: '高级前端工程师',
          year: '2020.11 - 2021.9',

          projects: [
            {
              name: '直播中台',
              description: '直播数据后台、 审核微服务、RTC SDK 开发',
              year: '2020.11 - 2021.9',
              stack: ['Vue', 'PHP', 'Docker', 'Deno', 'Egg.js', 'WebRTC']
            },
          ]
        },

        {
          company: 'ifanr, Inc.',
          logo: 'https://ykimg.alicdn.com/product/image/2022-12-07/cddc57cc869dd80e1862017164f44bee.png',
          url: 'https://www.ifanr.com/',
          position: '高级前端工程师',
          year: '2019.7 - 2020.11',

          projects: [
            {
              name: '糖纸众测社区 - 小程序',
              description: '负责产品体验社区开发',
              year: '2019.7 - 2021.7',
              stack: ['React', 'Node.js', 'WeChat Mini Program']
            },
          ]
        },

        {
          company: 'PanX Software',
          logo: 'https://s2.loli.net/2025/05/19/HT7PRmCo9qSJh45.png',
          url: 'https://www.panxsoft.com/',
          position: '前端工程师 / Web 开发部负责人',
          year: '2016.7 - 2019.7',

          projects: [
            {
              name: '眼镜、美妆 Web AR 平台',
              description: '负责 Web SDK，电商平台开发',
              year: '2016-2019',
              stack: ['Vue', 'Node.js', 'Three.js', 'Laravel', 'Linux']
            },
          ]
        },
      ]
    },
    
    education: {
      meta: {
        title: '教育经历'
      },
      timeline: [
        {
          school: '华南理工大学',
          logo: 'https://s2.loli.net/2026/01/17/CL37rkfs6JgvxPQ.png',
          degree: '硕士',
          major: '工业设计工程',
          year: '2013-2016'
        },
        {
          school: '沈阳工业大学',
          logo: 'https://s2.loli.net/2026/01/17/FPH8wLRput35ZWI.png',
          degree: '本科',
          major: '工业设计',
          year: '2008-2012'
        },
      ]
    }
  }
}