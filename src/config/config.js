const path = require("path");

const envConfigPath = path.join(process.cwd(), "src/config/.env"),
  schemaPath = path.join(process.cwd(), "src/config/schema.json");

require("dotenv").config({ path: envConfigPath });
const convict = require("convict"),
  config = convict(schemaPath),
  { getReferenceInPath } = require("@asterics/git-tools");

/* Load configuration */
config.load({
  // versions: ["2.3", "2.5", "2.6", "2.7", "2.8", "3.0", "3.0.1", "pre-3.1"],
  versions: ["2.3", "pre-3.1"],
  submodules: [
    {
      name: "AsTeRICS",
      location: "src/external/asterics",
      reference: getReferenceInPath(process.cwd(), "AsTeRICS"),
      branch: "master"
    },
    {
      name: "AsTeRICS.wiki",
      location: "src/external/asterics-wiki",
      reference: getReferenceInPath(process.cwd(), "AsTeRICS.wiki"),
      branch: "master"
    }
  ],
  dependencies: [
    {
      repository: "AsTeRICS",
      source: "Documentation/docs",
      destination: "docs",
      recurse: true,
      filter: /\.(md|jpg|png)$/i,
      process: [{ rule: /\.(md|jpg|png)$/i, apply: "copy" }],
      postprocess: [{ rule: /\.md$/i, apply: ["select-version", "edit-link"] }],
      map: {
        "2.3": "pre-3.1",
        "2.5": "pre-3.1",
        "2.6": "pre-3.1",
        "2.7": "pre-3.1",
        "2.8": "pre-3.1",
        "3.0": "pre-3.1",
        "3.0.1": "pre-3.1"
      }
    },
    {
      repository: "AsTeRICS",
      source: "Documentation/ACS-Help/HTML",
      destination: "docs/help",
      recurse: true,
      filter: /\.(html?|jpg|png)$/i,
      process: [
        { rule: /\.html?$/i, apply: "html-to-markdown-copy" },
        { rule: /\.(jpg|png)$/i, apply: "lowercase" },
        { rule: /\.(jpg|png)$/i, apply: "copy" }
      ],
      postprocess: [{ rule: /\.md$/i, apply: ["remove-first-two-lines", "correct-image-path", "lowercase-image", "select-version", "edit-link"] }],
      map: {}
    }
  ]
});

/* Validate configuration with loaded schema */
config.validate({ allowed: "warn" });

module.exports = config;
