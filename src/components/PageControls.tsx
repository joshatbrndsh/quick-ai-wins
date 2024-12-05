import React from 'react';
import { Plus } from 'lucide-react';

interface PageControlsProps {
  currentPage: number;
  totalPages: number;
  onPrevPage: () => void;
  onNextPage: () => void;
  onAddPage: () => void;
}

export default function PageControls({
  currentPage,
  totalPages,
  onAddPage
}: PageControlsProps) {
  return (
    <div className="flex items-center gap-4">
      <span className="text-sm text-gray-600">
        Page {currentPage} of {totalPages}
      </span>
      <button
        onClick={onAddPage}
        className="flex items-center gap-1 px-3 py-1 text-sm text-gray-600 hover:text-gray-900 border border-gray-300 rounded-md hover:border-gray-400 transition-colors"
      >
        <Plus size={16} />
        Add Page
      </button>
    </div>
  );
}