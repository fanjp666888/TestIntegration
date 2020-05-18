from django.urls import path, include, re_path
from .views import *

urlpatterns = [
    # path('', admin.site.urls),
    path('project', project.as_view(), name="Project"),
    path('detail', case.as_view(), name="case"),
    path('delete-case', delete_case),   # 删除用例
    path('project-total', total.as_view(), name="total"),  # 获取总的项目下各版本用例汇总
    path('upload-casefile', casefile.as_view(), name="casefile"),   # 上传用例
    path('export-case', export_case, name='export-case'),  # 导出测试用例
    path('version-case', versioncase),   # 依据项目名称和版本号返回固定页数的测试用例集

    path('test', test)
]