
class Mypi:
    def __init__(self):
        self.name = "MyPi"
        self.age = 20

    def say_hi(self):
        print("Hi, my name is", self.name)

    def say_age(self):
        print("I am", self.age, "years old")

    def say_hi_and_age(self):
        self.say_hi()
        self.say_age()

def Str(str, call):
    print(getattr(str, call)())

str = "Hello MyPi"
dir(str)

# instantiate class
mipi = Mypi()

print(dir(mipi))

# Haiku
Str("haiku", { "name": [ "title", "capitalize" ] })
Str("haiku", "capitalize")

# random number
import random
print(random.randint(1, 100))