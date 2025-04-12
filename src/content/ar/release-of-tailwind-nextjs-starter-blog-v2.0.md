---
title: "إصدار قالب Tailwind Nextjs Starter Blog v2.0"
date: "2021-08-05"
lastmod: "2023-08-05"
tags: ["next-js", "tailwind", "دليل", "ميزة"]
draft: false
summary: "إصدار نسخة جديدة من قالب Tailwind Nextjs Starter Blog بإصدار v2.0 مع إعادة هيكلة شاملة لدعم مجلد التطبيقات في Next.js ومكونات الخادم React. تعرف على الميزات الجديدة وكيفية الترقية من V1."
images: ["/static/images/twitter-card.png"]
---

## المقدمة

مرحبًا بكم في إصدار v2.0 من قالب Tailwind Nextjs Starter Blog. يتضمن هذا الإصدار إعادة هيكلة كبيرة لدعم مجلد التطبيقات (App Directory) في Next.js ومكونات الخادم React. تابع القراءة لاكتشاف الميزات الجديدة وكيفية الترقية من V1.

## من V1 إلى V2

تم إصدار القالب لأول مرة في يناير 2021، واستخدمه الآلاف من المستخدمين منذ ذلك الحين. وقد ظهر في [Next.js Templates](https://vercel.com/templates/next.js/tailwind-css-starter-blog) و[Tailwind Awesome](https://www.tailwindawesome.com/resources/tailwind-nextjs-starter-blog) وغيرهما. الإصدار الثاني يبني على هذا النجاح ويضيف مزايا وتحسينات جديدة.

من أهم التغييرات اعتماد Contentlayer لمعالجة Markdown وMDX، وتكامل مع مكتبة Pliny التي تضيف ميزات مثل التحليلات والتعليقات والنشرات الإخبارية. تمت إضافة مكون بحث جديد باستخدام ⌘-K أيضًا.

## مجلد التطبيقات ومكونات الخادم

مع استقرار App Router في Next.js، تم إعادة بناء القالب ليعتمد عليه، مما يتيح رندر هجين يجمع بين سرعة الخادم وتفاعل المتصفح. هذا يتطلب بنية مجلد جديدة وتقسيم المكونات بين الخادم والمتصفح.

## Typescript أولاً

الآن الكود مكتوب بالكامل بـ TypeScript، لتوفير تجربة تطوير أفضل، وتكامل أسهل مع Contentlayer.

## Contentlayer

أداة قوية لتحويل ملفات Markdown/MDX إلى بيانات JSON آمنة من الأخطاء. تدعم إعادة التحميل الفوري وتوليد أنواع TypeScript تلقائيًا، مما يحسن الأداء وسهولة التطوير.

## Pliny

مكتبة توفر مكونات جاهزة مثل:

- تحليلات (Google, Plausible, Umami)
- تعليقات (Disqus, Giscus, Utterances)
- نشرات بريدية (Mailchimp, Convertkit، وغيرها)
- مكونات واجهة مثل جدول المحتويات والبحث

## مكون البحث الجديد

تمت إضافة شريط بحث حديث يدعم مزودي بحث مثل Algolia وKbar، مع واجهة متوافقة مع Tailwind CSS.

## التخصيص والتنسيقات

- دعم الوضع الليلي باستخدام `prose-invert`
- اللون الأساسي أصبح pink، والخط الافتراضي هو Space Grotesk
- تخطيط جديد للمقالات مثل `PostBanner` وتحديثات على صفحة المقالات مع شريط جانبي للوسوم

## توصيات الترقية

نظرًا للتغييرات الجذرية، يُفضل البدء من القالب الجديد ثم نسخ المحتوى والتعديلات القديمة تدريجيًا، بما في ذلك إعدادات Tailwind وContentlayer والتخطيطات.

## الخاتمة

نأمل أن تستمتع بالميزات الجديدة في الإصدار الثاني. لأي ملاحظات، لا تتردد في التواصل عبر [Twitter](https://twitter.com/timlrx) أو GitHub.

## الدعم

إذا كنت تستخدم القالب، ادعم المشروع بإعطاء نجمة على GitHub أو مشاركته مع الآخرين أو كن راعيًا له عبر [GitHub Sponsors](https://github.com/sponsors/timlrx).

## الرخصة

[MIT](https://github.com/timlrx/tailwind-nextjs-starter-blog/blob/main/LICENSE) © [Timothy Lin](https://www.timrlx.com)
"""

# حفظ الملف

Path(file_path).write_text(arabic_translation.strip(), encoding="utf-8")
file_path
