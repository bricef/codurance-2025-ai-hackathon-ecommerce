
// import * as dates from './src/_11ty/filters/dates.js'


export default async function(config) {

    // Dev Server optionss
    config.setServerOptions({
		port: 8080,

		// Additional files to watch that will trigger server updates
		// Accepts an Array of file paths or globs (passed to `chokidar.watch`).
		// Works great with a separate bundler writing files to your output folder.
		// e.g. `watch: ["_site/**/*.css"]`
		watch: [],
		showVersion: true,
		indexFileName: "index.html",
	});

    // Filters
    // config.addFilter('friendlyDate', dates.friendly)
    // config.addFilter('timestamp', dates.timestamp)
    
    // Passthrough
	config.addPassthroughCopy("src/assets/img/*.*");
    config.addPassthroughCopy("src/assets/snd/*.*");
    config.addPassthroughCopy("src/assets/*.*");
    config.addPassthroughCopy("src/**/*.css")
    config.addPassthroughCopy("src/**/*.json")

    config.addWatchTarget("src/assets/*.*");
    config.addWatchTarget("src/**/*.css")
    config.addWatchTarget("src/**/*.json")
    config.addWatchTarget("src/**/*.js")

    // eleventyConfig.addPassthroughCopy('site/assets');
    // eleventyConfig.addPassthroughCopy('site/admin');
    // eleventyConfig.addPassthroughCopy('site/favicon.ico');
    // eleventyConfig.addPassthroughCopy('site/robots.txt');
    // eleventyConfig.addPassthroughCopy('site/humans.txt');
    // eleventyConfig.addPassthroughCopy('site/manifest.json');
    // eleventyConfig.addPassthroughCopy('site/sw.js');
    // eleventyConfig.addPassthroughCopy('site/_redirects');
    // eleventyConfig.addPassthroughCopy('site/_headers');
    // eleventyConfig.addPassthroughCopy('site/.well-known');
};

export const config = {
    markdownTemplateEngine: 'njk',
    templateFormats: ['html', 'njk', 'md', '11ty.js'],
    dir: {
        input: 'src',
        output: 'public',
        includes: '_includes',
        data: '_data'
    }
}
