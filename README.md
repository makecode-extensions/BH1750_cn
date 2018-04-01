# BH1750
makecode 的 BH1750 数字环境光强传感器 microbit 软件包

作者: shaoziyang  
日期: 2018.Mar  

![](https://raw.githubusercontent.com/microbit-makecode-packages/BH1750_cn/master/icon.png)  
  
![](https://raw.githubusercontent.com/microbit-makecode-packages/BH1750_cn/master/GY-30.jpg)

## 使用方法

打开 makecode 编辑器，在项目中选择添加软件包，然后在地址栏输入下面网址  

https://github.com/microbit-makecode-packages/BH1750_cn  

搜索后就可以添加并使用本软件包了。

## I2C 地址  
- 35/92  
与ADDR信号有关 

## API

- **SetAddress**(addr: BH1750_ADDRESS)  
to 是 BH1750 的I2C地址，它是 35 或 92  

- **on**()  
打开 BH1750，开始进行数据转换。

- **off**()
关闭 BH1750，进入省电模式。

- **getIntensity**()  
获取环境光强度的数据

## 演示

![](https://raw.githubusercontent.com/microbit-makecode-packages/BH1750_cn/master/demo.jpg)

## 授权方式

MIT

microbit/micropython 中文社区版权所有 (c) 2018  

## 支持硬件

* for PXT/microbit


[来自 microbit/micropython 中文社区](http://www.micropython.org.cn) 