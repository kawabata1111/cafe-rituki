import { MenuItem } from './types';

export const MENU_ITEMS: {
  coffee: MenuItem[];
  drinks: MenuItem[];
  dessert: MenuItem[];
  morning: MenuItem[];
  lunch: MenuItem[];
} = {
  coffee: [
    { name: 'アメリカン', price: 600 },
    { name: 'ほろにがブレンド', price: 600 },
    { name: 'にがみブレンド', price: 600 },
    { name: 'エチオピ モカ', price: 750 },
    { name: 'コロンビア', price: 750 },
    { name: 'グァテマラ', price: 750 },
    { name: 'ブラジルサントス', price: 750 },
    { name: 'キリマンジャロ', price: 750 },
    { name: 'パナマ ゲイシャ', price: 4000 },
    { name: 'カフェオレ', price: 750 },
    { name: '水だしアイス', price: 750 },
  ],
  drinks: [
    { name: '紅茶（H・I）', price: 650 },
    { name: 'オレンジジュース', price: 600 },
    { name: 'アップルジュース', price: 600 },
    { name: 'コーラ', price: 600 },
    { name: 'クリームソーダー', price: 750 },
    { name: 'レモンスカッシュ', price: 600 },
    { name: 'ミルク（H・I）', price: 600 },
    { name: 'ココア（H・I）', price: 600 },
  ],
  dessert: [
    { name: 'バニラアイス', price: 300 },
    { name: 'バニラアイスチョコ', price: 350 },
  ],
  morning: [
    { name: 'モーニング', price: 600, note: '（パンorおにぎり）\nコーヒー・ドリンク付' },
  ],
  lunch: [
    { name: 'カレーライス', price: 800 },
    { name: 'チャーハン', price: 800 },
    { name: 'スパゲッティ', price: 800 },
    { name: 'ホットケーキ', price: 700, note: '（メープル・チョコ・イチゴ）\nバニラアイス　+100円' },
  ],
};
