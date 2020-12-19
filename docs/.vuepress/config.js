module.exports = {
    title: 'HOMYIT',
    description: '',
    head: [
        ['link', {
            rel: "icon",
            href: "/images/logo.ico"
        }]
    ],
    base: '/Homyit-Guide/',
    themeConfig: {
        logo: '/images/Homyit.png',
        nav: [{
                text: 'Home',
                link: '/'
            },
            {
                text: 'Guide',
                link: '/guide/'
            },
            {
                text: 'About us',
                link: '/about/'
            },
        ],
        sidebar: [{
                title: '前端',
                path: '/guide/front/',
                children: [{
                        title: 'HTML代码风格',
                        path: '/guide/front/html/'
                    },
                    {
                        title: 'CSS代码风格',
                        path: '/guide/front/css/'
                    },
                    {
                        title: 'JavaScript代码风格',
                        path: '/guide/front/javascript/'
                    }
                ]
            },
            {
                title: '后端',
                path: '/guide/back/',
                children: [{
                        title: 'java代码风格',
                        path: '/guide/back/java/'
                    },
                    {
                        title: 'mysql代码风格',
                        path: '/guide/back/mysql/'
                    }
                ]
            },
            {
                title: 'UI',
                path: '/guide/ui/',
                children: [{
                    title: 'UI设计指南',
                    path: '/guide/ui/'
                }]
            },
        ],
        lastUpdated: 'Last Updated',
        smoothScroll: true
    }
}