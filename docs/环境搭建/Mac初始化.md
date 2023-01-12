
### Mac设置

* 设置-触控板-光标与点按-轻点来点按
* 设置-触控板-更多手势-App Expose-四指向下轻扫
* 设置-辅助功能-指针控制-触控板选项-启动拖移-三指拖移
* 设置-安全性与隐私-通用-允许从以下位置下载的APP
* 设置-桌面与屏幕保护程序-动态桌面
* 设置-锁定屏幕-使用电池供电且不活跃时关闭显示器-调整大
* 拖动文件如何自动整理？
* 备忘录-编辑-拼写和语法-自动纠正拼写关闭
* 启动台系统软件隐藏起来
* 常用快捷键
	* command + shift + . 查看隐藏文件夹
	* command + shift + g 前往文件夹(可用Alfred替代)
	* command + option + esc 强制结束
	* command + option + h + m 显示桌面

## Mac软件安装

### 官网下载安装包下载

* QQ
* 微信
* 百度网盘
* 迅雷
* Sourcetree
* IINA
* Fliqlo
* Postman

* 网易云音乐
	* 体验不如Apple Music，少了空间音频
	
* Obsidian
	* 设置-关于-语言

* Termius
	* 类似的还有SecureCRT、MobaXterm

* Tecent Lemon
	* 不要在App Store下载
	* 应用程序无法卸载就用lemon，或者拖动到垃圾篓里试试

* Google Chrome
	* 设置-搜索引擎-百度
	* 扩展程序：infinity新标签页（PRO）、OneTab、SimpleUndoClose、Tab Position Options、购物党自动比价工具
	* 导入收藏夹（放在github docsify-blog中），书签-显示书签栏

* 上网
	* Github搜
	
* iterm
	* 官网下载
	* [iTerm2 + Oh My Zsh打造舒适终端体验](https://github.com/sirius1024/iterm2-with-oh-my-zsh)
		* echo $SHELL
		* 安装Oh My Zsh可以考虑使用下面的，否则可能因为网络的原因无法安装
		* PowerLine、配色、主题貌似都有了不需要再安装，插件的安装可以使用下面文档的方式
	* [linux 或 mac 上安装 zsh 以及自动提示 / 语法高亮等](https://my.oschina.net/who7708/blog/2961842)
	* 字体调整到15

* Visual Studio Code
	* 官网下载
	* 解压后拖动到应用程序里，启动台才展示
	* 字体大小设置为15
	* 插件：
		* Chinese
		* python（根据提示安装）

* IntelliJ IDEA
	* 官网下载
	* 版本2020.3
	* 项目路径：cd ~/IdeaProjects  或者 /Users/xkx/IdeaProjects
	* 支持自动安装JDK，安装JDK11和JDK17，环境变量自动配置好了
		* echo $PATH
		* where java
		* which java
	* File ｜Other Settings ｜Preferences For New Projects才是对全部项目生效
	* 字体大小设置为20
	* 代码签名设置
		* Preferences｜Editor | File and Code Template | Includes设置代码签名
		```java
		/**
		 * @author xiangkexin <xiangkx2018@outlook.com>
		 * Created on ${YEAR}-${MONTH}-${DAY}    
		 */
		```

	 * JVM内存配置
		 * Help ｜ Edit Custom VM Options
		```java
		-Xms1g
		-Xmx4g
		-XX:ReservedCodeCacheSize=1g
		```
	 * Maven配置
		 * Preferences｜Build, Execution, Deployment | Build Tools | Maven
			 * 勾选Always update snapshots
			 * importing｜VM options for importer -Xmx2000m
			 * Maven home path 
				 * /opt/homebrew/Cellar/maven/3.8.7/libexec
			 * User settings file
				 * /opt/homebrew/Cellar/maven/3.8.7/libexec/conf/settings.xml
	* 编译堆内存
		* Preferences｜Build, Execution, Deployment | Compiler
			* Build process heap size(Mbytes):2000
	* Java8 parameters设置（Required）
		* Preferences｜Build, Execution, Deployment | Compiler｜Java Compiler
			* Additional Command line parameters增加-parameters
	* optimize import配置（required）
		* Save Actions
		* Editor｜General｜Auto Import
			* Optimize imports on the fly
	* properties文件转义设置
		* Preferences｜Editor | File encodings
			* 勾选Transparent native-to-ascii conversion

	* 插件plugins.zhile.io
		* 格式化配置
		* Import Order
		* SonarLint
		 
		* arthas idea
		* Builder Generator
		* CamelCase
		* CheckStyle-IDEA
		* Easy Code
		* GenerateAllSetter
		* GitToolBox
		* GsonFormatPlus
		* IDE Eval Reset
		* Maven Helper
		* PlantUML integration
		* Protobuf Support
		* Rainbow Brackets
		* RestfulTool
		* RestfulTookit
		* Save Actions
		* SequenceDiagram
		* Sql Generator

### APP Store下载

* Xnip
* Manico
* 超级右键
	* App Store安装，
	* 设置-隐私与安全性-扩展-添加的扩展-添加超级右键
	* 关闭一些不需要的功能


### 破解版下载

[Mac软件](https://xclient.info/)

* charles
	 * 如何抓包
* Dash
* Magnet
* Navicat
	* [Mac 电脑如何关闭 sip？](https://www.zhihu.com/question/558739052)
* SnippetsLab
* Parallels DeskTop

* Alfred 5
	* 打开剪切板设置，设置快捷键
	* Alfred和Spotlight快捷键替换
	* Web Search全部禁用掉，
		* google留下改成gg
		* 新增https://www.baidu.com/s?wd={query}
		* Default Results修改为百度
		* 新增https://github.com/search?q={query}
	 * SnippetsLab
	 * 考虑使用java脚本
	 * json插件？一直不关闭alfred
	 * 插件
		 * [timestamp-workflow](https://github.com/xindoo/timestamp-workflow)
			 * 依赖python2
		 * [YoudaoTranslator](https://github.com/wensonsmith/YoudaoTranslator)
		 * [alfred-web-search-suggest](https://github.com/zqzten/alfred-web-search-suggest)
			* brew install php
			* 代理设置为http://192.168.18.217:7890
				* 默认只有浏览器使用代理，需要开启允许来自局域网的连接
				* ifconfig查看ip地址，代理查看端口号
		* [alfred-browser-tabs](https://github.com/epilande/alfred-browser-tabs)
			* [Search_Safari_and_Chrome_Tabs_alfred](https://github.com/barn/Search_Safari_and_Chrome_Tabs_alfred)
				* 下载链接：[Search Browser Tabs](http://www.packal.org/workflow/search-safari-and-chrome-tabs)
			* [alfred-tabs](https://github.com/importre/alfred-tabs)
		* [chrome-bookmarks-alfred-workflow](https://github.com/mdreizin/chrome-bookmarks-alfred-workflow#readme)
			* 书签搜索不太好用
		* [alfred-chrome-history](https://github.com/tupton/alfred-chrome-history)
		* [CodeVar](https://github.com/xudaolong/CodeVar)
			* 依赖nodeJs，去官网安装
		* [AlfredWorkflow-Recent-Documents](https://github.com/mpco/AlfredWorkflow-Recent-Documents)
		* [alfred-fakeum](https://github.com/deanishe/alfred-fakeum)
			* [解决不兼容的问题](https://github.com/giovannicoppola/alfred-fakeum)
		* [alfred-ip-address-workflow](https://github.com/alexchantastic/alfred-ip-address-workflow)
		* [alfred-terminalfinder](https://github.com/LeEnno/alfred-terminalfinder)
		* [json-formatter-alfred-workflow](https://github.com/gymgle/json-formatter-alfred-workflow)
	 * [Alfred 修改内置 Terminal 为 iTerm2](https://ld246.com/article/1567998289912)
	
```shell
 -- 原来自带的
 on alfred_script(q)
	tell application "Terminal"
		activate
		do script q
	end tell
end alfred_script
```


```

-- This is v0.6 of the custom script for AlfredApp for iTerm 2.9+
-- Please see https://github.com/stuartcryan/custom-iterm-applescripts-for-alfred/
-- for the latest changes.

-- Please note, if you store the iTerm binary in any other location than the Applications Folder
-- please ensure you update the two locations below (in the format of : rather than / for folder dividers)
-- this gets around issues with AppleScript not handling things well if you have two iTerm binaries on your system... which can happen :D

on alfred_script(q)
	if application "iTerm2" is running or application "iTerm" is running then
		run script "
			on run {q}
				tell application \":Applications:iTerm.app\"
					activate
					try
						select first window
						set onlywindow to true
					on error
						create window with default profile
						select first window
						set onlywindow to true
					end try
					tell the first window
						if onlywindow is false then
							create tab with default profile
						end if
						tell current session to write text q
					end tell
				end tell
			end run
		" with parameters {q}
	else
		run script "
			on run {q}
				tell application \":Applications:iTerm.app\"
					activate
					try
						select first window
					on error
						create window with default profile
						select first window
					end try
					tell the first window
						tell current session to write text q
					end tell
				end tell
			end run
		" with parameters {q}
	end if
end alfred_script
```


### 命令行安装

* Homebrew
	* 官网复制命令，可能无法访问。修改hosts或者使用其他镜像
	* [修改hosts](https://blog.csdn.net/qq_43531694/article/details/106862753)
		* [查询IP](https://www.ipaddress.com/)
		* cd /etc
		* sudo cp hosts hosts_bak
		* sudo vim hosts
	* [使用镜像](https://www.bilibili.com/read/cv10229149/)
	* brew -v验证是否正常安装

* Git
	* Homebrew安装： brew install git
	* xcode-select自带：xcode-select —install
		* 自带了一些编译器？java，gcc
		* mac 目前自带python3，没有python2了

* MySQL
```
brew install mysql@5.7

echo 'export PATH="/usr/local/opt/mysql@5.7/bin:$PATH"' >> ~/.zshrc
source ~/.zshrc

mysql.server start

mysql -uroot

// 启动后执行
mysql_secure_installation	
```



* Maven
```
brew install maven


## 文件位置 ~/.zshrc
 
# 设置 JDK 8
export JAVA_8_HOME="~/Library/Java/JavaVirtualMachines/corretto-1.8.0_352/Contents/Home"
# 设置 JDK 11
export JAVA_11_HOME="~/Library/Java/JavaVirtualMachines/corretto-11.0.17/Contents/Home"
# 设置 JDK 17
export JAVA_17_HOME="~/Library/Java/JavaVirtualMachines/corretto-17.0.5/Contents/Home"
 
#默认JDK 8
export JAVA_HOME=$JAVA_8_HOME
 
#alias命令动态切换JDK版本
alias jdk8="export JAVA_HOME=$JAVA_8_HOME"
alias jdk11="export JAVA_HOME=$JAVA_11_HOME"
alias jdk17="export JAVA_HOME=$JAVA_17_HOME"


echo 'export PATH=/opt/homebrew/opt/maven/bin:$PATH' >> ~/.zshrc

# 建立软链ln -fsv $(pwd)/src/main/resources/settings.xml 指向 软链地址
source ~/.zshrc

```
	
 

todo:开发工具的初始化单独弄一些文档
虚拟机搭建多节点
ipad mac联动
(PicGo、Acrobat)

虚拟机重新走一遍流程