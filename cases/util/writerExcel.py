import xlsxwriter

def writeExcel(path, data):
    """
    将数组数据写成xlsx文件
    :param data: path存储路径；data:[[表头],[内容],[内容]]
    :return: xlsx文件
    """
    wb = xlsxwriter.Workbook(path)

    bold = wb.add_format({   # 格式配置
        #'bold': True,  # 字体加粗
        #'border': 1,  # 单元格边框宽度
        'align': 'left',  # 水平对齐方式
        'valign': 'vcenter',  # 垂直对齐方式
        #'fg_color': 'yellow',  # 单元格背景颜色
        # 'text_wrap': True,  # 是否自动换行
        #'font_color': 'red',  # 字体颜色
    })
    sheet = wb.add_worksheet('sheet1')
    sheet.set_column('A:O',10)   # 设置列宽
    for row, item in enumerate(data):
        for colume, value in enumerate(item):
            # sheet.write(row, colume, value)
            sheet.write(row, colume, value, bold)   # 将上面的格式配置写入时生效



    wb.close()

# data = [
#     ['年度', '数量','剩余数量'],
#     ['2016', '100', 200],
#     ['2017', '150', 200.5],
#     ['2018', '200', 200.05],
#     ['2019', '2019-12-12 12:12:12', 300],
#     ['2020', '300', '2019-12-12 12:12:12'],
# ]
# path = 'E:\\TestIntegration\\cases\\static\\excels\\'
# file_name = '商品系统V1.0.0功能测试用例'
# writeExcel(path, file_name, data)