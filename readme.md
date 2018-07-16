### requireJS demo

学习requireJS时候写的demo，实现模块的分离和调用，打包输出等

参考文献

https://www.cnblogs.com/HCJJ/p/6611669.html

http://www.requirejs.cn/docs/api.html

https://www.cnblogs.com/rubylouvre/p/4262569.html

https://segmentfault.com/a/1190000002403806

```
npm run build  // 压缩合并js模块

```

合并的js模块输出到dist目录，调用的时候，把html文件中的`<script src="js/require.js" data-main="js/index.js"></script>`改成dist目录下的即可。其他页面类似

