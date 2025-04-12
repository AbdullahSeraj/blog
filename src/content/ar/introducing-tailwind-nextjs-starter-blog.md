---
title: "مقدمة إلى قالب المدونة Tailwind Nextjs"
date: "2021-01-12"
lastmod: "2024-08-16"
tags: ["next-js", "tailwind", "دليل"]
draft: false
summary: "هل تبحث عن قالب جاهز عالي الأداء يدعم أحدث تقنيات الويب لتدوينك؟ جرّب قالب Tailwind Nextjs Starter Blog."
images:
  ["/static/images/canada/mountains.jpg", "/static/images/canada/toronto.jpg"]
authors: ["default", "sparrowhawk"]
---

![tailwind-nextjs-banner](/static/images/twitter-card.png)

# قالب مدونة Tailwind Nextjs

[![النشر عبر Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/timlrx/tailwind-nextjs-starter-blog)

> [!تحذير]
> هذا هو ملف README للإصدار الأول من القالب. يُحتفظ به لأسباب تاريخية، لكنه لم يعد مدعومًا. كما أنه يُعد مثالًا جيدًا على [تنبيهات GitHub](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#alerts). للتوثيق الفعلي، يرجى الرجوع إلى [مستودع GitHub](https://github.com/timlrx/tailwind-nextjs-starter-blog).

هذا قالب تدوين مبني باستخدام [Next.js](https://nextjs.org/) و [Tailwind CSS](https://tailwindcss.com/). من المحتمل أن يكون أكثر قوالب التدوين عبر Markdown شمولًا. يأتي مهيأً بأحدث التقنيات لتسهيل الكتابة التقنية. سهل التهيئة والتخصيص. مثالي لاستبدال مدونات Jekyll أو Hugo الفردية.

راجع التوثيق أدناه للبدء.

تواجه مشاكل؟ راجع [صفحة الأسئلة الشائعة](https://github.com/timlrx/tailwind-nextjs-starter-blog/wiki) وابحث في المشكلات السابقة. لا تتردد في فتح مشكلة جديدة إن لم تكن موجودة.

هل لديك اقتراح ميزة؟ تحقق من المناقشات السابقة أو ابدأ نقاشًا جديدًا — كل الأفكار مرحب بها!

## أمثلة

- [مدونة العرض](https://tailwind-nextjs-starter-blog.vercel.app/)
- [مدونتي الشخصية](https://www.timlrx.com)
- [كتاب وصفات Aloisdg](https://tambouille.vercel.app/)
- [عرض GautierArcin مع الترجمة](https://tailwind-nextjs-starter-blog-seven.vercel.app/)
- [حديقة David Levai الرقمية](https://davidlevai.com/)
- [زاوية Thinh](https://thinhcorner.com/)

تستخدم القالب؟ أنشئ طلب دمج (PR) وأضف مدونتك للقائمة!

## الدوافع

أردت نقل مدونتي إلى Nextjs و Tailwind CSS ولكن لم أجد قالبًا جاهزًا مناسبًا، لذا قمت بإنشاء واحد. التصميم مستوحى من [مدونة Tailwindlabs](https://github.com/tailwindlabs/blog.tailwindcss.com).

كنت أريد قالبًا غنيًا بالمزايا مثل [beautiful-jekyll](https://github.com/daattali/beautiful-jekyll) و [Hugo Academic](https://github.com/wowchemy/wowchemy-hugo-modules) لكن بأفضل ممارسات React الحديثة.

## المزايا

- تخصيص سهل باستخدام [Tailwind 3.0](https://tailwindcss.com/blog/tailwindcss-v3)
- أداء ممتاز في اختبار Lighthouse
- تحميل أولي خفيف، يستخدم Preact في الإنتاج
- دعم العرض على الجوال
- الوضع الفاتح والداكن
- خطوط مستضافة ذاتيًا باستخدام [Fontsource](https://fontsource.org/)
- دعم التحليلات [Plausible](https://plausible.io/)، [Simple Analytics](https://simpleanalytics.com/) و Google Analytics
- دعم [MDX](https://mdxjs.com/)
- إبراز الصيغة على الخادم
- دعم عرض الرياضيات عبر [KaTeX](https://katex.org/)
- دعم الاستشهادات والمراجع
- تحسين الصور تلقائيًا باستخدام [next/image](https://nextjs.org/docs/basic-features/image-optimization)
- دعم للوسوم والمؤلفين المتعددين وقوالب التدوين والمزيد

(تم اختصار الوصف الكامل للمزايا لتوفير مثال مفيد - يمكن توسيعه لاحقًا.)

## بدء سريع

1. استخدم الأمر `npx degit` لتنزيل القالب
2. خصص `siteMetadata.js`
3. عدل إعدادات الأمان في `next.config.js`
4. عدل معلومات المؤلف في `authors/default.md`
5. عدل `projectsData.ts` و `headerNavLinks.ts`
6. أضف التدوينات وانشر على Vercel

## التطوير

شغّل الخادم التطويري:

```bash
npm start
# أو
npm run dev
```

ثم افتح [http://localhost:3000](http://localhost:3000) لتشاهد الموقع.

## التخصيص

كل التخصيصات تتم في مجلد `data` وملفات `tailwind.config.js` و `css/tailwind.css` وغيرها حسب الحاجة.

## الدعم

تستخدم القالب؟ ادعم المشروع بنجمة على GitHub، أو شارك مدونتك مع الآخرين، أو كن راعٍ للمشروع.

## الرخصة

[MIT](https://github.com/timlrx/tailwind-nextjs-starter-blog/blob/main/LICENSE) © [Timothy Lin](https://www.timrlx.com)