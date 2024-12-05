import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import NotePadPage from './NotePadPage';
import PageControls from './PageControls';
import { useNotepad } from '../hooks/useNotepad';

export default function LegalPad() {
  const { 
    currentPage,
    totalPages,
    content,
    setContent,
    nextPage,
    prevPage,
    addPage
  } = useNotepad();

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-serif text-gray-700">Legal Notepad</h1>
          <PageControls
            currentPage={currentPage}
            totalPages={totalPages}
            onPrevPage={prevPage}
            onNextPage={nextPage}
            onAddPage={addPage}
          />
        </div>
        
        <div className="relative">
          <button
            onClick={prevPage}
            disabled={currentPage === 1}
            className="absolute left-[-40px] top-1/2 transform -translate-y-1/2 p-2 text-gray-500 hover:text-gray-700 disabled:opacity-30"
            aria-label="Previous page"
          >
            <ChevronLeft size={24} />
          </button>

          <NotePadPage
            content={content[currentPage - 1] || ''}
            onChange={(newContent) => setContent(currentPage - 1, newContent)}
            pageNumber={currentPage}
          />

          <button
            onClick={nextPage}
            disabled={currentPage === totalPages}
            className="absolute right-[-40px] top-1/2 transform -translate-y-1/2 p-2 text-gray-500 hover:text-gray-700 disabled:opacity-30"
            aria-label="Next page"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}