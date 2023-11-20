- 官网下载
    - 版本2020.3
- 选择项目路径
    - ~/IdeaProjects  或者 /Users/xkx/IdeaProjects
- 支持自动安装JDK，安装JDK11和JDK17，环境变量自动配置好了
    - echo $PATH
    - where java
    - which java
- File ｜Other Settings ｜Preferences For New Projects才是对全部项目生效
- 字体大小设置为20（一般情况保持默认就行）
- Preferences｜Advanced Settings | Maximum number of recent files
- 代码签名设置
    - Preferences｜Editor | File and Code Template | Includes设置代码签名
    - 代码示例
    ```java
        /**
        * @author xiangkexin <xiangkx2018@outlook.com>
        * Created on ${YEAR}-${MONTH}-${DAY}    
        */
    ```

- JVM内存配置
    - Help ｜ Edit Custom VM Options
    - 代码示例
    ```
        -Xms1g
        -Xmx4g
        -XX:ReservedCodeCacheSize=1g
    ```

- Maven配置
    - Preferences｜Build, Execution, Deployment | Build Tools | Maven
        - 勾选Always update snapshots
        - importing｜VM options for importer -Xmx2000m
        - Maven home path 
                - /opt/homebrew/Cellar/maven/3.8.7/libexec
        - User settings file
            - /opt/homebrew/Cellar/maven/3.8.7/libexec/conf/settings.xml
- 编译堆内存
    - Preferences｜Build, Execution, Deployment | Compiler
        - Build process heap size(Mbytes):2000
- Java8 parameters设置（Required）
    - Preferences｜Build, Execution, Deployment | Compiler｜Java Compiler
        - Additional Command line parameters增加-parameters
- optimize import配置（required）
    - Save Actions
    - Editor｜General｜Auto Import
        - Optimize imports on the fly
- properties文件转义设置
    - Preferences｜Editor | File encodings
        - 勾选Transparent native-to-ascii conversion

- 插件plugins.zhile.io
    - 格式化配置
    - Import Order
    - SonarLint
    - arthas idea
    - Builder Generator
    - CamelCase
    - CheckStyle-IDEA
    - Easy Code
    - GenerateAllSetter
    - GitToolBox
    - GsonFormatPlus
    - IDE Eval Reset
    - Maven Helper
    - PlantUML integration
    - Protobuf Support
    - Rainbow Brackets
    - RestfulTool
    - RestfulTookit
    - Save Actions
    - SequenceDiagram
    - Sql Generator
    - Key Promoter X
    