
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface InfoSectionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

const InfoSection = ({ title, children, defaultOpen = false }: InfoSectionProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border border-gray-300 mb-4">
      <button
        className="w-full flex justify-between items-center bg-gc-gray p-4 text-left font-bold"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span>{title}</span>
        {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
      </button>
      
      {isOpen && (
        <div className="p-4 bg-white">
          {children}
        </div>
      )}
    </div>
  );
};

export default InfoSection;
