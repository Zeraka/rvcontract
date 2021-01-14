var qs = require('querystring');

var str = 'asfdb;\nwesfpjoing;\nwbfliqwbefpwqufn\nasfdwe\nsafewt\nqwern\nvar\ntgwtg\n\nftwg\n';

/*
for(line in str){
    console.log(line)
}
*/
strlist = str.split('\n');
newstr='';
for(i =0;i < strlist.length;++i)
{
    //console.log(strlist[i]);
    if(strlist[i].indexOf("wern") != -1){
        strlist[i] += "\nxxxxxyyyyy";
    }
    newstr = newstr + strlist[i] + '\n';
}

console.log(newstr);

/*
将string按照\n切分变为字符串列表，然后遍历该列表，

split()方法便是将字符串分割为字符串数组。

检查某字符子串是否存在于字符串中，用indexOf()

'hello word'.indexOf('hello');
如果失败返回-1，成功则返回指定的字符串第一次出现的位置
lastindexof()是返回最后一次出现的位置。


*/