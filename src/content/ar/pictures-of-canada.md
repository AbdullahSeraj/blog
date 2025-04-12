---
title: "يا كندا"
date: "2017-07-15"
tags: ["عطلة", "كندا", "صور"]
draft: false
layout: PostBanner
images: ["/static/images/canada/mountains.jpg"]
summary: "مناظر كندا الخلابة التي تضم أوراق القيقب والجبال المغطاة بالثلوج والبحيرات الفيروزية وتورونتو. استمتع بالمشاهد في معرض الصور هذا وتعرّف على سهولة تنفيذها باستخدام MDX وبعض كود Tailwind."
---

أراضي كندا الخلابة تضم أوراق القيقب والجبال المغطاة بالثلوج والبحيرات الفيروزية وتورونتو. استمتع بهذه المشاهد في معرض الصور وشاهد مدى سهولة تنفيذها باستخدام MDX وبعض كود Tailwind CSS.

تُعرض الصور باستخدام مكون `next/image`. الصور المخزنة محليًا تقع في المسار التالي: `/static/images/canada/[اسم-الملف].jpg`

نظرًا لاستخدامنا mdx، يمكننا إنشاء شبكة flexbox مرنة لعرض الصور باستخدام بعض صنوف tailwind css.

---

# المعرض

```js
<div className="-mx-2 flex flex-wrap overflow-hidden xl:-mx-2">
  <div className="my-1 w-full overflow-hidden px-2 xl:my-1 xl:w-1/2 xl:px-2">
    ![Maple](/static/images/canada/maple.jpg)
  </div>
  <div className="my-1 w-full overflow-hidden px-2 xl:my-1 xl:w-1/2 xl:px-2">
    ![Lake](/static/images/canada/lake.jpg)
  </div>
  <div className="my-1 w-full overflow-hidden px-2 xl:my-1 xl:w-1/2 xl:px-2">
    ![Mountains](/static/images/canada/mountains.jpg)
  </div>
  <div className="my-1 w-full overflow-hidden px-2 xl:my-1 xl:w-1/2 xl:px-2">
    ![Toronto](/static/images/canada/toronto.jpg)
  </div>
</div>
```

# التنفيذ

```js
<div className="-mx-2 flex flex-wrap overflow-hidden xl:-mx-2">
  <div className="my-1 w-full overflow-hidden px-2 xl:my-1 xl:w-1/2 xl:px-2">
    ![Maple](/static/images/canada/maple.jpg)
  </div>
  <div className="my-1 w-full overflow-hidden px-2 xl:my-1 xl:w-1/2 xl:px-2">
    ![Lake](/static/images/canada/lake.jpg)
  </div>
  <div className="my-1 w-full overflow-hidden px-2 xl:my-1 xl:w-1/2 xl:px-2">
    ![Mountains](/static/images/canada/mountains.jpg)
  </div>
  <div className="my-1 w-full overflow-hidden px-2 xl:my-1 xl:w-1/2 xl:px-2">
    ![Toronto](/static/images/canada/toronto.jpg)
  </div>
</div>
```

With MDX v2, one can interleave markdown in jsx as shown in the example code.

### حقوق الصور

```js
<div>
  Maple photo by [Guillaume
  Jaillet](https://unsplash.com/@i_am_g?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText)
  on
  [Unsplash](https://unsplash.com/s/photos/canada?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText)
</div>
<div>
  Mountains photo by [John
  Lee](https://unsplash.com/@john_artifexfilms?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText)
  on
  [Unsplash](https://unsplash.com/s/photos/canada?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText)
</div>
<div>
  Lake photo by [Tj
  Holowaychuk](https://unsplash.com/@tjholowaychuk?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText)
  on
  [Unsplash](https://unsplash.com/s/photos/canada?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText)
</div>
<div>
  Toronto photo by [Matthew
  Henry](https://unsplash.com/@matthewhenry?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText)
  on
  [Unsplash](https://unsplash.com/s/photos/canada?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText)
</div>
```
