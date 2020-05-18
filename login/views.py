from datetime import datetime
import hashlib
import json
import dateutil.relativedelta
import time
from TestIntegration.settings import SECRET_KEY
from . import models
from django.http import JsonResponse
from rest_framework.views import APIView
from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import render
from django.shortcuts import redirect
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.core.exceptions import ObjectDoesNotExist  # models.user.get(username=username)找不到时错误捕捉
from rest_framework.authentication import BaseAuthentication
from rest_framework import exceptions
# Create your views here.
from rest_framework import HTTP_HEADER_ENCODING

def hash_code(username):
    m = hashlib.md5(bytes(username, encoding='utf-8'))
    m.update(bytes(SECRET_KEY + str(time.time()), encoding='utf-8'))
    return m.hexdigest()


class Goods(APIView):
    """
    @api {get} /index/  首页展示
    @apiVersion 1.0.0
    @apiName  index
    @apiGroup Login
    @apiDescription  详细描述:登陆后的首页内容展示
    @apiExample API调用示例:
    curl -i http://localhost:8000/index/
    @apiParam {String} Authorization token值.
    @apiParam {String} Content-Type application/json.
    @apiSuccess {List} data_list 商品列表.
    @apiSuccess {String} goods_name 名称.
    @apiSuccess {String} price 价格.
    @apiSuccess {String} status 状态.
    @apiSuccessExample {json} 返回事例:
        HTTP/1.1 200 OK
        data_list:[
                {'id': 1, 'goods_name': "草莓", 'price': 19.99, 'status': True},
                {'id': 2, 'goods_name': "香蕉", 'price': 9.88, 'status': True},
                {'id': 3, 'goods_name': "苹果", 'price': 5.99, 'status': True},
                {'id': 4, 'goods_name': "蓝莓", 'price': 9.99, 'status': True},
            ]

    @apiError Unauthorized token认证失败.

    @apiErrorExample {json} Error-Response:
        HTTP/1.1 Error 401: Unauthorized
        {
            "detail": "token错误"
        }
    """
    authentication_classes = []

    def get(self, request, *args, **kwargs):
        print(request.user, request.auth)
        try:
            goods_data_list = [
                {'id': 1, 'goods_name': "草莓", 'price': 19.99, 'status': True},
                {'id': 2, 'goods_name': "香蕉", 'price': 9.88, 'status': True},
                {'id': 3, 'goods_name': "苹果", 'price': 5.99, 'status': True},
                {'id': 4, 'goods_name': "蓝莓", 'price': 9.99, 'status': True},
            ]
            return Response({"code": 200, "msg": "商品接口", "data_list": goods_data_list})
        except Exception as e:
            print(e)
            return Response({"code": 500, "error": "接口维护中..."})


class LoginView(APIView):
    """
        @api {post} /login  登陆
        @apiVersion 1.0.0
        @apiName  login
        @apiGroup Login
        @apiDescription  详细描述:登陆接口
        @apiExample API调用示例:
        curl -i http://localhost:8000/login
        @apiParam {String} username 用户名.
        @apiParam {String} password 密码.
        @apiParam {String} Content-Type application/json.
        @apiSuccess {String} status 状态码.
        @apiSuccess {String} code code.
        @apiSuccess {String} msg 说明.
        @apiSuccess {String} token 登陆后记录的token值.
        @apiSuccessExample {json} 返回事例:
            HTTP/1.1 200 OK
            {
                "status": "200",
                "code": 1000,
                "msg": "登陆成功",
                "token": "2073d2ed6aadd9b5a59f16c306f7ecc0"
            }

        @apiError code 1001.

        @apiErrorExample {json} Error-Response:
            {
                "status": "200",
                "code": 1001,
                "msg": "用户名或密码错误"
            }
    """
    authentication_classes = []  # 在设置了全局验证后，[]代表不进行验证
    def post(self,request, *args, **kwargs):
        ret = {"status": "200", 'code': 1000, 'msg': None}
        print(request.body)
        try:
            if  request.POST and request.POST.get('username'):
                username = request.POST.get('username').strip()
                password = request.POST.get('password')
            else:
                data = json.loads(request.body)
                username = data.get('username')
                password = data.get('password')
            user_obj = models.User.objects.filter(username=username, password=password).first()
            if user_obj:
                token = hash_code(username)
                # 保存(存在就更新不存在就创建，并设置过期时间为5分钟)
                expiration_time = datetime.now() + dateutil.relativedelta.relativedelta(days=1)
                defaults = {
                    "token":token,
                    "expiration_time":expiration_time
                            }
                models.UserToken.objects.update_or_create(username=user_obj, defaults=defaults)
                ret["msg"] = "登陆成功"
                ret["token"] = token
                return Response(ret)
            else:
                ret["code"] = 1001
                ret["msg"] = "用户名或密码错误"
                return Response(ret)
        except Exception as e:
            print(e)
            ret["code"] = 1002
            ret["msg"] = "登陆失败！请重新登陆"
            return Response(ret)


class Register(APIView):
    """
        @api {post} /register  注册
        @apiVersion 1.0.0
        @apiName  register
        @apiGroup Login
        @apiDescription  详细描述:注册接口
        @apiExample API调用示例:
        curl -i http://localhost:8000/register
        @apiParam {String} username 用户名
        @apiParam {String} password 密码
        @apiParam {String} Content-Type application/x-www-form-urlencoded
        @apiSuccess {String} status 状态码.
        @apiSuccess {String} msg 说明.
        @apiSuccessExample {json} 返回事例:
            HTTP/1.1 200 OK
            {
                "status": 200,
                "msg": "注册成功"
            }

        @apiError code 1001.
        @apiErrorExample {json} Error-Response:
            {
                "status": "200",
                "code": 1001,
                "msg": "用户名或密码错误不符合要求"
            }
    """
    authentication_classes = []  # 在设置了全局验证后，[]代表不进行验证
    def post(self, request, *args, **kwargs):
    # return render(request, 'login/register.html')
        print(request.body)
        if  request.POST and request.POST.get('username'):
            username = request.POST.get('username').strip()
            password = request.POST.get('password')

        else:
            data = json.loads(request.body)
            username = data.get('username').strip()
            password = data.get('password')
        user = models.User.objects.filter(username=username).first()
        if user:
            return Response({"status": 200, "msg": "注册失败，用户名已存在"})

        try:
            created = models.User.objects.create(username=username, password=password)
            if created:
                return Response({"status": 200, "msg": "注册成功"})
        except Exception as e:
            print(e)
            return Response({"status": 400, "msg": "注册失败"})

@csrf_exempt
def logout(request):
    try:
        del request.session["sign"]
    except KeyError:
        pass
    return JsonResponse({"status": 200, "msg": "退出成功"})
    # return redirect("/login/")
