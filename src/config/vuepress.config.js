const path = require("path");
const fs = require("fs");

const configPath = path.join(process.cwd(), "src/config/config.js");
const indexPath = path.join(process.cwd(), "src/config/index.json");

const index = require(indexPath);
const config = require(configPath);

console.log(`host: ${config.get("host")}`);
console.log(`port: ${config.get("port")}`);
console.log(`endpoint: ${config.get("endpoint")}`);
console.log(`destination: ${config.get("destination")}`);
console.log(`version: ${config.get("version")}`);
console.log(`latest: ${config.get("latest")}`);

module.exports = {
  devtools: true,
  host: config.get("host"),
  port: config.get("port"),
  base: config.get("endpoint"),
  dest: config.get("destination"),
  title: "AsTeRICS",
  description: "Customized Low-Cost Assistive Technologies",
  head: [
    ["link", { rel: "apple-touch-icon", sizes: "180x180", href: "/favicon/apple-touch-icon.png" }],
    ["link", { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon/favicon-32x32.png" }],
    ["link", { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon/favicon-16x16.png" }],
    ["link", { rel: "manifest", href: "/favicon/site.webmanifest" }],
    ["link", { rel: "mask-icon", href: "/favicon/safari-pinned-tab.svg", color: "#0ea1f2" }],
    ["meta", { name: "apple-mobile-web-app-title", content: "AsTeRICS Docs" }],
    ["meta", { name: "application-name", content: "AsTeRICS Docs" }],
    ["meta", { name: "msapplication-TileColor", content: "#2b5797" }],
    ["meta", { name: "theme-color", content: "#ffffff" }]
  ],
  plugins: {
    "@vuepress/medium-zoom": {
      selector: ".content img"
    },
    "@vuepress/back-to-top": {},
    "@vuepress/pwa": {
      serviceWorker: true,
      popupComponent: "AstericsSWUpdatePopup",
      updatePopup: {
        message: "New content is available.",
        buttonText: "Refresh"
      }
    }
  },
  themeConfig: {
    repo: "asterics/AsTeRICS",
    repoLabel: "Repository!",
    docsRepo: "asterics/AsTeRICS",
    docsDir: "Documentation/docs",
    docsBranch: "master",
    editLinks: false,
    store: {
      latest: config.get("latest"),
      version: config.get("version"),
      routes: index["routes"]
    },
    nav: [
      { text: "Getting Started", link: "/getting-started/" },
      {
        text: "Discover",
        items: [
          { text: "Models", link: "/getting-started/Search-Models" },
          { text: "Grids", link: "/getting-started/Search-asterics-grids" },
          { text: "AT Solutions", link: "/getting-started/Search-AT-solutions" }
        ]
      },
      { text: "Help", link: "/help/" },
      {
        text: "Applications",
        items: [
          {
            text: "WebACS",
            link: "http://asterics.github.io/AsTeRICS/webapps/WebACS/?areBaseURI=http://localhost:8081"
          },
          {
            text: "AsTeRICS Grid",
            link: "https://asterics.github.io/AsTeRICS-Grid/package/static/#main"
          },
          { text: "Plugin IDE", link: "/webapps/Plugin-IDE" },
          { text: "AT solution IDE", link: "/webapps/AT-solution-IDE" } //maybe rename to 'AT application'
        ]
      },
      { text: "Develop", link: "/develop/" },
      {
        text: "Support",
        items: [
          { text: "Issues", link: "/support/Issues" },
          { text: "Contact", link: "/support/Contact" },
          { text: "Contribute", link: "/support/Contribute" },
          { text: "Donate", link: "/support/Donate" }
        ]
      },
      {
        text: "Languages",
        items: [{ text: "English", link: "/" }, { text: "German", link: "/de/" }]
      }
    ],
    sidebar: {
      "/getting-started/": [
        {
          title: "Getting Started",
          collapsable: false,
          children: [["", "Introduction"]]
        },
        {
          title: "Discover",
          collapsable: false,
          children: [["Search-Models", "Models"], ["Search-asterics-grids", "Grids"], ["Search-AT-solutions", "AT Solutions"]]
        }
      ],
      // "/develop/": [
      //   "DeveloperGuide" /* /foo/ */,
      //   "Coding-Guidelines" /* /foo/one.html */,
      //   "AT_solution_development",
      //   "AT-solution-demos",
      //   "asterics-wiki/coding_instructions/AsTeRICS Solutions",
      //   "APE",
      //   "ARE-Webserver.md",
      //   "REST-API",
      //   "asterics-wiki/api/AsTeRICS Websocket.md",
      //   "ARE.md" /* /foo/two.html */
      // ]
      "/develop/": [
        {
          title: "Getting Started",
          collapsable: false,
          children: [
            ["Development-Environment", "Development Environment"],
            ["Coding-Guidelines", "Coding Guidelines"],
            ["Unit-Testing", "Unit Testing"]
          ]
        },
        {
          title: "Plugin",
          collapsable: false,
          children: [["Plugin-Introduction", "Introduction"], ["Plugin-Tutorial", "Tutorial"], ["Plugin-Advanced", "Advanced"]]
        },
        {
          title: "ARE Middleware",
          collapsable: false,
          children: [
            ["ARE.md", "Advanced"]
            // ["asterics-wiki/api/Resource Handling.md", "Resource handling"],
            // ["ARE-Keyboard-Mouse-Services.md", "Keyboard/Mouse"],
            // ["asterics-wiki/coding_instructions/JavaCV.md", "Computer Vision"],
            // ["ARE-HW-Interfacing-CIM.md", "Interfacing Peripherals (CIM)"]
          ]
        },
        {
          title: "ARE Remote APIs",
          collapsable: false,
          children: [["ARE-Webserver.md", "Webserver"], ["REST-API", "REST"], ["asterics-wiki/api/AsTeRICS Websocket.md", "Websocket"]]
        },

        {
          title: "AT Solution",
          collapsable: false,
          children: [
            ["AT_solution_development", "Introduction"],
            ["AT-solution-demos", "Demos"],
            ["asterics-wiki/coding_instructions/AsTeRICS Solutions", "Tutorial"],
            ["APE", "AsTeRICS Packaging Environment (APE)"]
          ]
        }
      ],
      "/help/Plugins/": loadSidebarFrom({
        location: path.join(config.get("documentation"), "help", "Plugins"),
        pre: [["/help/", "Back to Help"]],
        post: [],
        exclude: []
      }),
      "/help/": loadSidebarFrom({
        location: path.join(config.get("documentation"), "help"),
        pre: [["", "Introduction"], ["User-Interfaces", "User Interfaces"], ["Tutorials", "Tutorials"]],
        sidebar: [["ACS/ACS_Basic_Functions", "Basic"]],
        post: [["Plugins/Introduction", "Plugins"]],
        exclude: [/Plugins/]
      })
    },
    sidebarDepth: 1,
    diplayAllHeaders: true, // default
    lastUpdated: "Last Updated"
  }
};

function loadSidebarFrom({ location, pre, post, exclude }) {
  let sidebar = fs.readdirSync(location);

  /* First level only directories */
  sidebar = sidebar.filter(e => fs.statSync(path.join(location, e)).isDirectory());

  /* Filter exclude */
  sidebar = sidebar.filter(e => !exclude.some(r => r.test(e)));

  /* Map to first level entry */
  sidebar = sidebar.map(e => ({ title: e, collapable: true, children: null })); //abs: path.join(location, e) }));

  /* Append children for each entry */
  sidebar.forEach(e => {
    let children = fs.readdirSync(path.join(location, e.title));

    /* Filter markdown files, only */
    children = children.filter(child => /.*md$/.test(child));

    /* Remove file extension */
    children = children.map(child => child.replace(/\.md$/, ""));

    /* Construct arrays containing link and title */
    children = children.map(child => {
      let title = child.replace(/_/g, " ");
      let link = `${e.title}/${child}`;

      return [link, capitalize(title)];
    });

    e.children = children;
  });

  /* Capitalize titles */
  sidebar = sidebar.map(e => ({ ...e, title: capitalize(e.title) }));

  return [...pre, ...sidebar, ...post];
}

function capitalize(words) {
  return words
    .split(" ")
    .map(word => [word.charAt(0).toUpperCase(), word.slice(1)].join(""))
    .join(" ");
}
