- 打开剪切板设置，设置快捷键
- Alfred和Spotlight快捷键替换
- Web Search全部禁用掉
    - google留下改成gg
    - 增加百度alfred搜索和兜底
	    - 新增https://www.baidu.com/s?wd={query}
	    - Default Results修改为百度
    - 新增github
	    - https://github.com/search?q={query}
    - 增加bilibili的alfred搜索和兜底 + 头像
	- https://search.bilibili.com/all?keyword={query}
	- Search bilibili for '{query}'
	- bl
    - 增加知乎
	- https://www.zhihu.com/search?type=content&q={query}
	- Search zhihu for '{query}'
	- zh

- SnippetsLab
- 考虑使用java脚本
- json插件？一直不关闭alfred
- 插件
    - [timestamp-workflow](https://github.com/xindoo/timestamp-workflow)
        - 依赖python2
    - [YoudaoTranslator](https://github.com/wensonsmith/YoudaoTranslator)
    - [alfred-web-search-suggest](https://github.com/zqzten/alfred-web-search-suggest)
        - brew install php
        - 代理设置为http://192.168.18.217:7890
            - 默认只有浏览器使用代理，需要开启允许来自局域网的连接
            - ifconfig查看ip地址，代理查看端口号
    - [alfred-browser-tabs](https://github.com/epilande/alfred-browser-tabs)
        - [Search_Safari_and_Chrome_Tabs_alfred](https://github.com/barn/Search_Safari_and_Chrome_Tabs_alfred)
            - 下载链接：[Search Browser Tabs](http://www.packal.org/workflow/search-safari-and-chrome-tabs)
        - [alfred-tabs](https://github.com/importre/alfred-tabs)
    - [chrome-bookmarks-alfred-workflow](https://github.com/mdreizin/chrome-bookmarks-alfred-workflow#readme)
        - 书签搜索不太好用
    - [alfred-chrome-history](https://github.com/tupton/alfred-chrome-history)
    - [CodeVar](https://github.com/xudaolong/CodeVar)
        - 依赖nodeJs，去官网安装
        - 快捷键先取消掉
    - [AlfredWorkflow-Recent-Documents](https://github.com/mpco/AlfredWorkflow-Recent-Documents)
    - [alfred-fakeum](https://github.com/deanishe/alfred-fakeum)
        - [解决不兼容的问题](https://github.com/giovannicoppola/alfred-fakeum)
    - [alfred-ip-address-workflow](https://github.com/alexchantastic/alfred-ip-address-workflow)
    - [alfred-terminalfinder](https://github.com/LeEnno/alfred-terminalfinder)
    - [json-formatter-alfred-workflow](https://github.com/gymgle/json-formatter-alfred-workflow)
- [Alfred 修改内置 Terminal 为 iTerm2](https://ld246.com/article/1567998289912)
```shell
    <!-- 原来自带的 -->
    on alfred_script(q)
        tell application "Terminal"
            activate
            do script q
        end tell
    end alfred_script

    <!-- 现在的 -->
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