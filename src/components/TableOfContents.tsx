import { useState, useEffect } from 'react';
import { List } from 'lucide-react';

interface Heading {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  content: string;
}

export function TableOfContents({ content }: TableOfContentsProps) {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    // Extract headings from content (## and ###)
    const lines = content.split('\n');
    const extractedHeadings: Heading[] = [];

    lines.forEach((line, index) => {
      if (line.startsWith('## ') && !line.startsWith('### ')) {
        const text = line.replace('## ', '').trim();
        const id = `heading-${index}-${text.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
        extractedHeadings.push({ id, text, level: 2 });
      } else if (line.startsWith('### ')) {
        const text = line.replace('### ', '').trim();
        const id = `heading-${index}-${text.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
        extractedHeadings.push({ id, text, level: 3 });
      }
    });

    setHeadings(extractedHeadings);
  }, [content]);

  // Only show TOC if there are 3+ headings
  if (headings.length < 3) {
    return null;
  }

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100; // Offset for fixed header
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setActiveId(id);
    }
  };

  return (
    <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-6 border border-orange-100 mb-8 sticky top-24">
      <div className="flex items-center gap-2 mb-4">
        <List className="w-5 h-5 text-orange-500" />
        <h3 className="text-lg font-bold text-gray-900">Table of Contents</h3>
      </div>

      <nav>
        <ul className="space-y-2">
          {headings.map((heading) => (
            <li key={heading.id}>
              <button
                onClick={() => handleClick(heading.id)}
                className={`
                  text-left w-full py-1 px-2 rounded transition-colors
                  ${heading.level === 3 ? 'pl-6 text-sm' : 'text-base'}
                  ${
                    activeId === heading.id
                      ? 'bg-orange-100 text-orange-700 font-semibold'
                      : 'text-gray-700 hover:bg-orange-50 hover:text-orange-600'
                  }
                `}
              >
                {heading.text}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mt-4 pt-4 border-t border-orange-200">
        <p className="text-xs text-gray-600">
          Jump to any section by clicking above
        </p>
      </div>
    </div>
  );
}
