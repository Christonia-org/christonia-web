"use client"; 

import React, { useState, useEffect, useRef } from 'react'; 
import Image from 'next/image';
import GlossaryTerm from '../GlossaryTerm/GlossaryTerm';
import styles from './GlossaryContent.module.css';

export default function GlossaryContentClient({ terms }: { terms: GlossaryTermData[] }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 500);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [searchTerm]); 

  const filteredTerms = terms.filter(term =>
    term.name.toLowerCase().startsWith(debouncedSearchTerm.toLowerCase())
  );

  const handleSearch = () => {
    setDebouncedSearchTerm(searchTerm);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleSimilarTermClick = () => {
    setSearchTerm('');
    setDebouncedSearchTerm('');
  };

  return (
    <>
      <div className={styles.searchContainer}>
          <button className={styles.searchButton} onClick={handleSearch}>
              <Image src="/search-icon.svg" alt="Search" width={30} height={30} className={styles.searchIcon} />
          </button>
          <input 
            type="text" 
            placeholder="Search for the word you're looking for..." 
            className={styles.searchInput} 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleKeyDown} 
          />
      </div>
      <div className={styles.glossaryTerms}>
          {filteredTerms.map(term => (
              <GlossaryTerm 
                  key={term.id}
                  id={term.id}
                  name={term.name}
                  description={term.description}
                  similarTerms={term.similarTerms}
                  onSimilarTermClick={handleSimilarTermClick}
              />
          ))}
      </div>
    </>
  );
}
