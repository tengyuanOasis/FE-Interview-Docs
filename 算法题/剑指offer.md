---
cover: 'https://source.unsplash.com/user/erondu/1440x960'
coverWidth: 1200
coverHeight: 750
title: 算法
categories: 算法
tags: 算法
top:
permalink: 
---

[1/二维数组中的查找](#1/ 二维数组中的查找)

[2/ 替换空格](#2/ 替换空格)







#### 1/ 二维数组中的查找

> 在一个二维数组中（每个一维数组的长度相同），每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。
>
> demo:
>
> - 输入
>
>   ```
>   7,[[1,2,8,9],[2,4,9,12],[4,7,10,13],[6,8,11,15]]
>   ```
>
> - 输出
>
>   ```
>   true
>   ```

```
function Find(target, array) {
  for(let i=0;i<array.length;i++){
    if(array[i].indexOf(target)!==-1){
      return true
    }
  }
  return false
}
```

#### 2/ 替换空格

> 请实现一个函数，将一个字符串中的每个空格替换成“%20”。例如，当字符串为We Are Happy.则经过替换之后的字符串为We%20Are%20Happy。

```
function replaceSpace(str)
{
  return str.replace(/ /g,'%20')
}
```

