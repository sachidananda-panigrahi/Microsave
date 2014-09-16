module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            dist: {
                src: [
                    'assets/js/jquery-1.10.2.min.js',
                    'assets/js/jquery-ui.min-1.10.3.js',
                    'assets/js/angular.min.js',
                    'assets/js/jquery.carouFredSel-6.2.1-packed.js',
                    'assets/js/jquery.cycle2.min.js',
                    'assets/js/modernizr-2.6.2.min.js',
                    'assets/js/bootstrap.js',
                    'assets/js/classie.js',
                    'assets/js/custom.js',
                    'assets/js/app.js'
                ],
                dest: 'assets/js/build/production.js',
                nonull: true
            }
        },

        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
                    '<%= grunt.template.today("yyyy-mm-dd") %> */'
            },
            build: {
                src: 'assets/js/build/production.js',
                dest: 'assets/js/build/production.min.js'
            }
        },

        compass: {
            dist: {
                options: {
                    /*httpPath:"../",*/
                    sassDir: 'assets/sass',
                    cssDir: 'assets/css'
                    // environment: 'production'

                }
            }
        },

        cssmin: {
            add_banner: {
                options: {
                    banner: '/* My minified css file */'
                },
                files: {
                    'prod_css/production.min.css': [
                        'assets/css/bootstrap.css',
                        'assets/css/bootstrap-responsive.css',
                        'assets/css/component.css',
                        'assets/css/slideshow.css',
                        'assets/css/fonts/fonts.css',
                        'assets/css/style.css'
                    ]
                }
            }
        },

        watch: {
            gruntfile: {
               files: 'Gruntfile.js',
               tasks: ['notify:gruntChange']
            },
            scripts: {
                files: ['assets/js/*.js', 'assets/js/libs/*.js'],
                tasks: ['concat', 'uglify']
            },
            csstosass: {
                files: ['assets/sass/*.sass'],
                tasks: ['compass']
            },
            css: {
                files: ['assets/css/*.css'],
                tasks: ['cssmin']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-compass');

    grunt.registerTask('default', ['concat','uglify','cssmin','compass', 'haml','watch']);
};