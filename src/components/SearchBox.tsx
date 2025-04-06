
import { Search } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBox = ({ className, placeholder = "Search Canada.ca" }: { className?: string, placeholder?: string }) => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      // In a real implementation, this would navigate to search results
      console.log(`Search for: ${query}`);
      // Example: navigate(`/search?q=${encodeURIComponent(query)}`);
      
      // For now, just clear the input
      setQuery('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`gc-search w-full ${className || ''}`}>
      <div className="relative">
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          className="gc-search-input w-full text-sm sm:text-base py-2"
          aria-label="Search"
        />
        <button 
          type="submit" 
          className="absolute right-3 top-1/2 -translate-y-1/2" 
          aria-label="Submit search"
        >
          <Search className="h-4 w-4 text-gc-dark-gray" />
        </button>
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gc-dark-gray" aria-hidden="true" />
      </div>
    </form>
  );
};

export default SearchBox;
