import React from 'react';
import { MenuItem } from '../types';
import { MENU_ITEMS } from '../constants';

const MenuList: React.FC<{ title: string; items: MenuItem[] }> = ({ title, items }) => (
  <div className="mb-8 text-center">
    <h3 className="text-xl md:text-2xl font-serif font-bold text-coffee-dark mb-4">{title}</h3>
    <ul className="space-y-2 inline-block">
      {items.map((item) => (
        <li key={item.name} className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0"></span>
          <span className="text-coffee-dark font-sans text-sm md:text-base">{item.name}</span>
        </li>
      ))}
    </ul>
  </div>
);

const MenuNote: React.FC<{ text: string }> = ({ text }) => (
  <p className="text-coffee-light text-xs md:text-sm mt-1 whitespace-pre-line leading-relaxed pl-2">
    {text}
  </p>
);

export const MenuSection: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Menu Card */}
      <div className="bg-cream border-[6px] border-coffee-med/70 rounded-sm shadow-xl p-6 md:p-12 relative">
        {/* Inner border */}
        <div className="absolute inset-3 md:inset-5 border border-coffee-light/30 rounded-sm pointer-events-none"></div>

        <div className="relative">
          {/* Title */}
          <div className="text-center mb-8 md:mb-10">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-coffee-dark tracking-[0.3em]">メニュー</h2>
            <div className="w-32 h-[2px] bg-coffee-dark mx-auto mt-3"></div>
          </div>

          {/* Coffee & Drinks Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 mb-6">
            {/* Left: Coffee */}
            <div>
              <MenuList title="コーヒー" items={MENU_ITEMS.coffee} />
            </div>

            {/* Right: Drinks + Dessert */}
            <div>
              <MenuList title="ドリンク" items={MENU_ITEMS.drinks} />
              <MenuList title="デザート" items={MENU_ITEMS.dessert} />
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-[1px] bg-coffee-light/30 my-8"></div>

          {/* Food Section */}
          <div>
            <h3 className="text-xl md:text-2xl font-serif font-bold text-coffee-dark mb-6 text-center">フード</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
              {/* Morning */}
              <div className="text-center">
                <p className="text-coffee-med font-sans text-sm mb-3">〈 8:00 ～ 11:00 〉</p>
                <div className="mb-2">
                  <span className="text-lg md:text-xl font-serif font-bold text-coffee-dark">モーニング</span>
                  <p className="text-coffee-light text-xs md:text-sm mt-2 leading-relaxed">
                    （パンorおにぎり）<br />
                    コーヒー・ドリンク付
                  </p>
                </div>
              </div>

              {/* Lunch */}
              <div className="text-center">
                <p className="text-coffee-med font-sans text-sm mb-3">〈 11:00 ～ 〉</p>
                <ul className="space-y-2 inline-block">
                  {MENU_ITEMS.lunch.map((item) => (
                    <li key={item.name}>
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0"></span>
                        <span className="text-coffee-dark font-sans text-sm md:text-base">{item.name}</span>
                      </div>
                      {item.note && (
                        <MenuNote text={item.note} />
                      )}
                    </li>
                  ))}
                </ul>
                <p className="text-coffee-light text-xs md:text-sm mt-4">※ コーヒー・ドリンク付き</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
