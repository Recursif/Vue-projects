module.exports = {
    //title: "Hello doc",
    locales: {
        "/": { lang: "en-US" },
        "/zh/": { lang: "zh-CN" },
    },
    themeConfig: {
        nav:[
            { text: "Another Page", link: "./hello.html" }
        ],
        sidebar: [
            "/",
            "/hello",
        ],
    },
}