
import React from 'react';

interface NewsItem {
  id: number;
  title: string;
  date: string;
  description: string;
  url: string;
}

const NewsSection = () => {
  const newsItems: NewsItem[] = [
    {
      id: 1,
      title: "Government launches new immigration program",
      date: "April 5, 2023",
      description: "Today, the Minister of Immigration announced a new pathway to permanent residence for essential workers.",
      url: "#"
    },
    {
      id: 2,
      title: "Changes to Express Entry coming soon",
      date: "March 28, 2023",
      description: "IRCC announces upcoming changes to Express Entry selection criteria to address key labor shortages.",
      url: "#"
    },
    {
      id: 3,
      title: "New measures to support international students",
      date: "March 15, 2023",
      description: "The government introduces new measures to improve the experience of international students in Canada.",
      url: "#"
    }
  ];

  return (
    <div className="py-6">
      <h2 className="text-2xl font-bold mb-4">Latest news</h2>
      <div className="space-y-6">
        {newsItems.map((item) => (
          <div key={item.id} className="gc-card">
            <span className="text-sm text-gc-dark-gray">{item.date}</span>
            <h3 className="font-bold text-lg mt-1">
              <a href={item.url} className="gc-link">{item.title}</a>
            </h3>
            <p className="mt-2 text-gc-dark-gray">{item.description}</p>
          </div>
        ))}
      </div>
      <div className="mt-4 text-right">
        <a href="#" className="gc-link font-bold">See all news</a>
      </div>
    </div>
  );
};

export default NewsSection;
