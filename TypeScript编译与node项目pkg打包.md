#### Typescrip项目编译
- 配置tsconfig.json
```  
"skipLibCheck": true,
"allowSyntheticDefaultImports": true
这两个编译选项是为了解决依赖模块中的问题。
{
  "compilerOptions": {
    "module": "commonjs",
    "declaration": false,
    "noImplicitAny": false,
    "removeComments": true,
    "noLib": false,
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "target": "es2017",
    "sourceMap": true,
    "charset": "utf8", // 文档格式
    "allowJs": true,
    "outDir": "./dist",
    "resolveJsonModule": true,
    "esModuleInterop": true,
    "pretty": true,
    "skipLibCheck": true,
	"allowSyntheticDefaultImports": true,
    "rootDir":"src"
  },
  "include": [
    "src/**/*"
  ],
  "exclude": [
    "node_modules",
    "**/*.spec.ts"
  ]
}
```
- tsc 命令会编译整个项目，到dist目录下，编译为JS项目

#### pkg打包

- 在package.json中加入如下配置
```
"bin": "./dist/app.js",
    "pkg": {
        "scripts": [
            "./dist/**/*.js"
        ],
        "assets": [
            "dist/*.json",
            "dist/*.sh"
        ]
    },
    "scripts": {
        "start": "node index.js",
        "pkg-win": "pkg . -t node10-win-x64 -o ./build/app.exe",
        "pkg-l": "pkg . -t node10-linux-x64 -o ./build/app"
    }
scripts:是要打包的js，pkg打包只会打包项目依赖的文件，动态require无法识别
asserts：资源文件，项目依赖的静态资源
项目会新建一个虚拟的工作目录：__dirs 会指向此目录，注意使用，process.cwd()会指向宿主机目录
注意不同操作系统的打包命令不一样
```

#### pkg打包后的配置文件
- 将原始的配置文件抽取，参考下面的模板
  
  ```

    import fs from 'fs';
    import defaultConfig  from './default' //默认配置
    import logger from '../util/log' // log

    let configJson ;
    try {

    configJson =JSON.parse(fs.readFileSync(

    process.cwd() +'/gongdao.config.json', //读取宿主机的配置文件。还可以与默认配置混合

      'utf-8'));

    }catch (e) {
    logger.info("load default config");
      configJson =null;

    }

    let config =configJson ?configJson : defaultConfig;

    export default config ;
                      
  ```
