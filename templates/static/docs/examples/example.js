// 登陆注册等用户相关接口===============================================================================================

/**
 * @api {post} /register  注册
 * @apiVersion 1.0.0
 * @apiName  register
 * @apiGroup 用户管理
 * @apiDescription  详细描述:注册接口
 * @apiExample API调用示例:
 * curl -i http://localhost:8000/register
 * @apiParam {String} username 用户名
 * @apiParam {String} password 密码
 * @apiParam {String} Content-Type application/x-www-form-urlencoded
 * @apiSuccess {String} status 状态码.
 * @apiSuccess {String} msg 说明.
 * @apiSuccessExample {json} 返回事例:
 *     HTTP/1.1 200 OK
 *     {
 *         "status": 200,
 *         "msg": "注册成功"
 *     }
 *
 * @apiError code 1001.
 * @apiErrorExample {json} Error-Response:
 *     {
 *         status": "200",
 *        "code": 1001,
 *        "msg": "用户名或密码错误不符合要求"
 *     }
 *
 */


/**
 *@api {post} /login  登陆
 *@apiVersion 1.0.0
 *@apiName  login
 *@apiGroup 用户管理
 *@apiDescription  详细描述:登陆接口
 *@apiExample API调用示例:
 *curl -i http://localhost:8000/login
 *@apiParam {String} username 用户名.
 *@apiParam {String} password 密码.
 *@apiParam {String} Content-Type application/json.
 *@apiSuccess {String} status 状态码.
 *@apiSuccess {String} code code.
 *@apiSuccess {String} msg 说明.
 *@apiSuccess {String} token 登陆后记录的token值.
 *@apiSuccessExample {json} 返回事例:
 *    HTTP/1.1 200 OK
 *    {
 *        "status": "200",
 *        "code": 1000,
 *        "msg": "登陆成功",
 *        "token": "2073d2ed6aadd9b5a59f16c306f7ecc0"
 *    }
 *
 *@apiError code 1001.
 *
 *@apiErrorExample {json} Error-Response:
 *    {
 *        "status": "200",
 *        "code": 1001,
 *        "msg": "用户名或密码错误"
 *    }
 */


/**
 *     @api {get} /index/  首页展示
 *     @apiVersion 1.0.0
 *     @apiName  /index
 *     @apiGroup 用户管理
 *     @apiDescription  详细描述:登陆后的首页内容展示
 *     @apiExample API调用示例:
 *     curl -i http://localhost:8000/index/
 *     @apiParam {String} Authorization token值.
 *     @apiParam {String} Content-Type application/json.
 *     @apiSuccess {List} data_list 商品列表.
 *     @apiSuccess {String} goods_name 名称.
 *     @apiSuccess {String} price 价格.
 *     @apiSuccess {String} status 状态.
 *     @apiSuccessExample {json} 返回事例:
 *         HTTP/1.1 200 OK
 *         data_list:[
 *                 {'id': 1, 'goods_name': "草莓", 'price': 19.99, 'status': True},
 *                 {'id': 2, 'goods_name': "香蕉", 'price': 9.88, 'status': True},
 *                 {'id': 3, 'goods_name': "苹果", 'price': 5.99, 'status': True},
 *                 {'id': 4, 'goods_name': "蓝莓", 'price': 9.99, 'status': True},
 *             ]
 *
 *     @apiError Unauthorized token认证失败.
 *
 *     @apiErrorExample {json} Error-Response:
 *         HTTP/1.1 Error 401: Unauthorized
 *         {
 *             "detail": "token错误"
 *         }
 * */


// Case相关接口=========================================================================================================


/**
 *
 *         @api {post} /api/case/project-total  获取项目下各版本用例汇总集
 *         @apiVersion 1.0.0
 *         @apiName  project-total
 *         @apiGroup 用例管理
 *         @apiDescription  详细描述:获取项目下各版本用例汇总集
 *         @apiExample API调用示例:
 *         curl -i http://localhost:8000/api/case/project-total
 *         @apiParam {String} project_name 项目名称【必填，获取全部时传值 all】
 *         @apiParam {String} version_number 版本号 【选填】
 *         @apiParam {String} page 页数 【必填】
 *         @apiParam {String} Content-Type multipart/form-data
 *         @apiSuccess {String} project_name 项目名称
 *         @apiSuccess {String} version_number 版本号
 *         @apiSuccess {List} list 用例集
 *         @apiSuccess {Int} total 用例总数
 *         @apiSuccessExample {json} 返回事例:
 *         HTTP/1.1 200 OK
 *         {
 *            "status": 10000,
 *           "data": [
 *                {
 *                    "case_num": 1,
 *                    "version_number": "1.0.29",
 *                    "project_name": "订单管理"
 *                },
 *                {
 *                    "case_num": 1,
 *                    "version_number": "1.0.30",
 *                    "project_name": "订单管理"
 *                }
 *            ],
 *            "totalCount": 32,
 *            "numPerPage": 10,
 *            "totalPage": 4,
 *            "pageNum": 4,
 *            "message": "获取成功"
 *        }
 * */


/**
* @api {get} /api/case/delete-case  删除测试用例
* @apiVersion 1.0.0
* @apiName  delete-case
* @apiGroup 用例管理
* @apiDescription  详细描述:删除单条测试用例接口
* @apiExample API调用示例:
* curl -i http://localhost:8000/api/case/delete-case?case_id=dd015
* @apiParam {String} case_id 用例编号
* @apiParam {String} Content-Type application/json
* @apiSuccess {String} status 状态码.
* @apiSuccess {String} msg 说明.
* @apiSuccessExample {json} 返回事例:
*     HTTP/1.1 200 OK
*     {
*         "status": 10000,
*         "msg": "删除成功"
*     }
*
* @apiError code 1001.
* @apiErrorExample {json} Error-Response:
*     {
*         "status": "200",
*         "msg": "删除失败"
*     }
 */



/**
* @api {post} /api/case/upload-casefile  导入测试用例
* @apiVersion 1.0.0
* @apiName  upload-casefile
* @apiGroup 用例管理
* @apiDescription  详细描述:导入测试用例接口
* @apiExample API调用示例:
* curl -i http://localhost:8000/api/case/upload-casefile
* @apiParam {File} file 测试用例Excel文件
* @apiParam {String} Content-Type multipart/form-data
* @apiSuccess {String} status 状态码.
* @apiSuccess {String} msg 全部用例入库成功！.
* @apiSuccessExample {json} 返回事例:
*     HTTP/1.1 200 OK
*     {
*         "status": 10000,
*         "msg": "全部用例入库成功！"
*     }
*
* @apiError code 10001.
* @apiErrorExample {json} Error-Response:
*     {
*         "status": 10001,
*         "msg": "用例编号为：dd014的入库失败！请检查"
*     }
*/


/**
* @api {get} /api/case/export-case  导出测试用例
* @apiVersion 1.0.0
* @apiName  export-case
* @apiGroup 用例管理
* @apiDescription  详细描述:导出测试用例接口
* @apiExample API调用示例:
* curl -i http://localhost:8000/api/case/export-case?project_name=订单管理&version_number=1.0.0
* @apiParam {String} project_name 项目名称
* @apiParam {String} version_number 版本编号
* @apiParam {String} Content-Type multipart/form-data
* @apiSuccess {String} status 状态码.
 */

/**
* @api {get} /api/case/version-case  获取固定页数的测试用例集
* @apiVersion 1.0.0
* @apiName  version-case
* @apiGroup 用例管理
* @apiDescription  详细描述:依据项目名称和版本号返回固定页数的测试用例集
* @apiExample API调用示例:
* curl -i http://localhost:8000/api/case/version-case?project_name=订单管理&version_number=1.0.0&page=1
* @apiParam {String} project_name 项目名称
* @apiParam {String} version_number 版本号
* @apiParam {String} page 页码
* @apiParam {String} Content-Type application/json
* @apiSuccess {List} data 测试集
* @apiSuccess {String} message 说明
* @apiSuccess {String} status 状态10000

* @apiSuccessExample {json} 返回事例:
* HTTP/1.1 200 OK
* {
*     "status":10000,
*     "message":"获取成功",
*     "data":{
*         "totalCount":11,
*         "numPerPage":10,
*         "totalPage":2,
*         "pageNum":1,
*         "list":[
*             {
*                 "model":"cases.testcase",
*                 "pk":11,
*                 "fields":{
*                     "case_id":"dd011",
*                     "version_number":"1.0.0",
*                     "module_name":"列表页",
*                     "test_title":"时间检索",
*                     "condition":"输入时间：2020/04/23",
*                     "step":"输入时间，点击检索",
*                     "forecast_result":"正常查询到所有该时间的数据",
*                     "result":"",
*                     "test_person":"范建平",
*                     "write_person":"范22",
*                     "remark":"",
*                     "create_time":"2020-05-09T17:00:58.586",
*                     "update_time":"2020-05-09T17:00:58.586",
*                     "project_name":1
*                 }
*             }
*         ]
*     }
* }
 */


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
 *   HTTP/1.1 Error 200: Unauthorized
 * {{"status": 10001, "msg":"已存在，操作失败！"}
 * */


/**
* @api {post} /api/case/detail  新增/更新case
* @apiVersion 1.0.0
* @apiName  detail
* @apiGroup 用例管理
* @apiDescription  详细描述:新增项目case
* @apiExample API调用示例:
* curl -i http://localhost:8000/api/case/detail
* @apiParam {String} case_id 用例编号
* @apiParam {String} version_number 版本号
 * @apiParam {String} test_title 版本号
 * @apiParam {String} condition 前置条件
 * @apiParam {String} step 测试步骤
 * @apiParam {String} forecast_result 预期结果
 * @apiParam {String} result 实际结果
 * @apiParam {String} test_person 测试人员
 * @apiParam {String} write_person 编写人员
 * @apiParam {String} remark 备注
 * @apiParam {String} project_name 项目id
* @apiParam {String} Content-Type application/json
* @apiSuccess {String} case_id 用例编号
* @apiSuccess {String} version_number 版本号
 * @apiSuccess {String} test_title 版本号
 * @apiSuccess {String} condition 前置条件
 * @apiSuccess {String} step 测试步骤
 * @apiSuccess {String} forecast_result 预期结果
 * @apiSuccess {String} result 实际结果
 * @apiSuccess {String} test_person 测试人员
 * @apiSuccess {String} write_person 编写人员
 * @apiSuccess {String} remark 备注
 * @apiSuccess {String} project_name 项目id
 * @apiSuccessExample {json} 返回事例:
* HTTP/1.1 200 OK
 * {"status": 10000, "msg":"操作成功"}
 * @apiErrorExample {json} Error-Response:
 * HTTP/1.1 Error 200: Unauthorized
 * {"status": 10001, "msg":"已存在，操作失败！"}
 * */


/**
* @api {post} /api/case/detail?page=1  分页查询case
* @apiVersion 1.0.0
* @apiName  etail?page=1
* @apiGroup 用例管理
* @apiDescription  详细描述:分页查询case
* @apiExample API调用示例:
* curl -i http://localhost:8000/api/case/detail?page=1
* @apiParam {String} page 页码
* @apiParam {String} Content-Type application/json
 * @apiSuccess {String} id   ID
* @apiSuccess {String} case_id 用例编号
* @apiSuccess {String} version_number 版本号
 * @apiSuccess {String} test_title 版本号
 * @apiSuccess {String} condition 前置条件
 * @apiSuccess {String} step 测试步骤
 * @apiSuccess {String} forecast_result 预期结果
 * @apiSuccess {String} result 实际结果
 * @apiSuccess {String} test_person 测试人员
 * @apiSuccess {String} write_person 编写人员
 * @apiSuccess {String} remark 备注
 * @apiSuccess {String} project_name 项目id
 * @apiSuccessExample {json} 返回事例:
* HTTP/1.1 200 OK
 * {
 *     "id":  1
 *     "case_id": "dd001",
 *     "version_number": "1.0.0",
 *     "module_name": "列表页",
 *     "test_title": "时间检索",
 *     "condition": "输入时间：2020/04/23",
 *     "step": "输入时间，点击检索",
 *     "forecast_result": "正常查询到所有该时间的数据",
 *     "result": "",
 *     "test_person": "范建平",
 *     "write_person": "范33",
 *     "remark": "",
 *     "project_name": 1
 * }
 * */


/**
* @api {post} /api/case/project?page=1  分页查询项目集
* @apiVersion 1.0.0
* @apiName  project?page=1
* @apiGroup 用例管理
* @apiDescription  详细描述:分页查询项目集
* @apiExample API调用示例:
* curl -i http://localhost:8000/api/case/project?page=1
* @apiParam {String} page 页码
* @apiParam {String} Content-Type application/json
 * @apiSuccess {String}  id ID
 * @apiSuccess {String} project_name   项目名称
* @apiSuccess {String} project_type 项目类型
* @apiSuccess {String} create_time 创建时间
 * @apiSuccess {String} update_time 更改时间
 * @apiSuccessExample {json} 返回事例:
* HTTP/1.1 200 OK
 * {
 *         "id": 2,
 *         "project_name": "商品管理",
 *         "project_type": "功能用例",
 *         "create_time": "2020-05-09T11:26:06.225776",
 *         "update_time": "2020-05-09T11:26:06.225776"
 *     }
 * */


