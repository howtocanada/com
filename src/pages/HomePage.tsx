
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Search, AlertTriangle } from "lucide-react";
import InfoSection from "@/components/InfoSection";
import AlertBanner from "@/components/AlertBanner";
import FeaturedServices from "@/components/FeaturedServices";
import NewsSection from "@/components/NewsSection";
import SearchBox from "@/components/SearchBox";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow" id="main-content">
        {/* Alert Banner */}
        <div className="gc-container py-4">
          <AlertBanner
            type="warning" 
            title="COVID-19 updates"
            message={
              <div>
                <p>Get updates on COVID-19 vaccines, variants, and safety measures.</p>
                <a href="#" className="gc-link block mt-2">Latest coronavirus updates</a>
              </div>
            }
          />
        </div>
        
        {/* Hero Section */}
        <div className="bg-gc-blue py-8 text-white">
          <div className="gc-container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-4">Welcome to Canada.ca</h1>
                <p className="text-lg mb-6">The official website of the Government of Canada</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-gc-red hover:bg-red-700 text-white">
                    Most requested services
                  </Button>
                  <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
                    Contact us
                  </Button>
                </div>
              </div>
              <div className="relative hidden md:block">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h2 className="text-gc-blue text-xl font-bold mb-4">Search Canada.ca</h2>
                  <SearchBox placeholder="What are you looking for?" />
                  <div className="mt-4 text-gc-blue">
                    <a href="#" className="text-gc-link text-sm block mb-2 hover:underline">Need help finding something?</a>
                    <a href="#" className="text-gc-link text-sm block hover:underline">Department and agency directory</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Main Services Section */}
        <div className="py-8 bg-white">
          <div className="gc-container">
            <h2 className="text-2xl font-bold mb-6">Most requested services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { title: "Get a COVID-19 vaccine", link: "#" },
                { title: "Apply for Employment Insurance", link: "#" },
                { title: "Apply for Canadian citizenship", link: "#" },
                { title: "Get a passport", link: "#" },
                { title: "Find a job", link: "#" },
                { title: "Check application status", link: "/application-status" },
                { title: "Get weather forecasts", link: "#" },
                { title: "Apply for student loans", link: "#" },
                { title: "Get your tax refund", link: "#" },
              ].map((service, index) => (
                <a 
                  key={index} 
                  href={service.link} 
                  className="gc-link flex items-center p-3 border-b border-gray-200"
                >
                  {service.title}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Services */}
        <div className="bg-gc-gray py-8">
          <div className="gc-container">
            <FeaturedServices />
          </div>
        </div>
        
        {/* Focus Areas Section */}
        <div className="bg-white py-8">
          <div className="gc-container">
            <h2 className="text-2xl font-bold mb-6">Focus on</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="gc-card">
                <h3 className="text-xl font-bold mb-3">Coronavirus disease (COVID-19)</h3>
                <ul className="space-y-3">
                  <li><a href="#" className="gc-link">Vaccines</a></li>
                  <li><a href="#" className="gc-link">Travel restrictions and exemptions</a></li>
                  <li><a href="#" className="gc-link">Financial support</a></li>
                  <li><a href="#" className="gc-link">Prevention and risks</a></li>
                </ul>
              </div>
              <div className="gc-card">
                <h3 className="text-xl font-bold mb-3">Climate action</h3>
                <ul className="space-y-3">
                  <li><a href="#" className="gc-link">Clean energy</a></li>
                  <li><a href="#" className="gc-link">Climate plan</a></li>
                  <li><a href="#" className="gc-link">Natural resources in Canada</a></li>
                  <li><a href="#" className="gc-link">Climate change impacts</a></li>
                </ul>
              </div>
              <div className="gc-card">
                <h3 className="text-xl font-bold mb-3">Housing</h3>
                <ul className="space-y-3">
                  <li><a href="#" className="gc-link">First-Time Home Buyer Incentive</a></li>
                  <li><a href="#" className="gc-link">Housing benefits</a></li>
                  <li><a href="#" className="gc-link">Mortgage insurance</a></li>
                  <li><a href="#" className="gc-link">Financial assistance for renters</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* News Section */}
        <div className="bg-gc-gray py-8">
          <div className="gc-container">
            <NewsSection />
          </div>
        </div>
        
        {/* Government Section */}
        <div className="py-8 bg-white">
          <div className="gc-container">
            <h2 className="text-2xl font-bold mb-6" id="about-government">Government</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div>
                <h3 className="text-xl font-bold mb-3">Contact us</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="gc-link">All contacts</a></li>
                  <li><a href="#" className="gc-link">Department contacts</a></li>
                  <li><a href="#" className="gc-link">Find an office</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">About government</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="gc-link">Structure</a></li>
                  <li><a href="#" className="gc-link">Prime Minister</a></li>
                  <li><a href="#" className="gc-link">Ministers</a></li>
                  <li><a href="#" className="gc-link">Public service</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">News</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="gc-link">News releases</a></li>
                  <li><a href="#" className="gc-link">Speeches</a></li>
                  <li><a href="#" className="gc-link">Statements</a></li>
                  <li><a href="#" className="gc-link">Media advisories</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Government-wide reporting</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="gc-link">Open data</a></li>
                  <li><a href="#" className="gc-link">Open information</a></li>
                  <li><a href="#" className="gc-link">Open government</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Theme and Topics Section */}
        <div className="bg-gc-gray py-8">
          <div className="gc-container">
            <InfoSection title="Departments and agencies" defaultOpen={true}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-bold mb-2">Most requested departments</h4>
                  <ul className="space-y-2">
                    <li><a href="#" className="gc-link">Canada Revenue Agency</a></li>
                    <li><a href="#" className="gc-link">Employment and Social Development Canada</a></li>
                    <li><a href="#" className="gc-link">Immigration, Refugees and Citizenship Canada</a></li>
                    <li><a href="#" className="gc-link">Global Affairs Canada</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Public safety</h4>
                  <ul className="space-y-2">
                    <li><a href="#" className="gc-link">Royal Canadian Mounted Police</a></li>
                    <li><a href="#" className="gc-link">Canadian Security Intelligence Service</a></li>
                    <li><a href="#" className="gc-link">Correctional Service Canada</a></li>
                    <li><a href="#" className="gc-link">Parole Board of Canada</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Defence and military</h4>
                  <ul className="space-y-2">
                    <li><a href="#" className="gc-link">National Defence</a></li>
                    <li><a href="#" className="gc-link">Canadian Armed Forces</a></li>
                    <li><a href="#" className="gc-link">Veterans Affairs Canada</a></li>
                  </ul>
                </div>
              </div>
              <div className="mt-4">
                <a href="#" className="gc-link font-bold">All departments and agencies</a>
              </div>
            </InfoSection>
            
            <div className="mt-6">
              <InfoSection title="Themes and topics">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <a href="#" className="gc-link">Arts, culture and heritage</a>
                  <a href="#" className="gc-link">Business and industry</a>
                  <a href="#" className="gc-link">Canada and the world</a>
                  <a href="#" className="gc-link">Environment and natural resources</a>
                  <a href="#" className="gc-link">Health</a>
                  <a href="#" className="gc-link">Immigration and citizenship</a>
                  <a href="#" className="gc-link">Indigenous peoples</a>
                  <a href="#" className="gc-link">Jobs and the workplace</a>
                  <a href="#" className="gc-link">Money and finances</a>
                  <a href="#" className="gc-link">National security and defence</a>
                  <a href="#" className="gc-link">Science and innovation</a>
                  <a href="#" className="gc-link">Taxes</a>
                  <a href="#" className="gc-link">Travel and tourism</a>
                  <a href="#" className="gc-link">Veterans and military</a>
                </div>
              </InfoSection>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default HomePage;
