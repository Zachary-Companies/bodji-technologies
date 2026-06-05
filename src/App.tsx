import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ProductCarousel } from "./components/ProductCarousel";
import { ShiftSection } from "./components/ShiftSection";
import { VisibilityCta } from "./components/VisibilityCta";
import { WorkflowConsulting } from "./components/WorkflowConsulting";

export function App() {
  return (
    <div className="site-shell">
      <Header />
      <main>
        <Hero />
        <ShiftSection />
        <VisibilityCta />
        <ProductCarousel />
        <WorkflowConsulting />
        <FAQ />
        <Footer />
      </main>
    </div>
  );
}
