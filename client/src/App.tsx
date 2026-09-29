import { Route, Switch } from "wouter";
import Layout from "./components/Layout";
import { ThemeProvider } from "./contexts/ThemeContext";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";
import FaqPage from "./pages/Faq";
import GalleryPage from "./pages/Gallery";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import PrivacyPage from "./pages/Privacy";
import ServicesPage from "./pages/Services";
import TermsPage from "./pages/Terms";

export default function App() {
  return (
    <ThemeProvider defaultTheme="light">
      <Layout>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={AboutPage} />
          <Route path="/services" component={ServicesPage} />
          <Route path="/gallery" component={GalleryPage} />
          <Route path="/work" component={GalleryPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/faq" component={FaqPage} />
          <Route path="/privacy-policy" component={PrivacyPage} />
          <Route path="/terms" component={TermsPage} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </ThemeProvider>
  );
}
