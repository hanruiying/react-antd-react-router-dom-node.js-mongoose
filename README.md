## 自己最近学习了React和node.js以及mongoose所以学了简单的后台管理系统以及前后台接口来巩固最近学习的知识<br>
### React 起源于 Facebook 的内部项目，用于构建用户界面的 JavaScript 库<br>
主要通过搭建的react脚手架进行的开发，前端的主要技术是react+antd+es6/es7+react-router-dom+redux+axios，后台主要用到的是nodejs+express+mongoose，后台只写了部分接口
```
  运行：
  安装项目依赖资源
  npm install
  运行前台项目
  npm start
  进到server目录，运行node app.js运行后台项目
  node app.js
```
### 下面记录一下React的一些我之前的一些学习的笔记,方便以后看吧<br>
* 父子组件之间通讯<br>
  父组件向子组件通过props传值
* 子组件向父组件传值<br>
  还是通过父组件像子组件传递props的函数，需要父组件传递回调函数给子组件，子组件调用触发即可
* 非父子组件时间传值:Context<br>
  Context 通过组件树提供了一个传递数据的方法，从而避免了在每一个层级手动的传递 props 属性
* 
```
  React.createContext：创建一个上下文的容器(组件), defaultValue可以设置共享的默认数据<br>
  const {Provider, Consumer} = React.createContext(defaultValue);
  <Provider value={/*共享的数据*/}>
    /*里面可以渲染对应的内容*/
  </Provider>
  Consumer:Consumer需要嵌套在生产者下面。才能通过回调的方式拿到共享的数据源。当然也可以单独使用，那就只能消费到上文提到的defaultValue
  <Consumer>
    {value => /*根据上下文  进行渲染相应内容*/}
  </Consumer>
  具体用法参考https://www.jianshu.com/p/65b348bf86ad
```
* redux库的具体用法参考：<br>
  https://blog.csdn.net/youlinaixu/article/details/90579075
* react-router-dom的一些用法我也记录了一下:<br>
  https://blog.csdn.net/youlinaixu/article/details/90734548
  项目截图：
![image](https://github.com/hanruiying/react-antd-react-router-dom-node.js-mongoose/blob/master/screenshoot/1.gif)<br>
![image](https://github.com/hanruiying/react-antd-react-router-dom-node.js-mongoose/blob/master/screenshoot/2.gif)<br>
