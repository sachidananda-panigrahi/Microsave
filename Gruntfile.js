module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            dist: {
                src: [
                    'js/jquery-1.10.2.min.js',
                    'js/jquery-ui.min-1.10.3.js',
                    'js/jquery.carouFredSel-6.2.1-packed.js',
                    'js/jquery.cycle2.min.js',
                    'js/modernizr-2.6.2.min.js',
                    'js/bootstrap.js',
                    'js/classie.js',
                    'js/custom.js'
                ],
                dest: 'js/build/production.js',
                nonull: true
            }
        },

        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
                    '<%= grunt.template.today("yyyy-mm-dd") %> */'
            },
            build: {
                src: 'js/build/production.js',
                dest: 'js/build/production.min.js'
            }
        },

        compass: {
            dist: {
                options: {
                    /*httpPath:"../",*/
                    sassDir: 'sass',
                    cssDir: 'css'
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
                    'css/production.min.css': [
                        'css/bootstrap.css',
                        'css/bootstrap-responsive.css',
                        'css/component.css',
                        'css/slideshow.css',
                        'css/fonts/fonts.css',
                        'css/style.css'
                    ]
                }
            }
        },

        watch: {
            // gruntfile: {
            //   files: 'Gruntfile.js',
            //   tasks: ['notify:gruntChange'],
            // },
            scripts: {
                files: ['js/*.js', 'js/libs/*.js'],
                tasks: ['concat', 'uglify']
            },
            csstosass: {
                files: ['sass/*.sass'],
                tasks: ['compass']
            },
            css: {
                files: ['css/*.css'],
                tasks: ['cssmin']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default', ['concat','uglify','compass','cssmin','watch']);
};