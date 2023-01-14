
### Mac设置

- 设置-触控板-光标与点按-轻点来点按
- 设置-触控板-更多手势-App Expose-四指向下轻扫
- 设置-辅助功能-指针控制-触控板选项-启动拖移-三指拖移
- 设置-安全性与隐私-通用-允许从以下位置下载的APP
- 设置-桌面与屏幕保护程序-动态桌面
- 设置-锁定屏幕-使用电池供电且不活跃时关闭显示器-调整大
- 拖动文件如何自动整理？
- 备忘录-编辑-拼写和语法-自动纠正拼写关闭
- 启动台系统软件隐藏起来
- 常用快捷键
	- command + shift + . 查看隐藏文件夹
	- command + shift + g 前往文件夹(可用Alfred替代)
	- command + option + esc 强制结束
	- command + option + h + m 显示桌面

## Mac软件安装

### 官网下载安装包下载

- QQ
- 微信
- 百度网盘
- 迅雷
- Sourcetree
- IINA
- Fliqlo
- Postman

- 网易云音乐
	- 体验不如Apple Music，少了空间音频
	
- Obsidian
	- 设置-关于-语言

- Termius
	- 类似的还有SecureCRT、MobaXterm

- Tecent Lemon
	- 不要在App Store下载
	- 应用程序无法卸载就用lemon，或者拖动到垃圾篓里试试

- Google Chrome
	- 设置-搜索引擎-百度
	- 导入收藏夹（放在github docsify-blog中），书签-显示书签栏
	- 扩展程序：infinity新标签页（PRO）、OneTab、SimpleUndoClose、Tab Position Options、购物党自动比价工具	

- 上网
	- Github搜
	
- iterm
	- [iTerm2 + Oh My Zsh打造舒适终端体验](https://github.com/sirius1024/iterm2-with-oh-my-zsh)
		- echo $SHELL
		- 安装Oh My Zsh可以考虑使用下面的，否则可能因为网络的原因无法安装
		- PowerLine、配色、主题貌似都有了不需要再安装，插件的安装可以使用下面文档的方式
	- [linux 或 mac 上安装 zsh 以及自动提示 / 语法高亮等](https://my.oschina.net/who7708/blog/2961842)
	- 字体调整到15

- Visual Studio Code
	- 解压后拖动到应用程序里，启动台才展示
	- 字体大小设置为15
	- 插件：
		- Chinese
		- python（根据提示安装）

- IntelliJ IDEA
	- [IDEA初始化](/docs/环境搭建/IDEA初始化.md)

### APP Store下载

- Xnip
- Manico
- 超级右键
	- 设置-隐私与安全性-扩展-添加的扩展-添加超级右键
	- 关闭一些不需要的功能
- 滴答清单	
- The Unarchiver	


### 破解版下载

[Mac软件](https://xclient.info/)

- charles
	 - 如何抓包
- Dash
- Magnet
- Navicat
	- [Mac 电脑如何关闭 sip？](https://www.zhihu.com/question/558739052)
- SnippetsLab
- Parallels DeskTop

- Alfred 5
	- [Alfred初始化](/docs/环境搭建/Alfred初始化.md)



### 命令行安装

- Homebrew
	- 官网复制命令，可能无法访问。修改hosts或者使用其他镜像
	- [修改hosts](https://blog.csdn.net/qq_43531694/article/details/106862753)
		- [查询IP](https://www.ipaddress.com/)
		- cd /etc
		- sudo cp hosts hosts_bak
		- sudo vim hosts
	- [使用镜像](https://www.bilibili.com/read/cv10229149/)
	- brew -v验证是否正常安装

- Git
	- Homebrew安装： brew install git
	- xcode-select自带：xcode-select —install
		- 自带了一些编译器？java，gcc
		- mac 目前自带python3，没有python2了
	- [Git初始化](/docs/环境搭建/Git初始化.md)


- MySQL
	1. 使用homebrew安装 brew install mysql@5.7
	2. 修改文件内容 vim ~/.zshrc
		> echo 'export PATH="/usr/local/opt/mysql@5.7/bin:$PATH"' >> ~/.zshrc
	3. 生效文件 source ~/.zshrc
	4. 启动 mysql.server start
	5. 连接 mysql -uroot
	6. 启动后配置密码 mysql_secure_installation	



- Maven
	1. 使用homebrew安装 brew install maven
	2. 修改文件内容 vim ~/.zshrc
	```shell		
		# 设置 JDK 8
		export JAVA_8_HOME="/Users/xkx/Library/Java/JavaVirtualMachines/corretto-1.8.0_352/Contents/Home"
		# 设置 JDK 11
		export JAVA_11_HOME="/Users/xkx/Library/Java/JavaVirtualMachines/corretto-11.0.17/Contents/Home"
		# 设置 JDK 17
		export JAVA_17_HOME="/Users/xkx/Library/Java/JavaVirtualMachines/corretto-17.0.5/Contents/Home"
		
		#默认JDK 8
		export JAVA_HOME=$JAVA_8_HOME
		
		#alias命令动态切换JDK版本
		alias jdk8="export JAVA_HOME=$JAVA_8_HOME"
		alias jdk11="export JAVA_HOME=$JAVA_11_HOME"
		alias jdk17="export JAVA_HOME=$JAVA_17_HOME"

		echo 'export PATH=/opt/homebrew/opt/maven/bin:$PATH' >> ~/.zshrc
	```
	4. 可以建立软链 ln -fsv $(pwd)/src/main/resources/settings.xml 指向 软链地址
	5. 生效文件 source ~/.zshrc
	
 

todo:开发工具的初始化单独弄一些文档
虚拟机搭建多节点
(PicGo、Acrobat)

虚拟机重新走一遍流程