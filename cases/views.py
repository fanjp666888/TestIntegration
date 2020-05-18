from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import ProjectCase, TestCase
from rest_framework.pagination import PageNumberPagination
from .serializers import CaseSerializers, ProjectSerializers
from TestIntegration.settings import BASE_DIR
from utils.ExcelUtil import ExcelUtil
from django.http import HttpResponse,JsonResponse
from django.views.decorators.csrf import csrf_exempt
# from django.core import serializers
# from django.core.paginator import Paginator, PageNotAnInteger, EmptyPage, InvalidPage
import json
import os
from cases.util.my_paginator import MyPaginator, PagenationList
from cases.util.setting import GN_CASE_FIElD_LIST
import datetime
from cases.util.writerExcel import writeExcel
from rest_framework import status
from cases.util.setting import GN_CASE_FIElD_LIST as gc
# Create your views here.


def UpdateSaveProjectDb(data):
    """操作Project表"""
    instance = ProjectCase.objects.filter(project_name=data.get("project_name", "")).first()
    serializer = ProjectSerializers(data=data)
    # print(serializer.is_valid())
    if serializer.is_valid():
        if instance:
            serializer.update(instance, data)
        else:
            serializer.save()

        return serializer.data, 200
    return serializer.data, 200


def UpdateSaveCaseDb(data):
    """操作Case表"""
    instance = TestCase.objects.filter(case_id=data.get("case_id", 0),version_number=data.get("version_number", "")).first()
    serializer = CaseSerializers(data=data)
    if serializer.is_valid():
        if instance:
            data["project_name"] = ProjectCase.objects.filter(id=data.get("project_name", "")).first()
            serializer.update(instance, data)
        else:
            serializer.save()
        return {"status": 10000, "msg":"操作成功"}, 200
    return {"status": 10001, "msg":"已存在，操作失败！"}, 200


class project(APIView):
    """反序列化操作project"""
    authentication_classes = []
    def get(self,request, *args, **kwargs):
        # return Response({"code": 200, "message": "哈哈~通了！！！"})
        q = ProjectCase.objects.all().order_by("project_name")
        pg = PageNumberPagination()
        p = pg.paginate_queryset(queryset=q,request=request)
        serializer = ProjectSerializers(instance=p,many=True)
        return Response(serializer.data)

    def post(self, request, *args, **kwargs):
        data = request.data
        result, status = UpdateSaveProjectDb(data)
        if status == 200:
            return Response(result, status=status)
        else:
            return Response(result, status=status)


class case(APIView):
    """反序列化操作case"""
    authentication_classes = []
    def get(self, request, *args, **kwargs):
        q = TestCase.objects.all().order_by("case_id")
        pg = PageNumberPagination()
        p =pg.paginate_queryset(queryset=q, request=request)
        ser = CaseSerializers(instance=p, many=True)
        return Response(ser.data)

    def post(self, request, *args, **kwargs):
        data = request.data
        # print(data)
        result,status = UpdateSaveCaseDb(data)
        if status == 200:
            return Response(result, status=status)
        else:
            return Response(result, status=status)

@csrf_exempt
def delete_case(request, *args, **kwargs):
    """
        api {get} /delete-case  删除测试用例
    """
    if request.method == 'GET':
        case_id = request.GET.get('case_id')
        print(case_id)
        response = {'status': 10000, 'msg':"删除成功"}
        TestCase.objects.filter(case_id=case_id).delete()
        return JsonResponse(response)
        pass


class casefile(APIView):
    """
        api {post} /upload-casefile  导入测试用例
    """
    authentication_classes = []
    def post(self, request, *args, **kwargs):
        file_obj = request.FILES.get('file')
        import os
        path_file = os.path.join(BASE_DIR, 'cases','static', 'excels', file_obj.name)
        f = open(path_file, 'wb')
        # print(file_obj, type(file_obj))
        for chunk in file_obj.chunks():
            f.write(chunk)
        f.close()
        errorID = OperationExcel().readExcelSQL(path_file)
        if errorID:
            return JsonResponse({"status": 10001, "msg":"用例编号为：%s的入库失败！请检查" % str(errorID)}, status= 200)
        return JsonResponse({"status": 10000, "msg":"全部用例入库成功！"}, status= 200)

class OperationExcel(object):
    """解析导入文件并入库"""
    def readExcelSQL(self, path_file):
        hand_excel = ExcelUtil(path_file)
        rows = hand_excel.get_rows()
        errorID = list()
        dictTitle = list()
        # print(rows)
        for i in range(1, rows + 2):

            data = hand_excel.get_rows_value(i)  # 如果是第二个sheet,则加参数 index=1；有几个依次类推

            if i == 1:
                dictTitle = [key for title in data for key, value in gc.items() if title == value]
                continue
            Data = [j if j != None else '' for j in data]
            caseJson = dict(zip(dictTitle, Data))
            projectJson = dict([(key, caseJson[key]) for key in ["project_name", "project_type"]])
            del caseJson["project_name"]
            del caseJson["project_type"]
            # print(projectJson)
            # print(caseJson)

            result, status = UpdateSaveProjectDb(projectJson)
            # print(status, result, "="*10)
            if status == 200 and result.get('id'):
                caseJson['project_name'] = result.get('id')
            else:
                ProjectItem = ProjectCase.objects.filter(project_name=projectJson.get("project_name", "")).first()
                if ProjectItem:
                    caseJson['project_name'] = ProjectItem.id
                else:
                    caseJson['project_name'] = ''
            # print(caseJson['project_name'])
            if not caseJson['project_name']:
                errorID.append(caseJson['case_id'])
            result, status = UpdateSaveCaseDb(caseJson)
            # print(status, result)
        return errorID



def getCase(caseId):
    sql = "select * from test_case where case_id='%s'"%caseId
    rawqueryset = ProjectCase.objects.raw(sql)
    columns = rawqueryset.columns
    values = rawqueryset.query.cursor.cursor._rows
    return dict(zip(columns, values[0]))


class total(APIView):
    """获取总的项目下各版本用例汇总"""
    authentication_classes = []
    def post(self, request, *args, **kwargs):
        project_name = request.data.get("project_name")
        version_number = request.data.get("version_number")
        try:
            page = request.data.get("page") # 获取当前页码
        except:
            page = 1
        if not page:
            page = 1
        # print(project_name, version_number, page)
        if project_name == "all":   # 调用全部项目的用例，返回各版本总数量及版本号等信息
            sql = 'select COUNT(tc.case_id) as case_num, tc.version_number, pc.project_name, pc.id from test_case tc RIGHT JOIN project_case pc on tc.project_name_id = pc.id GROUP BY tc.version_number,pc.project_name'
        else:
            sql = ''
        # elif version_number:
        #     sql = 'SELECT t.case_id, t.version_number,p.project_name, p.id FROM test_case as t INNER JOIN project_case as p ON t.project_name_id = p.id and p.project_name="%s" and t.version_number="%s"'% (project_name,version_number)
        # else:
        #     sql = 'SELECT t.case_id, t.version_number,p.project_name, p.id FROM test_case as t INNER JOIN project_case as p ON t.project_name_id = p.id and p.project_name="%s"' % project_name
        rawqueryset = ProjectCase.objects.raw(sql)
        # columns = rawqueryset.columns
        columns = ["case_num", "version_number", "project_name"]
        values = [[row.case_num, row.version_number, row.project_name] for row in rawqueryset]

        caesList = []
        for vs in values:
            if not vs[1]:
                vs[1] = ""
            item = dict(zip(columns, vs))
            caesList.append(item)
        # print(len(caesList))
        res = PagenationList(caesList, page).pagin()
        # print(res)
        return Response(res)


@csrf_exempt
def versioncase(request):
    """
    依据项目名称和版本号返回固定页数的测试用例集
    """
    authentication_classes = []
    page = request.GET.get('page')  # 获取当前页码
    if request.GET and request.GET.get('project_name'):
        project_name = request.GET.get('project_name').strip()
        version_number = request.GET.get('version_number')
    else:
        data = json.loads(request.body)
        project_name = data.get('project_name').strip()
        version_number = data.get('version_number')
    project_name_id = ProjectCase.objects.filter(project_name=project_name).first().id
    cases = TestCase.objects.filter(version_number=version_number, project_name_id=project_name_id)
    res = MyPaginator(cases, page)
    return JsonResponse(res)

@csrf_exempt
def export_case(request):
    """
        api {get} /export-case  导出测试用例
    """
    from django.http import FileResponse
    from django.utils.http import urlquote
    authentication_classes = []
    if request.method == 'GET':
        project_name = request.GET.get('project_name')
        version_number = request.GET.get('version_number')
        print(project_name, version_number)
        # 查库写入Excel文件=======================
        sql = 'SELECT p.project_name,p.project_type,t.case_id,t.version_number,t.module_name,t.test_title,' \
              't.condition,t.step,t.forecast_result,t.result,t.test_person,t.write_person,t.remark,t.create_time,t.update_time' \
              ' FROM test_case as t INNER JOIN project_case as p ON t.project_name_id = p.id and p.project_name="%s" and t.version_number="%s"'%(project_name,version_number)
        rawqueryset = ProjectCase.objects.raw(sql)
        columns = rawqueryset.columns
        valuesList = rawqueryset.query.cursor.cursor._rows

        columns = [GN_CASE_FIElD_LIST.get(i) for i in columns]
        data = []
        data.append(columns)
        for values in valuesList:
            value = [v if not isinstance(v, datetime.datetime) else datetime.datetime.strftime(v, "%Y-%m-%d %H:%M:%S")
                     for v in values]
            data.append(value)
        # print(data)
        file_name = '{}-{}.xlsx'.format(data[1][0], data[1][3].replace(".", ""))
        path = os.path.join(BASE_DIR, 'cases', "static", 'excels', file_name)
        # print(path)
        writeExcel(path, data)
        # 查库写入Excel文件完成=======================
        # 提供下载接口
        file = open(path, 'rb')
        response = FileResponse(file)
        response['Content_Type']='application/vnd,ms-excel'  # 注意：此处必须是vnd,ms-excel，否则下载后无法打开
        response['Content-Disposition'] = 'attachment;filename="{}"'.format(urlquote(file_name))
        return response


@csrf_exempt
def test(request):
    from cases.util.my_paginator import PagenationList
    if request.method == "GET":
        # x = ["Test"+str(i) for i in range(20)]
        book_list = ['Test0', 'Test1', 'Test2', 'Test3', 'Test4', 'Test5', 'Test6', 'Test7', 'Test8', 'Test9', 'Test10', 'Test11', 'Test12', 'Test13', 'Test14', 'Test15', 'Test16', 'Test17', 'Test18', 'Test19']
        page = request.GET.get("page")
        item = PagenationList(book_list, page).show()
        return JsonResponse({"data":item})