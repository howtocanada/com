
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ApplicationForm from "@/components/ApplicationForm";
import InfoSection from "@/components/InfoSection";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import AlertBanner from "@/components/AlertBanner";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow" id="main-content">
        <div className="bg-gc-gray py-3">
          <div className="gc-container">
            <nav aria-label="breadcrumb" className="gc-breadcrumb">
              <ol className="flex flex-wrap items-center">
                <li className="inline-flex items-center">
                  <Link to="/" className="transition-colors hover:text-foreground">Home</Link>
                </li>
                <li className="inline-flex items-center">
                  <span className="mx-2" aria-hidden="true"><ChevronRight className="h-4 w-4" /></span>
                  <a href="#" className="transition-colors hover:text-foreground">Immigration and citizenship</a>
                </li>
                <li className="inline-flex items-center">
                  <span className="mx-2" aria-hidden="true"><ChevronRight className="h-4 w-4" /></span>
                  <a href="#" className="transition-colors hover:text-foreground">My application</a>
                </li>
                <li className="inline-flex items-center">
                  <span className="mx-2" aria-hidden="true"><ChevronRight className="h-4 w-4" /></span>
                  <span aria-current="page" className="font-normal text-foreground">Check application status</span>
                </li>
              </ol>
            </nav>
          </div>
        </div>
        
        <div className="gc-container py-8">
          <h1 className="text-3xl font-bold mb-6">Check your application status</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <ApplicationForm />
              
              <div className="mt-8">
                <h2 className="text-2xl font-bold mb-4">More information</h2>
                
                <InfoSection title="What you need to know">
                  <div className="space-y-4">
                    <p>To check your application status online, you need:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>your application number or UCI (Unique Client Identifier)</li>
                      <li>your surname (last name)</li>
                      <li>your date of birth</li>
                    </ul>
                    <p>If you've applied online, your application number was in the confirmation letter we sent after you submitted your application.</p>
                    <p>If you've submitted a paper application, you can find your UCI on your application documents.</p>
                  </div>
                </InfoSection>
                
                <InfoSection title="Processing times">
                  <div className="space-y-4">
                    <p>Processing times vary by application type. Find out the current processing times for different applications:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><a href="#" className="gc-link">Check processing times</a></li>
                    </ul>
                  </div>
                </InfoSection>
                
                <InfoSection title="Can't check your status online?">
                  <div className="space-y-4">
                    <p>If you can't check your status online or don't have an application number or UCI, you can:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><a href="#" className="gc-link">Contact the office processing your application</a></li>
                      <li>Use the <a href="#" className="gc-link">IRCC online form</a></li>
                    </ul>
                  </div>
                </InfoSection>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="gc-card mb-4">
                <h2 className="text-lg font-bold mb-3">Related links</h2>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="gc-link">Create an account or sign in</a>
                  </li>
                  <li>
                    <a href="#" className="gc-link">If you're having issues accessing your account</a>
                  </li>
                  <li>
                    <a href="#" className="gc-link">Link applications to your online account</a>
                  </li>
                  <li>
                    <a href="#" className="gc-link">Processing times</a>
                  </li>
                  <li>
                    <a href="#" className="gc-link">Contact us</a>
                  </li>
                </ul>
              </div>
              
              <AlertBanner
                type="warning"
                title="COVID-19: Impact on processing times"
                message={
                  <div>
                    <p className="mb-3">We're still processing applications, but processing times are affected by COVID-19.</p>
                    <a href="#" className="gc-link">Read more about how COVID-19 affects immigration</a>
                  </div>
                }
              />
              
              <div className="mt-6 p-4 bg-white border border-gray-300">
                <h3 className="font-bold mb-3">Help centre</h3>
                <p className="mb-3">Find the answers to your questions</p>
                <a href="#" className="gc-link">Visit the help centre</a>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
