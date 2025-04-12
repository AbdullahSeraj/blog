---
title: ملف .md نموذجي
date: "2016-03-08"
tags: ["markdown", "كود", "features"]
draft: false
summary: "مثال على ملف ماركداون يحتوي على كتل كود وتظليل نحوي"
---

منشور نموذجي باستخدام الماركداون.

## تظليل مضمن

مثال على تظليل مضمن `sum = parseInt(num1) + parseInt(num2)`

## كتل الكود

بعض كود جافاسكريبت

```javascript
var num1, num2, sum;
num1 = prompt("أدخل الرقم الأول");
num2 = prompt("أدخل الرقم الثاني");
sum = parseInt(num1) + parseInt(num2); // "+" تعني "جمع"
alert("المجموع = " + sum); // "+" تعني دمج في سلسلة نصية
```

بعض كود بايثون 🐍

```python
def fib():
    a, b = 0, 1
    while True:            # التكرار الأول:
        yield a            # يرجع 0 في البداية ثم
        a, b = b, a + b    # a تصبح 1 و b أيضًا 1 (0 + 1)

for index, fibonacci_number in zip(range(10), fib()):
     print('{i:3}: {f:3}'.format(i=index, f=fibonacci_number))

```
