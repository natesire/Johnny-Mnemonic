def Str(str, call, arg = None):
    if arg: 
        print(getattr(str, call)(arg))
    else:
        print(getattr(str, call)())

str = "Hello MyPy"
funcs = dir(str)
for f in funcs:
    # search for substr
    if f.find("find") > -1:
        print(f)

#Str("haiku", { "group": [ "title", "capitalize" ] })
Str("group1", "capitalize")
Str("group1", "casefold")
Str("group1", "center", 1)

Str("find", "find", "a")
Str("find", "rfind", "a")