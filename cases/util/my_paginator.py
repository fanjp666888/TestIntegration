from django.core import serializers
from django.core.paginator import Paginator, PageNotAnInteger, EmptyPage, InvalidPage
import json

def MyPaginator(queryset, page):
    """将查询的数据进行分页"""
    cases = queryset
    pageSize = int(10)  # 每页显示条数
    response = {}
    paginator = Paginator(cases, pageSize)
    # 获取总条数
    response['totalCount'] = paginator.count
    # 每页显示条数
    response['numPerPage'] = pageSize
    # 总页数
    response['totalPage'] = paginator.num_pages
    try:
        cases = paginator.page(page)
    except PageNotAnInteger:
        cases = paginator.page(1)
    except EmptyPage:
        cases = paginator.page(paginator.num_pages)
    # 当前多少页
    response['pageNum'] = cases.number
    # 获取数据
    response['list'] = json.loads(serializers.serialize("json", cases.object_list), encoding='utf-8')
    res = {}
    res['status'] = 10000
    res['message'] = "获取成功"
    res['data'] = response
    return res


class PagenationList(object):

    def __init__(self,data_list,page,per_data_num = 10):
        '''
        对list对象进行分页返回
        :param data_list: 所有数据列表
        :param page: 当前要查看的列表页
        :param per_data_num: 每页默认要显示几条
        '''
        self.data_list = data_list
        self.page = int(page)
        self.per_data_num = per_data_num

    @property
    def start(self):
        '''
        计算引索的起始位置
        :return:
        '''
        return (self.page - 1) * self.per_data_num

    @property
    def end(self):
        '''
        计算引索的结束位置
        :return:
        '''
        return self.page * self.per_data_num

    def show(self):
        '''
        切片取数据,展示对应分页的结果
        :return:
        '''
        result = self.data_list[self.start:self.end]
        data = []
        for row in result:
            data.append(row)
        return data

    def pagin(self):
        item = dict()
        data = self.show()
        item['status'] = 10000
        item["data"] = data
        item["totalCount"] = len(self.data_list)   # 总条数
        item["numPerPage"] = self.per_data_num   # 每页显示数量
        if int(item["totalCount"]) % int(item["numPerPage"]):
            item["totalPage"] = (int(item["totalCount"]) // int(item["numPerPage"])) + 1   # 总页数
        else:
            item["totalPage"] = int(item["totalCount"]) // int(item["numPerPage"])
        item["pageNum"] = self.page
        item['message'] = "获取成功"
        return item



