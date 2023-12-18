def func1(arg1, arg2):
    var65 = var5(arg2, arg1)
    if arg2 < var65:
        var66 = ((arg2 & 682) + 1586571469) + arg1 + -1809594463 | (var65 | arg2 + -1170568413 + arg1)
    else:
        var66 = var65 | -1328349966 + (arg2 + arg2 + ((((arg1 & var65 ^ 901) | 819 + 210983695 & var65) | ((arg2 & (940 ^ (788 & var65 ^ -786 | arg2))) | ((-368 + arg2) | arg1)) & (29 - arg1)) & arg2))
    var67 = -689198510 ^ 186947164 + var65 + var65
    var68 = (arg1 - ((257 + (var67 + var65 ^ var65) & arg1) + -796904151 | var65 - var65)) ^ var67
    var69 = arg1 | ((var67 - var65) ^ arg1)
    result = var65 ^ arg1 | var68 ^ var68 & arg2
    return result
def func4(arg6, arg7):
    var44 = func5(arg7, arg6)
    def func14(arg45, arg46):
        var47 = var44 - arg6
        var48 = arg46 | arg7
        var49 = var48 + (var47 + ((var47 - var44) - var48 & ((arg7 + 310 + arg45) | arg45) + 913 ^ arg6 ^ arg45 & ((var47 & 1446868803) - var48))) - arg45
        var50 = (arg6 - ((((-1864346048 - var47) | -645 | (((arg7 & (var48 ^ (233 + (arg45 ^ var48)) | var49)) ^ arg45 - var44) | var48 - var44) & var44 | -825) & var48) & arg45 ^ arg46) + arg45 & arg7) + 541
        result = arg46 - var49 - (var47 - -198) & 78
        return result
    var51 = func14(arg7, var44)
    var52 = (var44 + arg6 - -2052085969) - var51
    var53 = -1044976549 - arg7 + var52 & arg7
    var54 = arg6 | -376 ^ 630886923
    var55 = (var54 | var54 - 341769876) | var44
    var56 = 416 + var52 | var54
    var57 = var52 ^ 114 | -359 + -215
    var58 = arg7 ^ var57 + var56 + var55
    var59 = var57 ^ ((var52 ^ var57) & var54)
    var60 = (631 & (var44 ^ var58)) - var51
    var61 = (var57 | var54 + var44) ^ var58
    var62 = var61 | var53
    var63 = var51 | var61
    if var55 < arg7:
        var64 = var63 - var62
    else:
        var64 = var56 + var59
    result = var59 + arg6 ^ var62 + var54
    return result
def func5(arg8, arg9):
    if arg9 < arg9:
        var14 = class6()
    else:
        var14 = class8()
    for var15 in xrange(29):
        var14.func7(var15, arg9)
    if arg9 < arg8:
        var20 = class10()
    else:
        var20 = class12()
    for var21 in range(13):
        var22 = var20.func11
        var22(arg8, arg9)
    var23 = -625118143 + arg8
    var24 = arg9 | (-734 & -720 | arg8)
    var25 = ((arg8 | 548285151) + var23) ^ var23
    if var23 < var25:
        var26 = var23 ^ -1903570931 | arg9
    else:
        var26 = arg9 - var25 | var23
    var27 = (var23 + arg9 - 537) + -1789690116
    var28 = var24 - (var27 ^ -2031302001) | var24
    var29 = ((var24 + arg8) & var24) ^ arg8
    var30 = (arg9 | arg9 | var29) + var25
    var31 = 308 + var29
    var32 = (var29 & (var27 + var28)) - var31
    var33 = 407 + var28
    var34 = -1338170058 + var32
    var35 = var34 + (-972 & -514 - var33)
    var36 = var24 | arg8
    var37 = (var36 | var35) ^ var24
    var38 = var25 | (-884 ^ -487790126) + var36
    var39 = var35 & var34
    var40 = ((var37 - var27) | var36) | var29
    var41 = var35 | (var35 & var25 & var23)
    if var40 < var41:
        var42 = var29 - var32 & (var34 - var35)
    else:
        var42 = 290 & var33 & var31
    var43 = (var32 - arg9) | var29
    result = var30 & arg9 + var33 & (var25 ^ (arg8 ^ var39) ^ var43 ^ (((var28 ^ var27) | var41) & var38))
    return result
class class12(object):
    def func11(self, arg18, arg19):
        return 0
class class10(object):
    def func11(self, arg16, arg17):
        result = arg16 | ((1 - -96681856 - arg17 & arg17 | -1) ^ arg17)
        return result
class class8(object):
    def func7(self, arg12, arg13):
        return 0
class class6(class8):
    def func7(self, arg10, arg11):
        return 0
def func3():
    closure = [0]
    def func2(arg3, arg4):
        closure[0] += func4(arg3, arg4)
        return closure[0]
    func = func2
    return func
var5 = func3()
if __name__ == "__main__":
    print 'prog_size: 5'
    print 'func_number: 15'
    print 'arg_number: 70'
    for i in xrange(25000):
        x = 5
        x = func1(x, i)
        print x,
