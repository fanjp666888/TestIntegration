from rest_framework import serializers
from .models import ProjectCase,TestCase
from rest_framework.validators import UniqueTogetherValidator
from drf_writable_nested import WritableNestedModelSerializer
# project_name_list = CaseProject.objects.values("project_name").all()
#
#
# class CaseSerializers(serializers.Serializer):
#     """操作test_cases表的模型序列化类"""
#     case_id = serializers.CharField(max_length=128, allow_null=True)
#     module_name = serializers.CharField(max_length=128, allow_null=True)
#     test_title = serializers.CharField(max_length=128, allow_null=True)
#     condition = serializers.CharField(max_length=128, allow_null=True)
#     step = serializers.CharField(max_length=128)
#     forecast_result = serializers.CharField(max_length=128)
#     result = serializers.CharField(max_length=128, allow_null=True)
#     test_person = serializers.CharField(max_length=128, allow_null=True)
#     write_person = serializers.CharField(max_length=128, allow_null=True)
#     remark = serializers.CharField(max_length=128, allow_null=True)
#
#     project_name = serializers.PrimaryKeyRelatedField(queryset=project_name_list)
#
#     def create(self, validated_data):
#         return TestCases.objects.create(**validated_data)
#
#     def update(self, instance, validated_data):
#         return instance.update(**validated_data)
#
#
# class ProjectSerializers(serializers.Serializer):
#     """操作case_project表的模型序列化类"""
#     project_name = serializers.CharField(max_length=128)
#     project_type = serializers.CharField(max_length=128, allow_null=True)
#     version_name = serializers.CharField(max_length=128, allow_null=True)
#     version_number = serializers.CharField(max_length=128)
#
#     def create(self, validated_data):
#         return CaseProject.objects.create(**validated_data)
#
#     def update(self, instance, validated_data):
#         return instance.update(**validated_data)



class CaseSerializers(serializers.ModelSerializer):
    # project_name = ProjectSerializers(many=True)
    class Meta:
        model = TestCase
        fields = '__all__'  # 代表模型的所有字段均转化为序列化字段；部分转化则使用元组的方式
        # validators: 解决联合唯一条件已经存在的问题时 is_valid验证不通过的问题
        validators = [UniqueTogetherValidator(queryset=TestCase.objects.all(),
                                              fields=("case_id", "version_number", "module_name", "test_title",
                                                      "condition","step","forecast_result","result","test_person",
                                                      "write_person","remark"),
                                              message="已经存在")]


class ProjectSerializers(serializers.ModelSerializer):
    # project_name = CaseSerializers(many=True)
    class Meta:
        model = ProjectCase
        fields = '__all__'
        # fields = ("id", "project_name", "project_type", "version_name", "version_number")




