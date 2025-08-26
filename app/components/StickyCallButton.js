'use client';

import Link from 'next/link';

export default function StickyCallButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Link
        href="/get-started"
        className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105 flex items-center space-x-2 group"
      >
        <span className="hidden sm:inline">Book Free Consultation</span>
        <span className="sm:hidden">Call</span>
        <svg className="w-5 h-5 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      </Link>
    </div>
  );
}
