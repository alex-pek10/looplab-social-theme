# looplab-social-theme
> A Bootstrap 4 template

## Features

Please see our [gulpfile](app/templates/gulpfile.js) for up to date information on what we support.

* enable [ES2015 features](https://babeljs.io/docs/learn-es2015/) using [Babel](https://babeljs.io)
* CSS Autoprefixing
* Built-in preview server with BrowserSync
* Automagically compile Sass with [libsass](http://libsass.org)
* Automagically lint your scripts
* Map compiled CSS to source stylesheets with source maps
* Awesome image optimization

*For more information on what this generator can do for you, take a look at the [gulp plugins](app/templates/_package.json) used in our `package.json`.*


## libsass

Keep in mind that libsass is feature-wise not fully compatible with Ruby Sass. Check out [this](http://sass-compatibility.github.io) curated list of incompatibilities to find out which features are missing.

If your favorite feature is missing and you really need Ruby Sass, you can always switch to [gulp-ruby-sass](https://github.com/sindresorhus/gulp-ruby-sass) and update the `styles` task in gulpfile accordingly.


## Getting Started

- Install: `npm install --global yo gulp-cli generator-webapp`
- Run `yo webapp` to scaffold your webapp
- Run `npm start` to preview and watch for changes
- Run `npm start -- --port=8080` to preview and watch for changes in port `8080`
- Run `npm install --save <package>` to install dependencies, frontend included
- Run `npm run  serve:test` to run the tests in the browser
- Run `npm run  serve:test -- --port=8085` to run the tests in the browser in port `8085`
- Run `npm run build` to build your webapp for production
- Run `npm run serve:dist` to preview the production build
- Run `npm run serve:dist -- --port=5000` to preview the production build in port `5000`
