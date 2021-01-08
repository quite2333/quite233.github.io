module.exports = function(grunt) {
    // grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('@lodder/grunt-postcss');
    // Project configuration.
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      // uglify: { 
      //   //使用options这个名声
      //   options: { 
      //       //为true表示允许添加头部信息
      //       stripBanners: true,
      //       //在头部添加 js文件名和时间的注释
      //       banner: '/*! <%=pkg.name%>-<%=pkg.version%>.js <%=grunt.template.today("yyyy-mm-dd") %> */\n'
      //   },
      //   //用于全部文件压缩
      //   // files: { 
      //   //     src: 'src/js/*.js',
      //   //     dest: 'dest/js/<%=pkg.name%>-<%=pkg.version%>.min.js',
      //   // }
      // //用于单个文件压缩
      //   files: { 
      //     expand:true,
      //     cwd:'src/',
      //     src: '*.js',
      //     dest: 'dest/js/',
      //     ext:'.min.js'
      // }
    //   autoprefixer:{
    //     options:{
    //         //任务设置
    //         browserslist:['last 2 versions','chrome','ie'],
    //         map:true,
    //     },
    //     single_file: {
    //         src: 'src/style.css',
    //         dest: 'dest/style.css'
    //     },
    // }
    // }
      // postcss: { 
      //   options: {
      //     processors: [
      //       require('autoprefixer')
      //     ]
      //   },
      //   dist: {
      //     src: 'src/style.css', 
      //     dest: 'dest/style.css'        
      //   }
      // } 
    // }
    postcss: {
      options: {
        // map: true, // inline sourcemaps
        // processors: [
        //   require('autoprefixer')()
        // ],
        // or
        // map: {
        //     inline: false, // save all sourcemaps as separate files...
        //     annotation: 'dist/css/maps/' // ...to the specified directory
        // },
  
        processors: [
          require('autoprefixer')({overrideBrowserslist:['last 2 versions']}),
          require('cssnano')() // minify the result
        ]
      },
      dist: {
          expand:true,
          cwd:'css/',
          src: '*.css',
          dest: 'dest/css/',
          ext:'.min.css'
      }
    }
  }
    );
  
    // 加载包含 "uglify" 任务的插件。
    // grunt.loadNpmTasks('grunt-autoprefixer');
    // grunt.loadNpmTasks('grunt-postcss')
    // 默认被执行的任务列表。
    grunt.registerTask('default', ['postcss']);
  
  };