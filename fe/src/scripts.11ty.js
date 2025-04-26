// scripts.11ty.js

// See https://mxb.dev/blog/eleventy-asset-pipeline/
// for a more detailed explanation of this technique


import path from 'node:path';
import fs from 'node:fs';

import * as esbuild from 'esbuild'

const ENTRY_POINTS = {
    // 'generators-index': './src/generators/index.js',
    // 'initiative-index': './src/tools/tracker/index.js',
    // 'item-index': './src/generators/item/index.js',
    // 'music-index': './src/tools/music/index.js',
    // 'sigil-tests-index': './src/generators/sigil-tests/index.js',
    // 'currency-index': './src/references/currency/index.js',
}

// export default ScriptFromEntryPoint()

export default class{
    // again, the data() function does esentially the same
    // as defining front matter in a markdown file.
    async data() {
        return {
            // define a custom property "entryPoints" first
            entryPoints: ENTRY_POINTS,

            // then take each of the files in "entryPoints"
            // and process them separately as "bundleName"
            pagination: {
                data: 'entryPoints',
                alias: 'bundleName',
                size: 1
            },

            // for each bundle, output a different Javascript file
            permalink: ({ bundleName }) => `/assets/scripts/${bundleName}.js`,

            // keep the scripts.11ty.js itself out of collections
            eleventyExcludeFromCollections: true
        }
    }

    // a custom helper function that will be called with
    // each separate file the template processes.
    async compileJS(bundleName) {
        const entryPoint = path.join(process.cwd(), ENTRY_POINTS[bundleName])
        const code = fs.readFileSync(entryPoint, 'utf-8');
        // const code = "function add(first, second) { return first + second; }";
        // console.log(code)
        const result = await esbuild.build({
            entryPoints: [entryPoint],
            format: 'esm',
            bundle: true,
            treeShaking: true,
            minify: false,
            write: false,
        });
        // console.log(result.outputFiles[0].text)
        return result.outputFiles[0].text;
    }

    // output the compiled JS as file contents
    async render ({ bundleName }) {
        try {
            return await this.compileJS(bundleName)
        } catch (err) {
            console.log(err)
            return null
        }
    }
}