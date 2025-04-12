---
title: الميزات الجديدة في الإصدار v1
date: 2021-08-07T15:32:14Z
tags: ["next-js", "tailwind", "دليل"]
draft: false
summary: "نظرة عامة على الميزات الجديدة التي تم إصدارها في v1 - نسخ كتل التعليمات البرمجية، مؤلفون متعددون، تخطيط frontmatter والمزيد"
---

## نظرة عامة

منشور عن الميزات الجديدة المقدمة في الإصدار 1.0. الميزات الجديدة:

- ألوان الثيم
- مترجم MDX XDM
- مكون جدول المحتويات
- التخطيطات
- التحليلات
- نظام تعليقات المدونة
- مؤلفون متعددون
- زر نسخ لكتل التعليمات البرمجية
- تمييز الأسطر وأرقام الأسطر
- مكون النشرة البريدية (v1.1.3)
- المراجع والاستشهادات (v1.2.1)
- خطوط مستضافة ذاتيًا (v1.5.0)
- دليل الترقية

انخفض حجم JS عند التحميل الأول من 43kB إلى 39kB على الرغم من جميع الميزات الجديدة المضافة! [^1]

[^1]: مع التغييرات الجديدة في Nextjs 12، زاد حجم JS عند التحميل الأول إلى 45kB.

راجع [دليل الترقية](#دليل-الترقية) أدناه إذا كنت تقوم بالترحيل من الإصدار v0 من القالب.

## ألوان الثيم

يمكنك بسهولة تعديل لون الثيم عن طريق تغيير السمة الأساسية في ملف تكوين tailwind:

```js:tailwind.config.js
theme: {
    colors: {
      primary: colors.teal,
      gray: colors.neutral,
      ...
    }
  ...
}
```

يجب تعيين السمة الأساسية لكائن يحتوي على مفاتيح من 50، 100، 200 ... 900 وقيم الألوان المقابلة.

يتضمن Tailwind لوحات ألوان افتراضية رائعة يمكن استخدامها لتخصيص موقعك. تحقق من [صفحة توثيق تخصيص الألوان](https://tailwindcss.com/docs/customizing-colors) للحصول على مجموعة كاملة من الخيارات.

هل تقوم بالترحيل من v1؟ يمكنك العودة إلى الثيم السابق عن طريق تعيين `primary` إلى `colors.sky` (Tailwind 2.2.2 وما فوق، وإلا `colors.lightBlue`) وتغيير gray إلى `colors.gray`.

من الإصدار v1.1.2+، يمكنك أيضًا تخصيص نمط كتل التعليمات البرمجية بسهولة عن طريق تعديل ورقة الأنماط `css/prism.css`. أسماء فئات الرموز متوافقة مع prismjs، لذا يمكنك نسخ وتكييف أنماط الرموز من ورقة أنماط prismjs مثل [سمات prism](https://github.com/PrismJS/prism-themes).

## مترجم MDX XDM

قمنا بتحويل حزمة MDX من [next-mdx-remote](https://github.com/hashicorp/next-mdx-remote) إلى [mdx-bundler](https://github.com/kentcdodds/mdx-bundler). يستخدم هذا [xdm](https://github.com/wooorm/xdm) تحت الغطاء، وهو أحدث إصدار من micromark 3 ومكتبات remark و rehype.

**تحذير:** إذا كنت تستخدم مكتبات remark أو rehype مخصصة، يرجى الترقية إلى الإصدارات المتوافقة مع micromark 3. إذا كنت تقوم بالترقية، يرجى حذف `node_modules` و `package-lock.json` لتجنب مشكلات التبعيات السابقة.

يحتوي [xdm](https://github.com/wooorm/xdm) على تحسينات متعددة مقارنة بـ [@mdx-js/mdx](https://github.com/mdx-js/mdx)، المترجم المستخدم داخليًا بواسطة next-mdx-remote، ولكن قد تكون هناك بعض التغييرات السلوكية. يرجى التحقق من إخراج markdown للتحقق.

تشمل بعض الإمكانيات الجديدة تحميل المكونات مباشرة في ملف MDX باستخدام بناء جملة الاستيراد وتضمين كود js الذي يمكن تجميعه وحزمه في خطوة البناء.

على سبيل المثال، يمكن استخدام مقتطف jsx التالي مباشرة في ملف MDX لعرض مكون عنوان الصفحة:

```jsx
// أو استيراد PageTitle من './components/PageTitle.js' إذا كنت تستخدم js
import PageTitle from "./components/PageTitle.tsx";
<PageTitle> استخدام مكونات JSX في MDX </PageTitle>;
```

يتيح التكوين الافتراضي حل جميع المكونات بالنسبة إلى دليل `components`.

**ملاحظة**:
المكونات التي تتطلب محملات صور خارجية تتطلب أيضًا تكوينًا إضافيًا لـ esbuild. المكونات التي تعتمد على حالة التطبيق العامة أو دورة الحياة مثل مكون `Link` في Nextjs لن تعمل مع هذا الإعداد لأن كل ملف mdx يتم بناؤه بشكل مستقل. لمثل هذه الحالات، من الأفضل استخدام استبدال المكون.

## مكون جدول المحتويات

مستوحى من [Docusaurus](https://docusaurus.io/docs/next/markdown-features/inline-toc) و [gatsby-remark-table-of-contents](https://www.gatsbyjs.com/plugins/gatsby-remark-table-of-contents/) في Gatsby، يتم تمرير متغير `toc` الذي يحتوي على جميع العناوين الرئيسية للمستند إلى ملف MDX ويمكن تنسيقه وفقًا لذلك. لجعل إنشاء جدول المحتويات (TOC) بسيطًا، يمكنك استخدام مكون `TOCInline` الموجود.

على سبيل المثال، تم إنشاء جدول المحتويات في هذا المنشور باستخدام الكود التالي:

```jsx
<TOCInline toc={props.toc} exclude="نظرة عامة" toHeading={2} />
```

يمكنك تخصيص العناوين المعروضة عن طريق تكوين خاصيات `fromHeading` و `toHeading`، أو استبعاد عناوين معينة عن طريق تمرير سلسلة أو مصفوفة سلاسل إلى خاصية `exclude`. افتراضيًا، يتم تحريك جميع العناوين ذات العمق 3 أو أقل. يمكن تكوين هذا عن طريق تغيير خاصية `indentDepth`. يمكن استخدام خاصية `asDisclosure` لعرض جدول المحتويات داخل عنصر قابل للتوسيع.

إليك جدول المحتويات الكامل المعروض داخل عنصر قابل للتوسيع.

```jsx
<TOCInline toc={props.toc} asDisclosure />
```

<TOCInline toc={props.toc} asDisclosure />

## التخطيطات

يمكنك تعيين محتوى مدونة MDX إلى مكونات التخطيط عن طريق تكوين حقل frontmatter. على سبيل المثال، هذا المنشور مكتوب باستخدام التخطيط الجديد `PostSimple`!

### إضافة قوالب جديدة

يتم تخزين قوالب التخطيط في مجلد `./layouts`. يمكنك إضافة مكونات React التي تريد تعيينها إلى محتوى markdown في هذا المجلد. يجب أن يتطابق اسم ملف المكون مع ذلك المحدد في حقل `layout` في frontmatter markdown.

الحقل الوحيد المطلوب هو `children` الذي يحتوي على محتوى MDX المقدم، على الرغم من أنك قد ترغب في تمرير محتويات frontMatter وعرضها في القالب.

يمكنك تكوين القالب لاستقبال حقول أخرى - راجع مكون `PostLayout` للحصول على مثال.

إليك مثال على تخطيط يمكنك تخصيصه further:

```jsx
export default function ExampleLayout({ frontMatter, children }) {
  const { date, title } = frontMatter;

  return (
    <SectionContainer>
      <div>{date}</div>
      <h1>{title}</h1>
      <div>{children}</div>
    </SectionContainer>
  );
}
```

### تكوين frontmatter لمنشور المدونة

استخدم حقل `layout` في frontmatter لتحديد القالب الذي تريد تعيين منشور markdown إليه. إليك كيف يبدو frontmatter لهذا المنشور:

```js
---
title: 'الميزات الجديدة في v1'
date: '2021-05-26   '
tags: ['next-js', 'tailwind', 'دليل']
draft: false
summary: 'تقديم ميزات التخطيط الجديدة - يمكنك تعيين محتوى مدونة MDX إلى مكونات التخطيط عن طريق تكوين حقل frontmatter'
layout: PostSimple
---
```

يمكنك تكوين التخطيط الافتراضي في قسم الصفحة المعني عن طريق تعديل متغير `DEFAULT_LAYOUT`. تم تعيين `DEFAULT_LAYOUT` لصفحة منشورات المدونة إلى `PostLayout`.

### توسيع

يتم تعيين `layout` إلى غلاف يحيط بمحتوى MDX بالكامل.

```jsx
export const MDXComponents = {
  Image,
  a: CustomLink,
  pre: Pre,
  wrapper: ({ components, layout, ...rest }) => {
    const Layout = require(`../layouts/${layout}`).default;
    return <Layout {...rest} />;
  },
};

export const MDXLayoutRenderer = ({ layout, mdxSource, ...rest }) => {
  const MDXLayout = useMemo(() => getMDXComponent(mdxSource), [mdxSource]);

  return <MDXLayout layout={layout} components={MDXComponents} {...rest} />;
};
```

استخدم مكون `MDXLayoutRenderer` في صفحة حيث تريد قبول اسم تخطيط لتعيينه إلى التخطيط المطلوب. تحتاج إلى تمرير اسم التخطيط من مجلد التخطيط (يجب أن يكون تطابقًا تامًا).

## التحليلات

يدعم القالب الآن [plausible](https://plausible.io/)، [simple analytics](https://simpleanalytics.com/) و google analytics. قم بتكوين `siteMetadata.js` بالإعدادات التي تتوافق مع مزود التحليلات المطلوب.

```js
analytics: {
    // يدعم plausible، simpleAnalytics أو googleAnalytics
    plausibleDataDomain: '', // مثال: tailwind-nextjs-starter-blog.vercel.app
    simpleAnalytics: false, // true أو false
    googleAnalyticsId: '', // مثال: UA-000000-2 أو G-XXXXXXX
  },
```

كما يتم دعم الأحداث المخصصة. يمكنك استيراد دالة `logEvent` من ملف `@components/analytics/[ANALYTICS-PROVIDER]` واستدعاؤها عند تشغيل أحداث معينة من الاهتمام. _ملاحظة_: قد يتطلب تكوينًا إضافيًا اعتمادًا على مزود التحليلات، يرجى التحقق من التوثيق الرسمي لمزيد من المعلومات.

## نظام تعليقات المدونة

أضفنا أيضًا دعمًا لـ [giscus](https://github.com/laymonage/giscus)، [utterances](https://github.com/utterance/utterances) أو disqus. لتمكينه، ما عليك سوى تكوين خاصية التعليقات في `siteMetadata.js` باستخدام المزود والإعدادات المطلوبة كما هو محدد في ملف التكوين.

```js
comment: {
    // حدد مزودًا واستخدم متغيرات البيئة المرتبطة به
    // https://vercel.com/docs/environment-variables
    provider: 'giscus', // المزودون المدعومون: giscus، utterances، disqus
    giscusConfig: {
      // قم بزيارة الرابط أدناه، واتبع الخطوات في قسم 'التكوين'
      // https://giscus.app/
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'pathname', // الخيارات المدعومة: pathname، url، title
      reactions: '1', // ردود فعل Emoji: 1 = تمكين / 0 = تعطيل
      // إرسال بيانات المناقشة بشكل دوري إلى النافذة الأصلية: 1 = تمكين / 0 = تعطيل
      metadata: '0',
      // مثال على الثيم: light، dark، dark_dimmed، dark_high_contrast
      // transparent_dark، preferred_color_scheme، custom
      theme: 'light',
      // الثيم عند وضع الظلام
      darkTheme: 'transparent_dark',
      // إذا تم تعيين خيار الثيم أعلاه إلى 'custom`
      // يرجى تقديم رابط أدناه لملف css الثيم المخصص.
      // مثال: https://giscus.app/themes/custom_example.css
      themeURL: '',
    },
    utterancesConfig: {
      // قم بزيارة الرابط أدناه، واتبع الخطوات في قسم 'التكوين'
      // https://utteranc.es/
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO,
      issueTerm: '', // الخيارات المدعومة: pathname، url، title
      label: '', // التسمية (اختياري): تعليق 💬
      // مثال على الثيم: github-light، github-dark، preferred-color-scheme
      // github-dark-orange، icy-dark، dark-blue، photon-dark، boxy-light
      theme: '',
      // الثيم عند وضع الظلام
      darkTheme: '',
    },
    disqus: {
      // https://help.disqus.com/en/articles/1717111-what-s-a-shortname
      shortname: process.env.NEXT_PUBLIC_DISQUS_SHORTNAME,
    },
  },
```

## مؤلفون متعددون

تم فصل معلومات المؤلفين الآن عن `siteMetadata.js` وتخزينها في مجلد `data/authors` الخاص بها كملف markdown. على الأقل، ستحتاج إلى وجود ملف `default.md` بمعلومات التأليف. يمكنك إنشاء ملفات إضافية حسب الحاجة وسيتم استخدام اسم الملف كمرجع للمؤلف.

إليك كيف قد يبدو ملف مؤلف markdown:

يمكنك استخدام هذه المعلومات في أماكن متعددة عبر القالب. على سبيل المثال، في قسم about في الصفحة، نحصل على معلومات المؤلف الافتراضية باستخدام سطر الكود هذا:

```js
const authorDetails = await getFileBySlug("authors", ["default"]);
```

يتم عرض هذا في قالب `AuthorLayout`.

### مؤلفون متعددون في منشور المدونة

يقبل frontmatter لمنشور المدونة حقل `authors` الاختياري كمصفوفة. إذا لم يتم تحديد أي حقل، فمن المفترض أن المؤلف الافتراضي هو المستخدم. ما عليك سوى تمرير مصفوفة من المؤلفين لعرض مؤلفين متعددين مرتبطين بمنشور.

على سبيل المثال، سيعرض frontmatter التالي المؤلفين المحددين بواسطة `data/authors/default.md` و `data/authors/sparrowhawk.md`

```yaml
title: "منشوري الأول"
date: "2021-01-12"
draft: false
summary: "منشوري الأول"
authors: ["default", "sparrowhawk"]
```

يظهر عرض توضيحي لمنشور بمؤلفين متعددين في [منشور Introducing Tailwind Nextjs Starter Blog](/blog/introducing-tailwind-nextjs-starter-blog).

## زر نسخ لكتل التعليمات البرمجية

مرر مؤشر الفأرة فوق كتلة التعليمات البرمجية وستلاحظ زر نسخ مستوحى من GitHub! يمكنك تعديل `./components/Pre.js` لمزيد من التخصيص. يتم تمرير المكون إلى `MDXComponents` ويقوم بتعديل جميع كتل `<pre>`.

## تمييز الأسطر وأرقام الأسطر

يتم الآن دعم تمييز الأسطر وأرقام الأسطر افتراضيًا بفضل المكون الجديد [rehype-prism-plus plugin](https://github.com/timlrx/rehype-prism-plus)

كتلة التعليمات البرمجية التالية:

```js
{
  1, 3 - 4;
}
showLineNumbers;
var num1, num2, sum;
num1 = prompt("أدخل الرقم الأول");
num2 = prompt("أدخل الرقم الثاني");
sum = parseInt(num1) + parseInt(num2); // "+" تعني "إضافة"
alert("المجموع = " + sum); // "+" تعني دمج في سلسلة
```

ستظهر كالتالي:

```js {1,3-4} showLineNumbers
var num1, num2, sum;
num1 = prompt("أدخل الرقم الأول");
num2 = prompt("أدخل الرقم الثاني");
sum = parseInt(num1) + parseInt(num2); // "+" تعني "إضافة"
alert("المجموع = " + sum); // "+" تعني دمج في سلسلة
```

لتعديل الأنماط، قم بتغيير محددات الفئات التالية في ملف `prism.css`:

```css
.code-highlight {
  @apply float-left min-w-full;
}

.code-line {
  @apply -mx-4 block border-l-4 border-opacity-0 pl-4 pr-4;
}

.code-line.inserted {
  @apply bg-green-500 bg-opacity-20;
}

.code-line.deleted {
  @apply bg-red-500 bg-opacity-20;
}

.highlight-line {
  @apply -mx-4 border-l-4 border-primary-500 bg-gray-700 bg-opacity-50;
}

.line-number::before {
  @apply -ml-2 mr-4 inline-block w-4 text-right text-gray-400;
  content: attr(line);
}
```

## مكون النشرة البريدية (v1.1.3)

تم تقديمه في v1.1.3، يمنحك مكون النشرة البريدية طريقة سهلة لبناء جمهورك. يتكامل مع مزودي الخدمة التاليين:

- [Mailchimp](https://mailchimp.com/)
- [Buttondown](https://buttondown.email/)
- [Convertkit](https://convertkit.com/)

لاستخدامه، حدد المزود الذي تستخدمه في ملف التكوين وأضف متغيرات البيئة الضرورية إلى ملف `.env`. لمزيد من المعلومات حول المتغيرات المطلوبة، تحقق من `.env.sample.`

يتم تصدير مكونين، `NewsletterForm` الافتراضي ومكون `BlogNewsletterForm`، والذي يتم تمريره أيضًا كمكون MDX ويمكن استخدامه في منشور المدونة:

```jsx
<BlogNewsletterForm title="هل يعجبك ما تقرأه؟" />
```

<BlogNewsletterForm title="هل يعجبك ما تقرأه؟" />

يعتمد المكون على [مسارات API](https://nextjs.org/docs/api-routes/introduction) في nextjs والتي تتطلب إعداد مثيل nextjs من جانب الخادم ولا تتوافق مع تصدير موقع ثابت بنسبة 100٪. يجب على المستخدمين إما الاستضافة الذاتية أو استخدام منصة متوافقة مثل Vercel أو Netlify التي تدعم هذه الوظيفة.

البديل المتوافق مع المواقع الثابتة هو استبدال المسار في مكون النشرة البريدية بنقطة نهاية API نموذج مزود.

## المراجع والاستشهادات (v1.2.1)

تمت إضافة مكون `rehype-citation` إلى خطوة معالجة xdm في v1.2.1. يتيح لك ذلك تنسيق الاستشهادات وإدراج المراجع بسهولة من ملف bibtex أو CSL-json موجود.

على سبيل المثال، نموذج كود markdown التالي:

```md
استشهاد قياسي [@Nash1950]
استشهادات داخل النص مثل @Nash1951
استشهادات متعددة [انظر @Nash1950؛ @Nash1951، صفحة 50]

**المراجع:**

[^ref]
```

يتم تقديمه إلى التالي:

استشهاد قياسي [@Nash1950]  
استشهادات داخل النص مثل @Nash1951  
استشهادات متعددة [انظر @Nash1950؛ @Nash1951، صفحة 50]

**المراجع:**

[^ref]

سيتم إدراج قائمة المراجع في نهاية المستند، ولكن يمكن تجاوز ذلك عن طريق تحديد علامة `[^Ref]` في الموقع المطلوب. يستخدم المكون تنسيق استشهاد APA، ولكنه يدعم أيضًا CSLs التالية، 'apa'، 'vancouver'، 'harvard1'، 'chicago'، 'mla'، أو مسار إلى ملف CSL محدد من قبل المستخدم.

راجع [وثائق rehype-citation](https://github.com/timlrx/rehype-citation) لمزيد من المعلومات حول خيارات التكوين.

## خطوط مستضافة ذاتيًا (v1.5.0)

تم استبدال خط Google بخطوط مستضافة ذاتيًا من [Fontsource](https://fontsource.org/). هذا يعطي [مزايا](https://fontsource.org/docs/introduction) التالية:

> توفر الاستضافة الذاتية مكاسب كبيرة في الأداء حيث يؤدي تحميل الخطوط من الخدمات المستضافة، مثل خطوط Google، إلى طلب شبكة إضافي (معيق للعرض). لتقديم منظور، لوحظ أن هذا يضاعف أوقات التحميل المرئي للمواقع البسيطة.
>
> تظل الخطوط مقفلة بالإصدار. غالبًا ما يدفع Google تحديثات لخطوطهم دون إشعار، مما قد يتعارض مع مشاريعك الحية. قم بإدارة خطوطك مثل أي تبعية NPM أخرى.
>
> الالتزام بالخصوصية. يقوم Google بتتبع استخدام خطوطهم، وبالنسبة لأولئك الذين يهتمون بالخصوصية بشدة، تعتبر الاستضافة الذاتية بديلاً.

يؤدي هذا إلى حزمة خطوط أصغر ووقت تحميل أسرع بمقدار 0.1 ثانية ([مقارنة webpagetest](https://www.webpagetest.org/video/compare.php?tests=220201_AiDcFH_f68a69b758454dd52d8e67493fdef7da,220201_BiDcMC_bf2d53f14483814ba61e794311dfa771)).

لتغيير خط Inter الافتراضي:

1. قم بتثبيت الخط المفضل [font](https://fontsource.org/fonts) - `npm install -save @fontsource/<font-name>`
2. قم بتحديث الاستيراد في `pages/_app.js`- `import '@fontsource/<font-name>.css'`
3. قم بتحديث خاصية `fontfamily` في ملف تكوين tailwind css

## دليل الترقية

هناك أجزاء كبيرة من الكود التي تم تغييرها من v0 إلى v1 بما في ذلك دعم التخطيطات ومحرك mdx جديد.

ليس هناك سبب حقيقي للتغيير إذا كان الإصدار السابق يلبي احتياجاتك وقد يكون من الأسهل نسخ
تغييرات المكونات التي تهتم بها إلى مدونتك الحالية بدلاً من ترحيل كل شيء.

ومع ذلك، إذا كنت ترغب في القيام بذلك ولم تقم بتغيير الكثير من القالب، يمكنك استنساخ الإصدار الجديد ونسخ منشور المدونة إلى القالب الجديد.

بديل آخر هو سحب أحدث إصدار من القالب باستخدام الكود التالي:

```bash
git remote add template git@github.com:timlrx/tailwind-nextjs-starter-blog.git
git pull template v1 --allow-unrelated-histories
rm -rf node_modules
```

يمكنك رؤية مثال على مثل هذا الترحيل في هذا [commit](https://github.com/timlrx/timlrx.com/commit/bba1c185384fd6d5cdaac15abf802fdcff027286) لمدونتي الشخصية.

يستخدم v1 أيضًا `feed.xml` بدلاً من `index.xml`، لتجنب بعض مشكلات البناء مع Vercel. إذا كنت تقوم بالترحيل، يجب عليك إضافة إعادة توجيه إلى `next.config.js` كما يلي:

```js
async redirects() {
  return [
    {
      source: '/:path/index.xml',
      destination: '/:path/feed.xml',
      permanent: true,
    }
  ]
}
```
