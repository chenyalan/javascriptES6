# javascriptES6
Ethan Brown-JavaScript 手工敲打

先介绍本项目使用的工具
1.Git
  会push pull clone  fix-conflicts就好

2.Node & Npm
  https://nodejs.org/zh-cn/ 
  推荐v6那个版本
  呃呃呃具体操作，访问 http://blog.csdn.net/zoeylchen/article/details/77933912

3.Gulp
  构建工具

4.Babel
  转换编译器 
  可以将ES6的代码转换成便于使用的ES5代码

5.ESLint
  一个可以帮助避免常见错误，格式检查工具

工欲善其事，必先李琪琪

下面介绍几个文件
1.package.json
  项目目录结构创建好以后直接在命令终端敲：npm init 刷新自动生生成
  多说一句 所有用npm装的包最好带上--save-dev(或者--save)这样才能在package.json里看到依赖情况

2..babelrc
  在根目录手动创建该文件，内容就是你看到的那么点
  这样，Babel就可以识别项目所有ES6的地方了，其实也不对，
  本人用的webstorm编辑器默认Ecmascript5,要想不报错，还需在file-settings-languages-javascript切换成Ecmascript6
  
3.gulpfile.js
  右击新建js文件，命名
  
4..eslintrc.json
  不是手动创建的文件，要在安装好npm install -g eslint 之后
  在项目根目录，运行eslint --init，需要回答一些问题
  然后在gulpfile.js里把这个模块加上====> 常量 eslint

运行

1.直接在终端命令里输入gulp

2.测试test.js
  node es6/test.js
  巴拉巴拉 

over

  
  
