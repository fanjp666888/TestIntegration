define({ "api": [
  {
    "type": "get",
    "url": "/api/case/delete-case",
    "title": "删除测试用例",
    "version": "1.0.0",
    "name": "delete-case",
    "group": "用例管理",
    "description": "<p>详细描述:删除单条测试用例接口</p>",
    "examples": [
      {
        "title": "API调用示例:",
        "content": "curl -i http://localhost:8000/api/case/delete-case?case_id=dd015",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "case_id",
            "description": "<p>用例编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>状态码.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>说明.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回事例:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 10000,\n    \"msg\": \"删除成功\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "code",
            "description": "<ol start=\"1001\"> <li></li> </ol>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"status\": \"200\",\n    \"msg\": \"删除失败\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "examples/example.js",
    "groupTitle": "用例管理",
    "sampleRequest": [
      {
        "url": "http://localhost:8000/api/case/delete-case"
      }
    ]
  },
  {
    "type": "post",
    "url": "/api/case/detail",
    "title": "新增/更新case",
    "version": "1.0.0",
    "name": "detail",
    "group": "用例管理",
    "description": "<p>详细描述:新增项目case</p>",
    "examples": [
      {
        "title": "API调用示例:",
        "content": "curl -i http://localhost:8000/api/case/detail",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "case_id",
            "description": "<p>用例编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "version_number",
            "description": "<p>版本号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "test_title",
            "description": "<p>版本号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "condition",
            "description": "<p>前置条件</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "step",
            "description": "<p>测试步骤</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "forecast_result",
            "description": "<p>预期结果</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>实际结果</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "test_person",
            "description": "<p>测试人员</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "write_person",
            "description": "<p>编写人员</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "remark",
            "description": "<p>备注</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "project_name",
            "description": "<p>项目id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "case_id",
            "description": "<p>用例编号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "version_number",
            "description": "<p>版本号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "test_title",
            "description": "<p>版本号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "condition",
            "description": "<p>前置条件</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "step",
            "description": "<p>测试步骤</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "forecast_result",
            "description": "<p>预期结果</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>实际结果</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "test_person",
            "description": "<p>测试人员</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "write_person",
            "description": "<p>编写人员</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "remark",
            "description": "<p>备注</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "project_name",
            "description": "<p>项目id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回事例:",
          "content": "HTTP/1.1 200 OK\n{\"status\": 10000, \"msg\":\"操作成功\"}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 Error 200: Unauthorized\n{\"status\": 10001, \"msg\":\"已存在，操作失败！\"}",
          "type": "json"
        }
      ]
    },
    "filename": "examples/example.js",
    "groupTitle": "用例管理",
    "sampleRequest": [
      {
        "url": "http://localhost:8000/api/case/detail"
      }
    ]
  },
  {
    "type": "post",
    "url": "/api/case/project",
    "title": "新增/更新项目",
    "version": "1.0.0",
    "name": "eproject",
    "group": "用例管理",
    "description": "<p>详细描述:新增项目管理</p>",
    "examples": [
      {
        "title": "API调用示例:",
        "content": "curl -i http://localhost:8000/api/case/project",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "project_name",
            "description": "<p>项目名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "project_type",
            "description": "<p>项目类型</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>状态码.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回事例:",
          "content": "HTTP/1.1 200 OK\n{\"status\": 10000, \"msg\":\"操作成功\"}\n  HTTP/1.1 Error 200: Unauthorized\n{{\"status\": 10001, \"msg\":\"已存在，操作失败！\"}",
          "type": "json"
        }
      ]
    },
    "filename": "examples/example.js",
    "groupTitle": "用例管理",
    "sampleRequest": [
      {
        "url": "http://localhost:8000/api/case/project"
      }
    ]
  },
  {
    "type": "post",
    "url": "/api/case/detail?page=1",
    "title": "分页查询case",
    "version": "1.0.0",
    "name": "etail?page=1",
    "group": "用例管理",
    "description": "<p>详细描述:分页查询case</p>",
    "examples": [
      {
        "title": "API调用示例:",
        "content": "curl -i http://localhost:8000/api/case/detail?page=1",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "page",
            "description": "<p>页码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "case_id",
            "description": "<p>用例编号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "version_number",
            "description": "<p>版本号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "test_title",
            "description": "<p>版本号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "condition",
            "description": "<p>前置条件</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "step",
            "description": "<p>测试步骤</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "forecast_result",
            "description": "<p>预期结果</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>实际结果</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "test_person",
            "description": "<p>测试人员</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "write_person",
            "description": "<p>编写人员</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "remark",
            "description": "<p>备注</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "project_name",
            "description": "<p>项目id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回事例:",
          "content": "HTTP/1.1 200 OK\n{\n    \"id\":  1\n    \"case_id\": \"dd001\",\n    \"version_number\": \"1.0.0\",\n    \"module_name\": \"列表页\",\n    \"test_title\": \"时间检索\",\n    \"condition\": \"输入时间：2020/04/23\",\n    \"step\": \"输入时间，点击检索\",\n    \"forecast_result\": \"正常查询到所有该时间的数据\",\n    \"result\": \"\",\n    \"test_person\": \"范建平\",\n    \"write_person\": \"范33\",\n    \"remark\": \"\",\n    \"project_name\": 1\n}",
          "type": "json"
        }
      ]
    },
    "filename": "examples/example.js",
    "groupTitle": "用例管理",
    "sampleRequest": [
      {
        "url": "http://localhost:8000/api/case/detail?page=1"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/case/export-case",
    "title": "导出测试用例",
    "version": "1.0.0",
    "name": "export-case",
    "group": "用例管理",
    "description": "<p>详细描述:导出测试用例接口</p>",
    "examples": [
      {
        "title": "API调用示例:",
        "content": "curl -i http://localhost:8000/api/case/export-case?project_name=订单管理&version_number=1.0.0",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "project_name",
            "description": "<p>项目名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "version_number",
            "description": "<p>版本编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>multipart/form-data</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>状态码.</p>"
          }
        ]
      }
    },
    "filename": "examples/example.js",
    "groupTitle": "用例管理",
    "sampleRequest": [
      {
        "url": "http://localhost:8000/api/case/export-case"
      }
    ]
  },
  {
    "type": "post",
    "url": "/api/case/project-total",
    "title": "获取项目下各版本用例汇总集",
    "version": "1.0.0",
    "name": "project-total",
    "group": "用例管理",
    "description": "<p>详细描述:获取项目下各版本用例汇总集</p>",
    "examples": [
      {
        "title": "API调用示例:",
        "content": "curl -i http://localhost:8000/api/case/project-total",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "project_name",
            "description": "<p>项目名称【必填，获取全部时传值 all】</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "version_number",
            "description": "<p>版本号 【选填】</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "page",
            "description": "<p>页数 【必填】</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>multipart/form-data</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "project_name",
            "description": "<p>项目名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "version_number",
            "description": "<p>版本号</p>"
          },
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "list",
            "description": "<p>用例集</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "total",
            "description": "<p>用例总数</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回事例:",
          "content": " HTTP/1.1 200 OK\n {\n    \"status\": 10000,\n   \"data\": [\n        {\n            \"case_num\": 1,\n            \"version_number\": \"1.0.29\",\n            \"project_name\": \"订单管理\"\n        },\n        {\n            \"case_num\": 1,\n            \"version_number\": \"1.0.30\",\n            \"project_name\": \"订单管理\"\n        }\n    ],\n    \"totalCount\": 32,\n    \"numPerPage\": 10,\n    \"totalPage\": 4,\n    \"pageNum\": 4,\n    \"message\": \"获取成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "examples/example.js",
    "groupTitle": "用例管理",
    "sampleRequest": [
      {
        "url": "http://localhost:8000/api/case/project-total"
      }
    ]
  },
  {
    "type": "post",
    "url": "/api/case/project?page=1",
    "title": "分页查询项目集",
    "version": "1.0.0",
    "name": "project?page=1",
    "group": "用例管理",
    "description": "<p>详细描述:分页查询项目集</p>",
    "examples": [
      {
        "title": "API调用示例:",
        "content": "curl -i http://localhost:8000/api/case/project?page=1",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "page",
            "description": "<p>页码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "project_name",
            "description": "<p>项目名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "project_type",
            "description": "<p>项目类型</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "create_time",
            "description": "<p>创建时间</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "update_time",
            "description": "<p>更改时间</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回事例:",
          "content": "HTTP/1.1 200 OK\n{\n        \"id\": 2,\n        \"project_name\": \"商品管理\",\n        \"project_type\": \"功能用例\",\n        \"create_time\": \"2020-05-09T11:26:06.225776\",\n        \"update_time\": \"2020-05-09T11:26:06.225776\"\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "examples/example.js",
    "groupTitle": "用例管理",
    "sampleRequest": [
      {
        "url": "http://localhost:8000/api/case/project?page=1"
      }
    ]
  },
  {
    "type": "post",
    "url": "/api/case/upload-casefile",
    "title": "导入测试用例",
    "version": "1.0.0",
    "name": "upload-casefile",
    "group": "用例管理",
    "description": "<p>详细描述:导入测试用例接口</p>",
    "examples": [
      {
        "title": "API调用示例:",
        "content": "curl -i http://localhost:8000/api/case/upload-casefile",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "file",
            "description": "<p>测试用例Excel文件</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>multipart/form-data</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>状态码.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>全部用例入库成功！.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回事例:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 10000,\n    \"msg\": \"全部用例入库成功！\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "code",
            "description": "<ol start=\"10001\"> <li></li> </ol>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"status\": 10001,\n    \"msg\": \"用例编号为：dd014的入库失败！请检查\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "examples/example.js",
    "groupTitle": "用例管理",
    "sampleRequest": [
      {
        "url": "http://localhost:8000/api/case/upload-casefile"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/case/version-case",
    "title": "获取固定页数的测试用例集",
    "version": "1.0.0",
    "name": "version-case",
    "group": "用例管理",
    "description": "<p>详细描述:依据项目名称和版本号返回固定页数的测试用例集</p>",
    "examples": [
      {
        "title": "API调用示例:",
        "content": "curl -i http://localhost:8000/api/case/version-case?project_name=订单管理&version_number=1.0.0&page=1",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "project_name",
            "description": "<p>项目名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "version_number",
            "description": "<p>版本号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "page",
            "description": "<p>页码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "data",
            "description": "<p>测试集</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>说明</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>状态10000</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回事例:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\":10000,\n    \"message\":\"获取成功\",\n    \"data\":{\n        \"totalCount\":11,\n        \"numPerPage\":10,\n        \"totalPage\":2,\n        \"pageNum\":1,\n        \"list\":[\n            {\n                \"model\":\"cases.testcase\",\n                \"pk\":11,\n                \"fields\":{\n                    \"case_id\":\"dd011\",\n                    \"version_number\":\"1.0.0\",\n                    \"module_name\":\"列表页\",\n                    \"test_title\":\"时间检索\",\n                    \"condition\":\"输入时间：2020/04/23\",\n                    \"step\":\"输入时间，点击检索\",\n                    \"forecast_result\":\"正常查询到所有该时间的数据\",\n                    \"result\":\"\",\n                    \"test_person\":\"范建平\",\n                    \"write_person\":\"范22\",\n                    \"remark\":\"\",\n                    \"create_time\":\"2020-05-09T17:00:58.586\",\n                    \"update_time\":\"2020-05-09T17:00:58.586\",\n                    \"project_name\":1\n                }\n            }\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "examples/example.js",
    "groupTitle": "用例管理",
    "sampleRequest": [
      {
        "url": "http://localhost:8000/api/case/version-case"
      }
    ]
  },
  {
    "type": "get",
    "url": "/index/",
    "title": "首页展示",
    "version": "1.0.0",
    "name": "/index",
    "group": "用户管理",
    "description": "<p>详细描述:登陆后的首页内容展示</p>",
    "examples": [
      {
        "title": "API调用示例:",
        "content": "curl -i http://localhost:8000/index/",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>token值.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "data_list",
            "description": "<p>商品列表.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "goods_name",
            "description": "<p>名称.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "price",
            "description": "<p>价格.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>状态.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回事例:",
          "content": "HTTP/1.1 200 OK\ndata_list:[\n        {'id': 1, 'goods_name': \"草莓\", 'price': 19.99, 'status': True},\n        {'id': 2, 'goods_name': \"香蕉\", 'price': 9.88, 'status': True},\n        {'id': 3, 'goods_name': \"苹果\", 'price': 5.99, 'status': True},\n        {'id': 4, 'goods_name': \"蓝莓\", 'price': 9.99, 'status': True},\n    ]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>token认证失败.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 Error 401: Unauthorized\n{\n    \"detail\": \"token错误\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "examples/example.js",
    "groupTitle": "用户管理",
    "sampleRequest": [
      {
        "url": "http://localhost:8000/index/"
      }
    ]
  },
  {
    "type": "post",
    "url": "/login",
    "title": "登陆",
    "version": "1.0.0",
    "name": "login",
    "group": "用户管理",
    "description": "<p>详细描述:登陆接口</p>",
    "examples": [
      {
        "title": "API调用示例:",
        "content": "curl -i http://localhost:8000/login",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>用户名.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>密码.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>状态码.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>code.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>说明.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>登陆后记录的token值.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回事例:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": \"200\",\n    \"code\": 1000,\n    \"msg\": \"登陆成功\",\n    \"token\": \"2073d2ed6aadd9b5a59f16c306f7ecc0\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "code",
            "description": "<ol start=\"1001\"> <li></li> </ol>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"status\": \"200\",\n    \"code\": 1001,\n    \"msg\": \"用户名或密码错误\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "examples/example.js",
    "groupTitle": "用户管理",
    "sampleRequest": [
      {
        "url": "http://localhost:8000/login"
      }
    ]
  },
  {
    "type": "post",
    "url": "/register",
    "title": "注册",
    "version": "1.0.0",
    "name": "register",
    "group": "用户管理",
    "description": "<p>详细描述:注册接口</p>",
    "examples": [
      {
        "title": "API调用示例:",
        "content": "curl -i http://localhost:8000/register",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>状态码.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>说明.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回事例:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 200,\n    \"msg\": \"注册成功\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "code",
            "description": "<ol start=\"1001\"> <li></li> </ol>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    status\": \"200\",\n   \"code\": 1001,\n   \"msg\": \"用户名或密码错误不符合要求\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "examples/example.js",
    "groupTitle": "用户管理",
    "sampleRequest": [
      {
        "url": "http://localhost:8000/register"
      }
    ]
  }
] });
