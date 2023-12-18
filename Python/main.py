def Str(str, call, arg = None):
    if arg: 
        print(getattr(str, call)(arg))
    else:
        print(getattr(str, call)())

str = "Hello MyPy"
funcs = dir(str)
print(funcs)
for f in funcs:
    # search for substr
    if f.find("is") > -1:
        print(f)

Str("group1", "capitalize")
Str("group1", "casefold")
Str("group1", "center", 1)

Str("find", "find", "a")
Str("find", "rfind", "a")

Str("format", "format", "a")
Str("format", "format_map", "a")

Str("index", "index", "i")
Str("index", "rindex", "i")

Str("is", "isalnum")
Str("is", "isalpha")
Str("is", "isascii")
Str("is", "isdecimal")
Str("is", "isdigit")
Str("is", "isidentifier")
Str("is", "islower")
Str("is", "isnumeric")
Str("is", "isprintable")
Str("is", "isspace")
Str("is", "istitle")
Str("is", "isupper")

Str("upper", "isupper")

Str("strip", "strip")
Str("strip", "rstrip")
Str("strip", "lstrip")

Str("split", "split")
Str("split", "rsplit")
Str("split", "splitlines")

Str("endswith", "endswith", "a")
Str("startsWith", "splitlines")

Str("zfill", "zfill", 1)