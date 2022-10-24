import esbuild from "esbuild";
import dotenv from "dotenv";

const { parsed } = dotenv.config();
const define = {}

for (const key of Object.keys(parsed)) {
  define[`process.env.${key}`] = `"${parsed[key]}"`;
}

async function run() {
  esbuild.build({
    entryPoints: ["src/index.ts"],
    bundle: true,
    minify: true,
    outfile: "static/js/auth.js",
    define
  })
}

run();