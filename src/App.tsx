import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation, Navigate, useParams } from "react-router-dom";
import { useEffect, Suspense, lazy, useState, Component, ErrorInfo, ReactNode } from "react";
import { SEOHead, getCompanySchema, getServiceSchema, getLocalBusinessSchema } from "./components/SEOHead";
import { AccessibilityEnhancer } from "./components/AccessibilityEnhancer";
import { Toaster } from "./components/ui/sonner";
import { PerformanceOptimizer } from "./components/PerformanceOptimizer";
import { CriticalCSS } from "./components/CriticalCSS";
import { ResourcePreloader } from "./components/ResourcePreloader";
import { phoenixData, scottsdaleData, tempeData, mesaData, chandlerData, gilbertData, glendaleData } from "./components/cityData";
import { SpeedInsights } from "@vercel/speed-insights/react";

// Critical components loaded immediately (no lazy loading for core UX)
import { Navigation } from "./components/Navigation";
import { HeroSection } from "./components/HeroSection";
import { Footer } from "./components/Footer";

// Homepage sections bundled together for efficient loading
const HomePageSections = lazy(() => import("./components/HomePageSections").then(module => ({ default: module.HomePageSections })));

// Route-based lazy loading (better than component-based)
const BlogPage = lazy(() => import("./components/BlogPage").then(module => ({ default: module.BlogPage })));
const BlogPostPage = lazy(() => import("./components/BlogPostPage").then(module => ({ default: module.BlogPostPage })));
const ServicesPage = lazy(() => import("./components/ServicesPage").then(module => ({ default: module.ServicesPage })));
const ContactPage = lazy(() => import("./components/ContactPage").then(module => ({ default: module.ContactPage })));
// Location pages
const PhoenixPage = lazy(() => import("./components/PhoenixPage").then(module => ({ default: module.PhoenixPage })));
const ScottsdalePage = lazy(() => import("./components/ScottsdalePage").then(module => ({ default: module.ScottsdalePage })));
const TempePage = lazy(() => import("./components/TempePage").then(module => ({ default: module.TempePage })));
const MesaPage = lazy(() => import("./components/MesaPage").then(module => ({ default: module.MesaPage })));
const ChandlerPage = lazy(() => import("./components/ChandlerPage").then(module => ({ default: module.ChandlerPage })));
const GilbertPage = lazy(() => import("./components/GilbertPage").then(module => ({ default: module.GilbertPage })));
const GlendalePage = lazy(() => import("./components/GlendalePage").then(module => ({ default: module.GlendalePage })));

// Content creation pages
const PhoenixContentCreationPage = lazy(() => import("./components/PhoenixContentCreationPage").then(module => ({ default: module.PhoenixContentCreationPage })));
const ScottsdaleContentCreationPage = lazy(() => import("./components/ScottsdaleContentCreationPage").then(module => ({ default: module.ScottsdaleContentCreationPage })));
const TempeContentCreationPage = lazy(() => import("./components/TempeContentCreationPage").then(module => ({ default: module.TempeContentCreationPage })));
const MesaContentCreationPage = lazy(() => import("./components/MesaContentCreationPage").then(module => ({ default: module.MesaContentCreationPage })));
const ChandlerContentCreationPage = lazy(() => import("./components/ChandlerContentCreationPage").then(module => ({ default: module.ChandlerContentCreationPage })));
const GilbertContentCreationPage = lazy(() => import("./components/GilbertContentCreationPage").then(module => ({ default: module.GilbertContentCreationPage })));
const GlendaleContentCreationPage = lazy(() => import("./components/GlendaleContentCreationPage").then(module => ({ default: module.GlendaleContentCreationPage })));
const PrivacyPolicyPage = lazy(() => import("./components/PrivacyPolicyPage").then(module => ({ default: module.PrivacyPolicyPage })));
const CopyrightPolicyPage = lazy(() => import("./components/CopyrightPolicyPage").then(module => ({ default: module.CopyrightPolicyPage })));
const TermsPage = lazy(() => import("./components/TermsPage").then(module => ({ default: module.TermsPage })));
const EmailTestPage = lazy(() => import("./components/EmailTestPage").then(module => ({ default: module.EmailTestPage })));

// Optimized loading component with better performance
function LoadingSpinner() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        <div className="animate-spin h-12 w-12 border-4 border-orange-500 border-t-transparent rounded-full mx-auto mb-4"></div>
        <p className="text-gray-600 font-medium">Loading...</p>
      </div>
    </div>
  );
}

// Error Boundary for lazy loading failures - with location-based reset
class ErrorBoundary extends Component<
  { children: ReactNode; locationKey?: string },
  { hasError: boolean; error: Error | null }
> {
  constructor(props: { children: ReactNode; locationKey?: string }) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('React Error Boundary caught an error:', error, errorInfo);
  }

  // Reset error state when location changes
  componentDidUpdate(prevProps: { children: ReactNode; locationKey?: string }) {
    if (prevProps.locationKey !== this.props.locationKey && this.state.hasError) {
      this.setState({ hasError: false, error: null });
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-white px-6">
          <div className="text-center max-w-md">
            <div className="text-6xl mb-4">⚠️</div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Something went wrong</h1>
            <p className="text-gray-600 mb-6">
              The page failed to load. Please try refreshing or{' '}
              <a href="/" className="text-orange-500 hover:text-orange-600 font-semibold">
                return to homepage
              </a>
            </p>
            <button
              onClick={() => window.location.reload()}
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Wrapper to pass location to ErrorBoundary
function ErrorBoundaryWithRouter({ children }: { children: ReactNode }) {
  const location = useLocation();
  return <ErrorBoundary locationKey={location.key}>{children}</ErrorBoundary>;
}

// Scroll to top component
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// Simplified HomePage with efficient loading
function HomePage() {
  const navigate = useNavigate();
  const [sectionsLoaded, setSectionsLoaded] = useState(false);

  useEffect(() => {
    document.title = "Yak Media";
    
    // Preload critical next pages after initial render - optimized timing
    const preloadTimer = setTimeout(() => {
      // Use requestIdleCallback for better performance
      if ('requestIdleCallback' in window) {
        requestIdleCallback(() => {
          Promise.all([
            import("./components/ServicesPage"),
            import("./components/ContactPage"),
            import("./components/BlogPage")
          ]);
        });
      } else {
        Promise.all([
          import("./components/ServicesPage"),
          import("./components/ContactPage"),
          import("./components/BlogPage")
        ]);
      }
    }, 500); // Reduced from 1000ms

    // Mark sections as ready to load immediately after critical content
    const sectionsTimer = setTimeout(() => {
      setSectionsLoaded(true);
    }, 50); // Reduced from 100ms

    return () => {
      clearTimeout(preloadTimer);
      clearTimeout(sectionsTimer);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <SEOHead
        title="#1 Marketing Agency Phoenix AZ | Content + Ads | Yak Media"
        description="Top-rated Phoenix marketing agency (4.9★). We grew 50+ AZ businesses 250%+ with content creation, paid ads & social media. Free strategy call → (480) 244-6470"
        path="/"
        schemaData={getCompanySchema()}
      />
      
      <Navigation 
        onBlogClick={() => navigate('/blog')} 
        onServicesClick={(service) => service ? navigate(`/services/${service}`) : navigate('/services')} 
        onLogoClick={() => navigate('/')} 
        onContactClick={() => navigate('/contact')} 
      />
      
      <HeroSection 
        onBlogClick={() => navigate('/blog')} 
        onServicesClick={(service) => service ? navigate(`/services/${service}`) : navigate('/services')} 
        onLogoClick={() => navigate('/')} 
        onContactClick={() => navigate('/contact')} 
      />
      
      {/* Load all homepage sections together */}
      {sectionsLoaded && (
        <Suspense fallback={<LoadingSpinner />}>
          <HomePageSections 
            onBlogClick={() => navigate('/blog')} 
            onPostClick={(postSlug) => navigate(`/blog/${postSlug}`)} 
            onServicesClick={(service) => service ? navigate(`/services/${service}`) : navigate('/services')}
          />
        </Suspense>
      )}
      
      <Footer 
        onPrivacyClick={() => navigate('/privacy')} 
        onCopyrightClick={() => navigate('/copyright')} 
        onTermsClick={() => navigate('/terms')} 
      />
    </div>
  );
}

// Simplified page wrapper
function PageLayout({ 
  children, 
  title, 
  description, 
  path, 
  schemaData 
}: {
  children: React.ReactNode;
  title: string;
  description: string;
  path: string;
  schemaData?: any;
}) {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <SEOHead 
        title={title}
        description={description}
        path={path}
        schemaData={schemaData}
      />
      
      <Navigation 
        onBlogClick={() => navigate('/blog')} 
        onServicesClick={(service) => service ? navigate(`/services/${service}`) : navigate('/services')} 
        onLogoClick={() => navigate('/')} 
        onContactClick={() => navigate('/contact')} 
      />
      
      <div className="pt-20">
        {children}
      </div>
      
      <Footer 
        onPrivacyClick={() => navigate('/privacy')} 
        onCopyrightClick={() => navigate('/copyright')} 
        onTermsClick={() => navigate('/terms')} 
      />
    </div>
  );
}

// Route components with single suspense boundary per route
function BlogPageRoute() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <PageLayout
      title="Marketing Insights + Tips | Phoenix AZ Blog | Yak Media"
      description="Expert marketing insights for Phoenix businesses. Learn digital marketing strategies, content creation tips & paid advertising best practices from Yak Media."
      path="/blog"
    >
      <Suspense fallback={<LoadingSpinner />}>
        <BlogPage key={location.key} onContactClick={() => navigate('/contact')} />
      </Suspense>
    </PageLayout>
  );
}

function BlogPostPageRoute() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  // Import blogPosts here to get the post data for SEO
  const [post, setPost] = useState<any>(null);

  useEffect(() => {
    import("./components/blogData").then(({ blogPosts }) => {
      const foundPost = blogPosts.find(p => p.slug === slug);
      setPost(foundPost);
    });
  }, [slug]);

  return (
    <PageLayout
      title={post?.title || "Blog Post"}
      description={post?.excerpt || "Read the latest insights from Yak Media's blog."}
      path={`/blog/${slug}`}
    >
      <Suspense fallback={<LoadingSpinner />}>
        <BlogPostPage onContactClick={() => navigate('/contact')} />
      </Suspense>
    </PageLayout>
  );
}

function ContactPageRoute() {
  return (
    <PageLayout 
      title="Contact Us"
      description="Get in touch with Yak Media. Ready to transform your digital presence? Contact our team of experts for creative, media, and strategy services. Call (480) 244-6470 or email kyle@yak.media"
      path="/contact"
    >
      <Suspense fallback={<LoadingSpinner />}>
        <ContactPage />
      </Suspense>
    </PageLayout>
  );
}

function ServicesPageRoute({ serviceType }: { serviceType: string }) {
  const navigate = useNavigate();

  const getServiceSEO = () => {
    switch (serviceType) {
      case 'services':
        return {
          title: 'Digital Marketing Services Phoenix AZ | Full-Service Agency',
          description: 'Comprehensive digital marketing services in Phoenix: Creative, Media, Strategy & Integrated solutions. We help AZ businesses scale with data-driven marketing.',
          path: '/services',
          schema: getServiceSchema('Digital Marketing Services', 'Comprehensive digital marketing solutions including creative, media, strategy, and integrated services')
        };
      case 'creative':
        return {
          title: 'Creative Services',
          description: 'Award-winning creative services from Yak Media. Transform your brand with innovative design, compelling content, and breakthrough campaigns.',
          path: '/services/creative',
          schema: getServiceSchema('Creative Services', 'Innovative design, compelling content, and breakthrough creative campaigns')
        };
      case 'media':
        return {
          title: 'Media Services',
          description: 'Strategic media planning and buying services. Maximize your ROI with data-driven media strategies and performance optimization.',
          path: '/services/media',
          schema: getServiceSchema('Media Services', 'Strategic media planning, buying, and optimization services')
        };
      case 'strategy':
        return {
          title: 'Strategy Services',
          description: 'Strategic consulting and digital transformation services. Drive growth with data-driven insights and strategic planning.',
          path: '/services/strategy',
          schema: getServiceSchema('Strategy Services', 'Strategic consulting and digital transformation services')
        };
      case 'integrated':
        return {
          title: 'Integrated Services',
          description: 'Integrated marketing solutions that connect creative, media, and strategy for maximum impact and brand growth.',
          path: '/services/integrated',
          schema: getServiceSchema('Integrated Marketing', 'Comprehensive integrated marketing solutions')
        };
      default:
        return {
          title: 'Services',
          description: 'Digital marketing services from Yak Media',
          path: '/services',
          schema: getServiceSchema('Digital Marketing Services', 'Comprehensive digital marketing solutions')
        };
    }
  };

  const seo = getServiceSEO();

  return (
    <PageLayout 
      title={seo.title}
      description={seo.description}
      path={seo.path}
      schemaData={seo.schema}
    >
      <Suspense fallback={<LoadingSpinner />}>
        <ServicesPage serviceType={serviceType as any} onContactClick={() => navigate('/contact')} />
      </Suspense>
    </PageLayout>
  );
}

// Policy pages
function PrivacyPageRoute() {
  return (
    <PageLayout 
      title="Privacy Policy"
      description="Yak Media Privacy Policy - Learn how we collect, use, and protect your personal information. Your privacy matters to us."
      path="/privacy"
    >
      <Suspense fallback={<LoadingSpinner />}>
        <PrivacyPolicyPage />
      </Suspense>
    </PageLayout>
  );
}

function CopyrightPageRoute() {
  return (
    <PageLayout 
      title="Copyright Policy"
      description="Yak Media Copyright Policy - Information about our intellectual property rights and how we handle copyright matters."
      path="/copyright"
    >
      <Suspense fallback={<LoadingSpinner />}>
        <CopyrightPolicyPage />
      </Suspense>
    </PageLayout>
  );
}

function TermsPageRoute() {
  return (
    <PageLayout 
      title="Terms of Service"
      description="Yak Media Terms of Service - Our terms and conditions for using our services and website."
      path="/terms"
    >
      <Suspense fallback={<LoadingSpinner />}>
        <TermsPage />
      </Suspense>
    </PageLayout>
  );
}

// Location page routes
function PhoenixPageRoute() {
  const navigate = useNavigate();

  return (
    <PageLayout
      title="Best Marketing Agency Phoenix AZ | 4.9★ Rated | Yak Media"
      description="#1 Phoenix marketing agency (4.9/5★). We help local businesses grow 250%+ with creative content, paid ads & social media. Free consultation → (480) 244-6470"
      path="/phoenix"
      schemaData={getLocalBusinessSchema("Phoenix", "Arizona", phoenixData.geoCoordinates)}
    >
      <Suspense fallback={<LoadingSpinner />}>
        <PhoenixPage onContactClick={() => navigate('/contact')} />
      </Suspense>
    </PageLayout>
  );
}

function ScottsdalePageRoute() {
  const navigate = useNavigate();

  return (
    <PageLayout
      title="Luxury Marketing Agency Scottsdale AZ | 4.9★ | Yak Media"
      description="Top Scottsdale marketing agency (4.9★) for luxury brands. Premium digital marketing, creative content & paid ads for upscale businesses. Call (480) 244-6470"
      path="/scottsdale"
      schemaData={getLocalBusinessSchema("Scottsdale", "Arizona", scottsdaleData.geoCoordinates)}
    >
      <Suspense fallback={<LoadingSpinner />}>
        <ScottsdalePage onContactClick={() => navigate('/contact')} />
      </Suspense>
    </PageLayout>
  );
}

function TempePageRoute() {
  const navigate = useNavigate();

  return (
    <PageLayout
      title="Marketing Agency Tempe AZ | ASU & Tech Marketing | 4.9★ Rated"
      description="Top Tempe marketing agency (4.9★) serving ASU businesses & tech startups. Social media, paid ads & content creation that drives results. Call (480) 244-6470"
      path="/tempe"
      schemaData={getLocalBusinessSchema("Tempe", "Arizona", tempeData.geoCoordinates)}
    >
      <Suspense fallback={<LoadingSpinner />}>
        <TempePage onContactClick={() => navigate('/contact')} />
      </Suspense>
    </PageLayout>
  );
}

function MesaPageRoute() {
  const navigate = useNavigate();

  return (
    <PageLayout
      title="Marketing Agency Mesa AZ | Healthcare & Local Biz | 4.9★ Rated"
      description="Top Mesa marketing agency (4.9★) for healthcare, retail & local businesses. Creative content + paid ads that work. Free consultation → (480) 244-6470"
      path="/mesa"
      schemaData={getLocalBusinessSchema("Mesa", "Arizona", mesaData.geoCoordinates)}
    >
      <Suspense fallback={<LoadingSpinner />}>
        <MesaPage onContactClick={() => navigate('/contact')} />
      </Suspense>
    </PageLayout>
  );
}

function ChandlerPageRoute() {
  const navigate = useNavigate();

  return (
    <PageLayout
      title="B2B Marketing Agency Chandler AZ | Tech Marketing | 4.9★ Rated"
      description="#1 Chandler marketing agency (4.9★) for B2B & tech companies. LinkedIn ads, demand gen & strategic marketing in Intel/PayPal corridor. Call (480) 244-6470"
      path="/chandler"
      schemaData={getLocalBusinessSchema("Chandler", "Arizona", chandlerData.geoCoordinates)}
    >
      <Suspense fallback={<LoadingSpinner />}>
        <ChandlerPage onContactClick={() => navigate('/contact')} />
      </Suspense>
    </PageLayout>
  );
}

function GilbertPageRoute() {
  const navigate = useNavigate();

  return (
    <PageLayout
      title="Marketing Agency Gilbert AZ | Family Business Marketing | 4.9★"
      description="#1 Gilbert marketing agency (4.9★) for family businesses & local services. Facebook ads, Google marketing & authentic content. Free call → (480) 244-6470"
      path="/gilbert"
      schemaData={getLocalBusinessSchema("Gilbert", "Arizona", gilbertData.geoCoordinates)}
    >
      <Suspense fallback={<LoadingSpinner />}>
        <GilbertPage onContactClick={() => navigate('/contact')} />
      </Suspense>
    </PageLayout>
  );
}

function GlendalePageRoute() {
  const navigate = useNavigate();

  return (
    <PageLayout
      title="Sports Marketing Agency Glendale AZ | Entertainment | 4.9★"
      description="Top Glendale marketing agency (4.9★) near State Farm Stadium. Sports bars, retail & entertainment venues trust us for high-energy campaigns (480) 244-6470"
      path="/glendale"
      schemaData={getLocalBusinessSchema("Glendale", "Arizona", glendaleData.geoCoordinates)}
    >
      <Suspense fallback={<LoadingSpinner />}>
        <GlendalePage onContactClick={() => navigate('/contact')} />
      </Suspense>
    </PageLayout>
  );
}

// Content creation page routes
function PhoenixContentCreationPageRoute() {
  const navigate = useNavigate();

  return (
    <PageLayout
      title="Content Creation Phoenix AZ | Video + Social | Yak Media"
      description="Phoenix content creation agency specializing in short-form video, social media & branded storytelling. We create content that drives measurable growth + ROI."
      path="/phoenix-content-creation"
      schemaData={getLocalBusinessSchema("Phoenix", "Arizona", phoenixData.geoCoordinates)}
    >
      <Suspense fallback={<LoadingSpinner />}>
        <PhoenixContentCreationPage onContactClick={() => navigate('/contact')} />
      </Suspense>
    </PageLayout>
  );
}

function ScottsdaleContentCreationPageRoute() {
  const navigate = useNavigate();

  return (
    <PageLayout
      title="Content Creation in Scottsdale, AZ | Yak Media"
      description="Yak Media creates high-performing content for Scottsdale businesses — from short-form video to branded storytelling — designed to capture attention and drive measurable growth."
      path="/scottsdale-content-creation"
      schemaData={getLocalBusinessSchema("Scottsdale", "Arizona", scottsdaleData.geoCoordinates)}
    >
      <Suspense fallback={<LoadingSpinner />}>
        <ScottsdaleContentCreationPage onContactClick={() => navigate('/contact')} />
      </Suspense>
    </PageLayout>
  );
}

function TempeContentCreationPageRoute() {
  const navigate = useNavigate();

  return (
    <PageLayout
      title="Content Creation in Tempe, AZ | Yak Media"
      description="Yak Media creates high-performing content for Tempe businesses — from short-form video to branded storytelling — designed to capture attention and drive measurable growth."
      path="/tempe-content-creation"
      schemaData={getLocalBusinessSchema("Tempe", "Arizona", tempeData.geoCoordinates)}
    >
      <Suspense fallback={<LoadingSpinner />}>
        <TempeContentCreationPage onContactClick={() => navigate('/contact')} />
      </Suspense>
    </PageLayout>
  );
}

function MesaContentCreationPageRoute() {
  const navigate = useNavigate();

  return (
    <PageLayout
      title="Content Creation in Mesa, AZ | Yak Media"
      description="Yak Media creates high-performing content for Mesa businesses — from short-form video to branded storytelling — designed to capture attention and drive measurable growth."
      path="/mesa-content-creation"
      schemaData={getLocalBusinessSchema("Mesa", "Arizona", mesaData.geoCoordinates)}
    >
      <Suspense fallback={<LoadingSpinner />}>
        <MesaContentCreationPage onContactClick={() => navigate('/contact')} />
      </Suspense>
    </PageLayout>
  );
}

function ChandlerContentCreationPageRoute() {
  const navigate = useNavigate();

  return (
    <PageLayout
      title="Content Creation in Chandler, AZ | Yak Media"
      description="Yak Media creates high-performing content for Chandler businesses — from short-form video to branded storytelling — designed to capture attention and drive measurable growth."
      path="/chandler-content-creation"
      schemaData={getLocalBusinessSchema("Chandler", "Arizona", chandlerData.geoCoordinates)}
    >
      <Suspense fallback={<LoadingSpinner />}>
        <ChandlerContentCreationPage onContactClick={() => navigate('/contact')} />
      </Suspense>
    </PageLayout>
  );
}

function GilbertContentCreationPageRoute() {
  const navigate = useNavigate();

  return (
    <PageLayout
      title="Content Creation in Gilbert, AZ | Yak Media"
      description="Yak Media creates high-performing content for Gilbert businesses — from short-form video to branded storytelling — designed to capture attention and drive measurable growth."
      path="/gilbert-content-creation"
      schemaData={getLocalBusinessSchema("Gilbert", "Arizona", gilbertData.geoCoordinates)}
    >
      <Suspense fallback={<LoadingSpinner />}>
        <GilbertContentCreationPage onContactClick={() => navigate('/contact')} />
      </Suspense>
    </PageLayout>
  );
}

function GlendaleContentCreationPageRoute() {
  const navigate = useNavigate();

  return (
    <PageLayout
      title="Content Creation in Glendale, AZ | Yak Media"
      description="Yak Media creates high-performing content for Glendale businesses — from short-form video to branded storytelling — designed to capture attention and drive measurable growth."
      path="/glendale-content-creation"
      schemaData={getLocalBusinessSchema("Glendale", "Arizona", glendaleData.geoCoordinates)}
    >
      <Suspense fallback={<LoadingSpinner />}>
        <GlendaleContentCreationPage onContactClick={() => navigate('/contact')} />
      </Suspense>
    </PageLayout>
  );
}

export default function App() {
  return (
    <Router>
      <CriticalCSS />
      <PerformanceOptimizer />
      <ResourcePreloader priority="high" />
      <AccessibilityEnhancer />
      <ScrollToTop />
      <Toaster />
      <SpeedInsights />
      <ErrorBoundaryWithRouter>
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogPageRoute />} />
        <Route path="/blog/:slug" element={<BlogPostPageRoute />} />
        <Route path="/contact" element={<ContactPageRoute />} />
        <Route path="/services" element={<ServicesPageRoute serviceType="services" />} />
        <Route path="/services/creative" element={<ServicesPageRoute serviceType="creative" />} />
        <Route path="/services/media" element={<ServicesPageRoute serviceType="media" />} />
        <Route path="/services/strategy" element={<ServicesPageRoute serviceType="strategy" />} />
        <Route path="/services/integrated" element={<ServicesPageRoute serviceType="integrated" />} />
        <Route path="/phoenix" element={<PhoenixPageRoute />} />
        <Route path="/scottsdale" element={<ScottsdalePageRoute />} />
        <Route path="/tempe" element={<TempePageRoute />} />
        <Route path="/mesa" element={<MesaPageRoute />} />
        <Route path="/chandler" element={<ChandlerPageRoute />} />
        <Route path="/gilbert" element={<GilbertPageRoute />} />
        <Route path="/glendale" element={<GlendalePageRoute />} />
        <Route path="/phoenix-content-creation" element={<PhoenixContentCreationPageRoute />} />
        <Route path="/scottsdale-content-creation" element={<ScottsdaleContentCreationPageRoute />} />
        <Route path="/tempe-content-creation" element={<TempeContentCreationPageRoute />} />
        <Route path="/mesa-content-creation" element={<MesaContentCreationPageRoute />} />
        <Route path="/chandler-content-creation" element={<ChandlerContentCreationPageRoute />} />
        <Route path="/gilbert-content-creation" element={<GilbertContentCreationPageRoute />} />
        <Route path="/glendale-content-creation" element={<GlendaleContentCreationPageRoute />} />
        <Route path="/privacy" element={<PrivacyPageRoute />} />
        <Route path="/copyright" element={<CopyrightPageRoute />} />
        <Route path="/terms" element={<TermsPageRoute />} />
        <Route path="/test-email" element={
          <Suspense fallback={<LoadingSpinner />}>
            <EmailTestPage />
          </Suspense>
        } />
        <Route path="/preview_page.html" element={<Navigate to="/" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      </ErrorBoundaryWithRouter>
    </Router>
  );
}