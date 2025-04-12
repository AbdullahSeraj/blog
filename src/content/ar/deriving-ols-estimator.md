---
title: اشتقاق مُقدِّر المربعات الصغرى العادية (OLS)
date: "2022-12-21"
tags: ["next-js", "رياضيات", "ols"]
draft: false
summary: "كيفية اشتقاق مُقدِّر OLS باستخدام تدوين المصفوفات وجولة في تنضيد المعادلات الرياضية باستخدام Markdown بمساعدة KaTeX."
---

# مقدمة

تم تضمين تحليل وعرض المعادلات الرياضية في هذا القالب الخاص بالتدوين. يتم تمكين تحليل الرياضيات باستخدام `remark-math` و`rehype-katex`.  
تم تضمين KaTeX والخط المرتبط به في ملف `_document.js` لذا يمكنك استخدامه في أي صفحة.  
[^footnote]

[^footnote]: للاطلاع على القائمة الكاملة للدوال المدعومة في TeX، راجع [توثيق KaTeX](https://katex.org/docs/supported.html)

يمكن تضمين الرموز الرياضية داخل السطر عبر إحاطة المصطلح بعلامة `$`.

كتل المعادلات تُكتب بين علامتي `$$`.

إذا كنت تنوي استخدام علامة `$` بمعناها العادي (أي المال)، يمكنك الهروب منها (`\$`) أو استخدام كيان HTML (`&dollar;`) [^2]

يتم دعم الحواشي السفلية سواء كانت ضمن السطر أو مرقمة يدويًا. انقر على الروابط أعلاه لرؤيتها قيد الاستخدام.

[^2]: \$10 و &dollar;20.

# اشتقاق مُقدِّر OLS

باستخدام تدوين المصفوفات، دع $n$ تمثل عدد المشاهدات و$k$ تمثل عدد المتغيرات التفسيرية.

متجه المتغيرات التابعة $\mathbf{Y}$ هو مصفوفة بحجم $n 	imes 1$،

```tex
\mathbf{Y} = \left[\begin{array}
  {c}
  y_1 \\
  . \\
  . \\
  . \\
  y_n
\end{array}\right]
```

$$
\mathbf{Y} = \left[\begin{array}
  {c}
  y_1 \\
  . \\
  . \\
  . \\
  y_n
\end{array}\right]
$$

مصفوفة المتغيرات التفسيرية $\mathbf{X}$ هي مصفوفة بحجم $n 	imes k$ (أو أن كل صف هو متجه بحجم $k 	imes 1$)،

```latex
\mathbf{X} = \left[\begin{array}
  {ccccc}
  x_{11} & . & . & . & x_{1k} \\
  . & . & . & . & .  \\
  . & . & . & . & .  \\
  . & . & . & . & .  \\
  x_{n1} & . & . & . & x_{nn}
\end{array}\right] =
\left[\begin{array}
  {c}
  \mathbf{x}'_1 \\
  . \\
  . \\
  . \\
  \mathbf{x}'_n
\end{array}\right]
```

$$
\mathbf{X} = \left[\begin{array}
  {ccccc}
  x_{11} & . & . & . & x_{1k} \\
  . & . & . & . & .  \\
  . & . & . & . & .  \\
  . & . & . & . & .  \\
  x_{n1} & . & . & . & x_{nn}
\end{array}\right] =
\left[\begin{array}
  {c}
  \mathbf{x}'_1 \\
  . \\
  . \\
  . \\
  \mathbf{x}'_n
\end{array}\right]
$$

متجه الأخطاء $\mathbf{U}$ هو أيضًا مصفوفة بحجم $n 	imes 1$.

في بعض الأحيان قد يكون من الأسهل استخدام تدوين المتجهات. من أجل التناسق، سأستخدم الرمز x الصغير العريض للدلالة على المتجهات والحروف الكبيرة للدلالة على المصفوفات. المشاهدات الفردية يتم الإشارة إليها بواسطة المؤشر.

## المربعات الصغرى

**نبدأ من**:  
$$y_i = \mathbf{x}'_i \beta + u_i$$

**الافتراضات**:

1. الخطية (كما في الأعلى)
2. $E(\mathbf{U}|\mathbf{X}) = 0$ (استقلال شرطي)
3. $ ext{rank}(\mathbf{X}) = k$ (عدم وجود ارتباط خطي مثالي، أي رتبة كاملة)
4. $Var(\mathbf{U}|\mathbf{X}) = \sigma^2 I_n$ (تجانس التباين)

**الهدف**:  
إيجاد $\beta$ التي تقلل مجموع مربعات الأخطاء:

$$
Q = \sum_{i=1}^{n}{u_i^2} = \sum_{i=1}^{n}{(y_i - \mathbf{x}'_i\beta)^2} = (Y-X\beta)'(Y-X\beta)
$$

**الحل**:  
تلميح: $Q$ هو عدد (مصفوفة $1 	imes 1$)، وبحسب التماثل $\frac{\partial b'Ab}{\partial b} = 2Ab$.

نأخذ مشتقة $Q$ بالنسبة إلى $\beta$:

```tex
\begin{aligned}
  \min Q           & = \min_{\beta} \mathbf{Y}'\mathbf{Y} - 2\beta'\mathbf{X}'\mathbf{Y} +
  \beta'\mathbf{X}'\mathbf{X}\beta \\
                   & = \min_{\beta} - 2\beta'\mathbf{X}'\mathbf{Y} + \beta'\mathbf{X}'\mathbf{X}\beta \\
  \text{[FOC]}~~~0 & =  - 2\mathbf{X}'\mathbf{Y} + 2\mathbf{X}'\mathbf{X}\hat{\beta}                  \\
  \hat{\beta}      & = (\mathbf{X}'\mathbf{X})^{-1}\mathbf{X}'\mathbf{Y}                              \\
                   & = (\sum^{n} \mathbf{x}_i \mathbf{x}'_i)^{-1} \sum^{n} \mathbf{x}_i y_i
\end{aligned}
```

$$
\begin{aligned}
  \min Q           & = \min_{\beta} \mathbf{Y}'\mathbf{Y} - 2\beta'\mathbf{X}'\mathbf{Y} +
  \beta'\mathbf{X}'\mathbf{X}\beta \\
                   & = \min_{\beta} - 2\beta'\mathbf{X}'\mathbf{Y} + \beta'\mathbf{X}'\mathbf{X}\beta \\
  \text{[FOC]}~~~0 & =  - 2\mathbf{X}'\mathbf{Y} + 2\mathbf{X}'\mathbf{X}\hat{\beta}                  \\
  \hat{\beta}      & = (\mathbf{X}'\mathbf{X})^{-1}\mathbf{X}'\mathbf{Y}                              \\
                   & = (\sum^{n} \mathbf{x}_i \mathbf{x}'_i)^{-1} \sum^{n} \mathbf{x}_i y_i
\end{aligned}
$$
