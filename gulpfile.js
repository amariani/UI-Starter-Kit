/**********************************************************
**********  Declaración e Iniciación de Plugins  **********
**********************************************************/

// Gulp
var gulp = require('gulp');

// Plugins
var less = require('gulp-less');
var plumber = require('gulp-plumber');
var prefix = require('gulp-autoprefixer');
var minifyCSS = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var imagemin = require('gulp-imagemin');
var browserSync = require('browser-sync').create();

/**********************************************************
**********        Variables del Proyecto        **********
**********************************************************/
var project_name = "ui_starter_kit";
var project_base = "./";

/**********************************************************
**********        Configuración de Rutas        **********
**********************************************************/

// Rutas principales
var source_path = 'src/';
var assets_path = 'assets/';
var bower_path = 'bower_components/';
var bootstrap_path = bower_path + 'bootstrap/dist/';

// Rutas Source
var paths = {
    images:          [source_path + 'imgs/**'],
    scripts:         [source_path + 'js/*.js'],
    less:            [source_path + 'less/*.less'],
    vendor_fonts:    [
        bower_path + 'font-awesome/fonts/**',
        bootstrap_path + 'fonts/**'
    ],
    vendor_scripts:  [
        bower_path + 'jquery/dist/jquery.min.js',
        bootstrap_path + 'js/bootstrap.min.js',
        source_path + 'js/ie10-viewport-bug-workaround.js',
        // Animations Plugins
        source_path + 'js/classie.js',
        source_path + 'js/cbpAnimatedHeader.js',
        // Contact Form JavaScript
        source_path + 'js/jqBootstrapValidation.js',
        source_path + 'js/contact_me.js'
    ]
};

// Rutas de destino
var destination_paths = {
    images:   assets_path + 'img',
    css:      assets_path + 'css',
    js:       assets_path + 'js',
    fonts:    assets_path + 'fonts'
};

// Browsersyn Watcher Routes
var watchPaths = {
    html:      '*.html',
    images:    project_base + destination_paths.images + '/*.*',
    css:       project_base + destination_paths.css + '/*.css',
    js:        project_base + destination_paths.js + '/*.js'
};

/**********************************************************
**********              FUNCIONES               **********
**********************************************************/

// Copy function
gulp.copy = function(src,dest){
    return gulp.src(src)
        .pipe(gulp.dest(dest));
};

gulp.copyBase = function(src,dest){
    return gulp.src(src, {base:"."})
        .pipe(gulp.dest(dest));
};

/**********************************************************
**********              Gulp TASKS              **********
**********************************************************/

// Copia los Vendor Fonts a assets
gulp.task('copyVendorFonts', function() {
    return gulp.copy(paths.vendor_fonts, destination_paths.fonts);
});

// Compila archivos less y minifica a styles.min.css
gulp.task('buildLess', function() {
    gulp.src(source_path + 'less/' + project_name + '.less')
        .pipe(less({ compress: false }))
        .pipe(minifyCSS())
        .pipe(concat('styles.min.css'))
        .pipe(gulp.dest(destination_paths.css));
});

// Vendor Scripts
gulp.task('vendorScripts', function(){
    gulp.src(paths.vendor_scripts)
        .pipe(concat('plugins.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(destination_paths.js));
});

// Uglify JS
gulp.task('uglify', function() {
    gulp.src(paths.scripts)
        .pipe(plumber())
        .pipe(uglify({
            outSourceMap: true
        }))
        .pipe(gulp.dest(destination_paths.js));
});

// Comprime imagenes
gulp.task('imagemin', function() {
    gulp.src(paths.images)
        .pipe(plumber())
        .pipe(imagemin())
        .pipe(gulp.dest(destination_paths.images));
});

/**********************************************************
**********              Watcher Task            **********
**********************************************************/

// Watch files
gulp.task('watch', function(event) {

    // Browsersync inicia el servidor desde el root del proyecto
    browserSync.init({
        server: {
            baseDir: project_base
        }
    });

    gulp.watch(paths.less, ['buildLess']);
    gulp.watch(paths.images, ['imagemin']);
    gulp.watch(paths.vendor_fonts, ['copyVendorFonts']);
    gulp.watch(paths.scripts, ['uglify']);

    //Browsersync Watcher
    gulp.watch([
        watchPaths.html,
        watchPaths.images,
        watchPaths.css,
        watchPaths.js
    ]).on("change", browserSync.reload);
});

gulp.task('fullBuild', ['buildLess', 'imagemin', 'copyVendorFonts', 'vendorScripts', 'uglify']);
gulp.task('default', ['vendorScripts', 'watch']);
