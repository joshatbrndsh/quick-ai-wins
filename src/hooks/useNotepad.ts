import { useState } from 'react';

export function useNotepad(initialPages: string[] = ['']) {
  const [pages, setPages] = useState<string[]>(initialPages);
  const [currentPage, setCurrentPage] = useState(1);

  const setContent = (pageIndex: number, content: string) => {
    setPages(prev => {
      const newPages = [...prev];
      newPages[pageIndex] = content;
      return newPages;
    });
  };

  const addPage = () => {
    setPages(prev => [...prev, '']);
    setCurrentPage(prev => prev + 1);
  };

  const nextPage = () => {
    if (currentPage < pages.length) {
      setCurrentPage(prev => prev + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prev => prev - 1);
    }
  };

  return {
    content: pages,
    setContent,
    currentPage,
    totalPages: pages.length,
    nextPage,
    prevPage,
    addPage
  };
}