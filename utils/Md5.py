import  hashlib



def Md5(key):
    m = hashlib.md5()
    m.update(bytes(key, encoding='utf-8'))
    return m.hexdigest()
