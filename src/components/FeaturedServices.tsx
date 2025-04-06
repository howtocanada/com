
import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon?: string;
  url: string;
}

const FeaturedServices = () => {
  const services: ServiceItem[] = [
    {
      id: 1,
      title: "Apply for Canadian citizenship",
      description: "Find out if you're eligible, how to apply, processing times, and what to expect after you apply.",
      url: "#"
    },
    {
      id: 2,
      title: "Get a passport",
      description: "Apply for, renew, or replace a Canadian passport. Find out how to fill out the forms and where to submit your application.",
      url: "#"
    },
    {
      id: 3,
      title: "Find a job",
      description: "Job Bank offers an online listing of private and public sector job openings across Canada and abroad.",
      url: "#"
    }
  ];

  return (
    <div className="py-6">
      <h2 className="text-2xl font-bold mb-6">Featured services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service) => (
          <div key={service.id} className="gc-card h-full flex flex-col justify-between">
            <div>
              <h3 className="font-bold text-lg mb-2">{service.title}</h3>
              <p className="text-gc-dark-gray mb-4">{service.description}</p>
            </div>
            <a href={service.url} className="gc-link flex items-center mt-2">
              Learn more <ArrowRight className="h-4 w-4 ml-1" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedServices;
