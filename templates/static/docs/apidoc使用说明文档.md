# Django基于APidoc自动生成api接口文档详细说明

###一、apidoc介绍
apiDoc是一款Web框架文档自动生成工具。apidoc会根据你源码中的api注解(apidoc自己的语法注解)，创建说明文档，创建出html格式的说明文档，apidoc是基于nodejs，代码开源，apidoc基本支持所有语言的文档生成，C#、Java、JavaScript、PHP、Python，具体可参加官方说明：
<p><a href="https://apidocjs.com/">官网地址</a></p>
<p><a href="https://github.com/apidoc/apidoc">github地址</a></p>

###二、apidoc安装
1.首先需要安装nodejs并配置环境，执行命令：node -v ,查看node版本, 出现版本号即安装成功。

2.安装apidoc :npm install apidoc -g, 安装完成后，使用apidoc -h,查看是否安装成功。

安装时可使用国内的镜像源：npm install -i https://pypi.tuna.tsinghua.edu.cn/simple apidoc -g


###三、apidoc在Django中的配置流程

1.在项目主目录下创建/templates/static/docs文件夹。

2.cd进docs文件，创建examples文件夹，创建apidoc.json, footer.md,  header.md 文件。

    目录结构：
    templates
        |____static
                |___docs
                    |____examples
                            |____example.js
                    |____apidoc.json
                    |____footer.md
                    |____header.md
    
3.cd examples文件夹下，创建 example.js 文件，并***编写api文档***

    编写example.js 文档（参考第四步）【重要】
    编写apidoc.json文件：说明文档总架构信息
    编写header.md文件：说明文档头部信息
    编写footer.md文件：说明文档的页面底部信息

4.在settings.py 中添加如下配置：

    # api文档路径配置
    STATIC_ROOT = os.path.join(BASE_DIR, 'templates', static')
    APIDOC_ROOT = os.path.join(STATIC_ROOT, 'docs','apidoc')

5.在/templates/static/docs/路径下，即apidoc.json同级目录下执行命令: ***apidoc -i ./examples -o apidoc/***

6.在浏览器中输入 http://127.0.0.1:8000/apidoc/index.html 查看效果



###四、使用apidoc语法编写example.js 文件
    例子：
    /**
    * @api {post} /api/case/project  新增/更新项目
    * @apiVersion 1.0.0
    * @apiName  eproject
    * @apiGroup 用例管理
    * @apiDescription  详细描述:新增项目管理
    * @apiExample API调用示例:
    * curl -i http://localhost:8000/api/case/project
    * @apiParam {String} project_name 项目名称
    * @apiParam {String} project_type 项目类型
    * @apiParam {String} Content-Type application/json
    * @apiSuccess {String} status 状态码.
     * @apiSuccessExample {json} 返回事例:
    * HTTP/1.1 200 OK
    * {"status": 10000, "msg":"操作成功"}
     *   HTTP/1.1 Error 404: Unauthorized
     * {"status": 10001, "msg":"操作失败"}
     * */

说明：必须用js语法的多行注释进行编写，其中@api，@apiVersion， @apiName， @apiGroup  等为apidoc语法，具体使用方法请查阅官方文档或其他资料，此处不做详细说明。