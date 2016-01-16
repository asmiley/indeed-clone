module.exports = {
  browsersync: {
    development: {
      server: './app',
      logLevel: 'info',
      files: [
        './app/*.html',  
        './app/js/*.js',
        './app/images/**',
        './app/css/*.css',
      ]
    }
  },
  sass: {
    src: './src/scss/**/*.{sass,scss}',
    dest: './src/css',
    options: {
      noCache: true,
      bundleExec: true,
      sourcemap: true
    }
  },
  autoprefixer: {
    browsers: [
      '> 3%',
      'safari 5',
      'ie 8',
      'ie 9',
      'opera 12.1',
      'ios 6',
      'android 4'
    ],
    cascade: true,
  },
  images: {
    src: './src/images/**/*.*',
    dest: './app/images/'
  },
  watch: {
    haml: './src/*.haml',
    sass: './src/scss/**/*.{sass,scss}',
    scripts: './src/javascripts/**/*.js',
    images: './src/images/**/*.*'
  },
  optimize: {
    js: {
      src: './src/js/*.js',
      dest: './app/js/',
      options: {}
    }
  },
  jshint: {
    src: './src/javascripts/*.js'
  }
};
