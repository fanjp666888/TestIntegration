import os,django

from cases.util.my_paginator import PagenationList
from cases.util.writerExcel import writeExcel
from utils.ExcelUtil import ExcelUtil
from cases.util.setting import GN_CASE_FIElD_LIST as gc
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "TestIntegration.settings") # project_name 项目名称
django.setup()
# 在但脚本中执行django文件，添加上面三行内容----------------
from cases.models import ProjectCase, TestCase


def readExcelSQL(path_file):
    hand_excel = ExcelUtil(path_file)
    rows = hand_excel.get_rows()
    errorID = []
    projecTitle = list()
    caseTitle = list()
    dictTitle = list()
    for i in range(1, rows + 1):

        data = hand_excel.get_rows_value(i)  # 如果是第二个sheet,则加参数 index=1；有几个依次类推
        if i == 1:
            dictTitle = [key for title in data for key, value in gc.items() if title == value]
            continue
        Data = [j if j != None else '' for j in data]
        caseJson = dict(zip(dictTitle, Data))
        projectJson = dict([(key, caseJson[key])for key in ["project_name","project_type"]])
        del caseJson["project_name"]
        del caseJson["project_type"]
        print(projectJson)
        print(caseJson)
    #     projectJson = {}
    #     projectJson['project_name'] = Data[0]
    #     projectJson['project_type'] = Data[1]
    #     caseJson = {}
    #     caseJson['version_number'] = Data[2]
    #     caseJson['case_id'] = str(Data[3])
    #     caseJson['module_name'] = Data[4]
    #     caseJson['test_title'] = Data[5]
    #     caseJson['condition'] = Data[6]
    #     caseJson['step'] = Data[7]
    #     caseJson['forecast_result'] = Data[8]
    #     caseJson['result'] = Data[9]
    #     caseJson['test_person'] = Data[9]
    #     caseJson['write_person'] = Data[11]
    #     caseJson['remark'] = Data[12]
    # print(caseJson)

readExcelSQL("E:\TestIntegration\cases\static\excels\测试平台功能测试用例.xlsx")