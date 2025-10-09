import React, { useState } from 'react';
import { MegaMenuContent, MegaSolution } from '../../types';
import { MegaMenuDescription } from './MegaMenuDescription';
import { MegaMenuLinks } from './MegaMenuLinks';
import { MegaMenuFeatured } from './MegaMenuFeatured';
import { serviceFeaturedSolutions } from '../../data/megaMenuData';

interface MegaMenuProps {
  content: MegaMenuContent;
  isOpen: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export const MegaMenu: React.FC<MegaMenuProps> = ({
  content,
  isOpen,
  onMouseEnter,
  onMouseLeave,
}) => {
  const { description, links, featuredSolutions } = content;
  const [currentFeatured, setCurrentFeatured] = useState<MegaSolution[]>(featuredSolutions || []);

  const handleLinkHover = (path: string) => {
    const featured = serviceFeaturedSolutions[path] || serviceFeaturedSolutions.default;
    setCurrentFeatured(featured);
  };

  return (
    <>
      {/* Backdrop with blur */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-md z-40 transition-all duration-300"
          style={{ top: '6rem' }}
          onClick={onMouseLeave}
        />
      )}

      {/* Mega Menu Container */}
      <div
        className={`fixed left-0 right-0 top-[5rem] z-50 transition-all duration-300 ease-in-out ${
          isOpen
            ? 'visible opacity-100 translate-y-0'
            : 'invisible opacity-0 -translate-y-4 pointer-events-none'
        }`}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden animate-fade-in">
            {/* Content Grid - ProLance Style: 3-5-4 columns */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              {/* LEFT SECTION - Description & Featured Card (3 cols) */}
              <div className="lg:col-span-3 bg-gradient-to-br from-gray-50 to-white py-10 px-6 border-r border-gray-100">
                <MegaMenuDescription
                  title={description.title}
                  description={description.text}
                  featuredCard={{
                    title: description.featured.title,
                    description: description.featured.text,
                    link: description.featured.link,
                    image: description.featured.imageUrl,
                  }}
                />
              </div>

              {/* MIDDLE SECTION - Links Grid (5 cols) */}
              <div className="lg:col-span-5 py-10 px-6">
                <MegaMenuLinks
                  links={links.flatMap(linkGroup =>
                    linkGroup.items
                      ? [
                          {
                            name: linkGroup.title,
                            path: linkGroup.path,
                            description: '',
                            icon: '📌'
                          },
                          ...linkGroup.items.map(item => ({
                            name: item.name,
                            path: item.path,
                            description: '',
                          }))
                        ]
                      : [{
                          name: linkGroup.title,
                          path: linkGroup.path,
                          description: '',
                          icon: '📌'
                        }]
                  )}
                  columns={2}
                  onLinkHover={handleLinkHover}
                />
              </div>

              {/* RIGHT SECTION - Featured Solutions (4 cols) */}
              <div className="lg:col-span-4 bg-gray-50 py-10 px-6 border-l border-gray-100">
                <MegaMenuFeatured items={currentFeatured} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
