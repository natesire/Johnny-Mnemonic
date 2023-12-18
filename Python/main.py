def Str(str, call, arg = None):
    if arg: 
        print(getattr(str, call)(arg))
    else:
        print(getattr(str, call)())

str = "Hello MyPy"
#print(dir(str))

#Str("haiku", { "group": [ "title", "capitalize" ] })
Str("group1", "capitalize")
Str("group1", "casefold")
Str("group1", "center", 1)