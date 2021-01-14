Caterpillar的executepanel的结构如何？





关键字查找“solidity”信息。 models.parsers.js的246行开始是将BPMN转换为solidity的。models.parsers.js是由ts代码生成的。每次ng serve都会重新启动。
如果要将生成的solidity代码二次修改，要么动态地每次修改model.parsers.js，要么直接在ts层面修改代码。

得到bpmn中的LTL， js中调用python, 用python将LTL解析，得到事件，事件名和函数名部分匹配， 通过事件找到函数，在函数中插入事件。
其实就是任务。在任务中插入事件。
bpmn2sol.ejs是如何输出的？

将LTL的思路解决的话，就会有其他的设备了？？ 


typescript代码最后会被解析为js代码，在executePanel每次运行的时候，会解析一次ts.


localSolidity是否为字符串类型？



在models.parsers.ts中添加打印localSolidity的指令，发现localSolidity确实是由bpmn生成的solidity代码。
因此，接下来需要处理在该代码中插入事件指令。同时也要生成web3js的相应代码。

首先完成对solidity的处理。


Caterpillar会根据model生成两个合约对象。 contract xxx_Factory is AbstractFactory 和contract xxx_Contract is AbstractProcess ,
xxx是bpmn模型的id名称。


如何二次开发Caterpillar的Core?

## Caterpillar使用问题
使用Usertask，必须要绑定User 是具体哪一个

## ts中打印内容


1.在bpmn2sol.ejs中加入事件机制。声明事件变量。
2.对每个solidity代码进行二次分析，如果满足条件， 
3.对meimei
LTL如何接收到，以及将LTL如何进行处理？ 
LTL暂时通过客户端进行输入。



ng serve 执行了什么内容？

增加哪些东西呢？

先把论文的内容，修改完成，

you have done it well.
that is the 1st step.