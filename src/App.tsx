import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import RootLayout from './layouts/RootLayout'
import Home from './pages/home/Home'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPosts } from './features/posts/postsAPI';
import { setPosts } from './features/posts/postsSlice';
import { AppDispatch } from './app/store';
import Blog from './pages/blog/Blog';
import BlogDetails from './pages/blog-details/BlogDetails';
import Tags from './pages/tags/Tags';
import TagsFilter from './pages/tags-filter/TagsFilter';
import Projects from './pages/projects/Projects';
import About from './pages/about/About';
import { useDarkMode } from './components/DarkModeContext';
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        Latest: "Latest",
        LatestDes: "Stay updated with our newest posts, fresh perspectives, and trending topics.",
        Blog: "Blog",
        Tags: "Tags",
        Projects: "Projects",
        About: "About",
        ReadMore: "Read more",
        AllPosts: "All Posts",
        Subscribe: "Subscribe to the newsletter",
        SignUp: "Sign up",
        EnterEmail: "Enter your email",
        LearnMore: "Learn more",
        ProjectsDes: "Showcase your projects with a hero image (16 x 9)",
        Project1Title: "A Search Engine",
        Project1Des: "What if you could look up any information in the world? Webpages, images, videos and more. Google has many features to help you find exactly what you're looking for.",
        Project2Title: "The Time Machine",
        Project2Des: "Imagine being able to travel back in time or to the future. Simple turn the knob to the desired date and press 'Go'. No more worrying about lost keys or forgotten headphones with this simple yet affordable solution.",
        AboutName: "Abdullah SERAJ ALLDDIN",
        AboutSubTitle: "Full Stack Developer with 5 years of experience in building scalable web applications.",
        AboutDes: "Full Stack Developer with 5 years of experience in building scalable web applications. Proficient in the MERN Stack (MongoDB, Express.js, React.js, Node.js), with a strong foundation in Computer Engineering and a focus on delivering impactful digital solutions.",
        Previous: "Previous",
        Page: "Page",
        of: "of",
        Next: "Next",
        Content: "Content",
        Search: "Type a command or search..."
      }
    },
    ar: {
      translation: {
        Latest: "الأحدث",
        LatestDes: "ابقَ على اطلاع بآخر منشوراتنا، ووجهات النظر الجديدة، والمواضيع الرائجة.",
        Blog: "المدونات",
        Tags: "الانواع",
        Projects: "المشاريع",
        About: "حول",
        ReadMore: "اقرأ المزيد",
        AllPosts: "جميع المنشورات",
        Subscribe: "اشترك في النشرة الإخبارية",
        SignUp: "سجّل الآن",
        EnterEmail: "أدخل بريدك الإلكتروني",
        LearnMore: "تعلم المزيد",
        ProjectsDes: "اعرض مشاريعك بصورة رئيسية (16 × 9)",
        Project1Title: "محرك بحث",
        Project1Des: "ماذا لو كان بإمكانك البحث عن أي معلومة في العالم؟ صفحات ويب، صور، مقاطع فيديو والمزيد. يقدم Google العديد من الميزات لمساعدتك في العثور على ما تبحث عنه بدقة.",
        Project2Title: "آلة الزمن",
        Project2Des: "تخيل أن بإمكانك السفر عبر الزمن إلى الماضي أو المستقبل. فقط قم بتدوير المقبض إلى التاريخ المطلوب واضغط على 'انطلاق'. لا مزيد من القلق بشأن المفاتيح المفقودة أو سماعات الرأس المنسية مع هذا الحل البسيط والميسور التكلفة.",
        AboutName: "عبدالله سراج الدين",
        AboutSubTitle: "مطوّر Full Stack بخبرة 5 سنوات في بناء تطبيقات ويب قابلة للتوسّع.",
        AboutDes: "مطوّر Full Stack بخبرة 5 سنوات في تطوير تطبيقات ويب قابلة للتوسّع. متمكن من استخدام حزمة MERN (MongoDB، Express.js، React.js، Node.js)، ويمتلك أساسًا قويًا في هندسة الحاسوب مع تركيز على تقديم حلول رقمية فعّالة.",
        Previous: "السابق",
        Page: "صفحة",
        of: "من اصل",
        Next: "التالي",
        Content: "محتوى",
        Search: "اكتب الأمر أو ابحث..."
      }
    },
  },
  lng: "en",
  fallbackLng: "en",
});

function App() {
  const { darkMode } = useDarkMode()
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const callback = () => {
      fetchPosts().then((posts) => {
        dispatch(setPosts(posts));
      });
    };

    i18n.on("languageChanged", callback);

    return () => {
      i18n.off("languageChanged", callback);
    };
  }, [dispatch]);

  const router = createBrowserRouter(createRoutesFromElements(
    <Route>
      <Route path="/" element={<RootLayout />}>
        <Route path="/" element={<Home />} />

        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogDetails />} />

        <Route path="/tags" element={<Tags />} />
        <Route path="/tags/:slug" element={<TagsFilter />} />

        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Route>
  ))

  return (
    <div className={`${darkMode ? "dark" : "light"}`}>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
