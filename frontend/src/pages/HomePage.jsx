import React, { useState, memo, lazy, Suspense } from "react";
import Navbar from "../components/Navbar";
import RateLimitedUI from "../components/RateLimitedUI";

import PersuasionHero from "../components/PersuasionHero";
import AboutUs from "../components/AboutUs";

const ConsultationForm = lazy(() => import("../components/ConsultationForm"));
const WorkProcessTree = lazy(() => import("../components/WorkProcessTree"));
const Pricing = lazy(() => import("../components/Pricing"));
const Footer = lazy(() => import("../components/Footer"));

const ComponentLoader = () => <div className="min-h-[200px]"></div>;

const HomePage = memo(() => {
  const [isRateLimited, setRateLimited] = useState(false);

  if (isRateLimited) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <RateLimitedUI />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Persuasion Hero Section */}
      <PersuasionHero />

      {/* About Us Section */}
      <AboutUs />

      {/* Work Process Tree */}
      <div className="max-w-7xl mx-auto p-4 mt-6" id="work-process">
        <Suspense fallback={<ComponentLoader />}>
          <WorkProcessTree />
        </Suspense>
      </div>

      {/* Pricing Section */}
      <Suspense fallback={<ComponentLoader />}>
        <Pricing />
      </Suspense>

      {/* Consultation Form */}
      <div className="max-w-7xl mx-auto p-4 mt-6" id="create-form">
        <Suspense fallback={<ComponentLoader />}>
          <ConsultationForm />
        </Suspense>
      </div>

      {/* Footer */}
      <Suspense fallback={<ComponentLoader />}>
        <Footer />
      </Suspense>
    </div>
  );
});

HomePage.displayName = "HomePage";
export default HomePage;
