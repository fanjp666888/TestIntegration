from django.db import models

# Create your models here.



class ProjectCase(models.Model):
    """项目标"""
    project_name = models.CharField(max_length=20, unique=True, verbose_name="项目名称")
    project_type = models.CharField(max_length=128, verbose_name="项目类型", blank=True)
    create_time = models.DateTimeField(auto_now_add=True, verbose_name="创建时间")
    update_time = models.DateTimeField(auto_now=True, verbose_name="更新时间")


    # def __str__(self):
    #     return self.project_name,self.project_type,self.version_name,self.version_number
    class Meta:
        db_table = "project_case"
        verbose_name = verbose_name_plural = "用例项目表"



class TestCase(models.Model):
    """用例表"""
    case_id = models.CharField(max_length=128, verbose_name="用例编号")
    version_number = models.CharField(max_length=128, verbose_name="版本号")
    module_name = models.CharField(max_length=128, verbose_name="模块名称", blank=True)
    test_title = models.CharField(max_length=128, verbose_name="测试标题", blank=True)
    condition = models.CharField(max_length=128, verbose_name="前置条件", blank=True)
    step = models.CharField(max_length=128, verbose_name="测试步骤")
    forecast_result = models.CharField(max_length=128, verbose_name="预期结果")
    result = models.CharField(max_length=128, verbose_name="实际结果", blank=True)
    test_person = models.CharField(max_length=128, verbose_name="测试人员", blank=True)
    write_person = models.CharField(max_length=128, verbose_name="用例编写人员", blank=True)
    remark = models.CharField(max_length=128, verbose_name="备注", blank=True)
    create_time = models.DateTimeField(auto_now_add=True, verbose_name="创建时间")
    update_time = models.DateTimeField(auto_now=True, verbose_name="更新时间")
    project_name = models.ForeignKey(ProjectCase, on_delete=models.DO_NOTHING)

    # def __str__(self):
    #     return self.case_id

    class Meta:
        db_table = "test_case"
        unique_together = ("case_id", "version_number")  # 联合唯一约束
        verbose_name = verbose_name_plural = "功能测试用例表"

