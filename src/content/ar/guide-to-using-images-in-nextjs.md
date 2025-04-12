---
title: الصور في Next.js
date: "2020-11-11"
tags: ["next-js", "دليل"]
draft: false
summary: "في هذه المقالة نقدم كيفية إضافة الصور في مدونة Tailwind Starter وفوائد وقيود مكون next/image المدمج."
authors: ["sparrowhawk"]
---

# مقدمة

تدعم مدونة Tailwind Starter بشكل افتراضي [مكون الصور المدمج في Next.js](https://nextjs.org/docs/api-reference/next/image)، وتقوم تلقائيًا باستبدال علامات الصور الافتراضية في مستندات Markdown أو MDX باستخدام مكون Image المقدم.

# طريقة الاستخدام

لاستخدامه في صفحة جديدة أو ملف جافاسكريبت، ما عليك سوى استيراد مكون الصور واستدعاؤه، على سبيل المثال:

```js
import Image from "next/image";

function Home() {
  return (
    <>
      <h1>الصفحة الرئيسية</h1>
      <Image src="/me.png" alt="صورة المؤلف" width={500} height={500} />
      <p>مرحبًا بكم في صفحتي الرئيسية!</p>
    </>
  );
}

export default Home;
```

بالنسبة لملف Markdown، يمكن استخدام علامة الصور الافتراضية، حيث يتم استبدال علامة `img` الافتراضية بمكون `Image` أثناء عملية البناء.

لنفترض أن لدينا ملفًا باسم `ocean.jpg` في `static/images/ocean.jpg`، فإن السطر التالي من الكود سينشئ الصورة المحسنة.

```
![ocean](/static/images/ocean.jpg)
```

بدلاً من ذلك، نظرًا لأننا نستخدم MDX، يمكننا استخدام مكون الصور مباشرة! لاحظ أنه يجب عليك توفير عرض وارتفاع ثابتين. طريقة علامة `img` تقوم بتحليل الأبعاد تلقائيًا.

```js
<Image alt="ocean" src="/static/images/ocean.jpg" width={256} height={128} />
```

_ملاحظة_: إذا حاولت حفظ الصورة، ستكون بصيغة Webp إذا كان متصفحك يدعمها!

![ocean](/static/images/ocean.jpeg)

الصورة من [YUCAR FotoGrafik](https://unsplash.com/@yucar?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)
على [Unsplash](https://unsplash.com/s/photos/sea?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)

# الفوائد

- حجم صورة أصغر مع Webp (~30% أصغر من jpeg)
- صور متجاوبة - يتم تقديم حجم الصورة الصحيح بناءً على viewport المستخدم
- التحميل البطيء - يتم تحميل الصور عند التمرير إليها في viewport
- تجنب [الانزياح التراكمي للتخطيط (CLS)](https://web.dev/cls/)
- التحسين عند الطلب بدلاً من وقت البناء - لا زيادة في وقت البناء!

# القيود

- بسبب الاعتماد على `next/image`، ما لم تكن تستخدم CDN خارجي للصور مثل Cloudinary أو Imgix، فمن العملي أنك تحتاج إلى استخدام Vercel للاستضافة. وذلك لأن المكون يعمل كدالة serverless تستدعي CDN للصور محسنة للغاية.

  إذا كنت لا تريد أن تكون مقيدًا بـ Vercel، يمكنك إزالة `imgToJsx` في `remarkPlugins` في `lib/mdx.js`. هذا سيتجنب استبدال علامة `img` الافتراضية.

  بدلاً من ذلك، يمكنك الانتظار حتى يتم دعم تحسين الصور في وقت البناء. هناك مكتبة أخرى، [next-optimized-images](https://github.com/cyrilwanner/next-optimized-images) تقوم بذلك، على الرغم من أنها تتطلب تحويل الصور عبر webpack وهو غير مدعوم هنا.

- الصور من الروابط الخارجية لا يتم تمريرها عبر `next/image`
- يجب تخزين جميع الصور في مجلد `public`، على سبيل المثال `/static/images/ocean.jpeg`
  [file content end]
