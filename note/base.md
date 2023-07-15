# 提供者

用命令行创建提供者

g 创建服务 s 服务 --no-spec 不创建测试文件 --flat 不加文件夹 -d 模拟创建服务

```
nest g s [服务名] --no-spec --flat
```

## 类类型

```js
  providers: [
    { provide: 'AppService', useClass: AppService },
    {
      provide: KkService,
      useClass: KkService,
    },
  ],
```

```js
  constructor(
    @Inject('AppService') // 找到提供者名字
    private readonly appService: AppService, // 提供类型支持
  ) {}
```

如果使用

```js
constructor(
    private readonly appService: AppService, // AppService包括从提供者list中找到提供和提供类型支持
  ) {}
```

## 值类型

```js
{
    provide: 'appName',
    useValue: 'kk',
},
```
