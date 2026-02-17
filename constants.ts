import { MenuItem } from './types';

export const MENU_ITEMS: { coffee: MenuItem[], drinks: MenuItem[], food: MenuItem[], dessert: MenuItem[] } = {
  coffee: [
    {
      id: 'c1',
      name: 'アメリカン',
      description: 'すっきりとした味わいの一杯。軽やかな口当たりで朝の一杯にもぴったりです。',
      price: 600,
      image: 'https://images.unsplash.com/photo-1495774856032-8b90bbb32b32?auto=format&fit=crop&w=400&q=80',
      category: 'drink',
      tags: ['コーヒー', 'すっきり']
    },
    {
      id: 'c2',
      name: 'ほろにがブレンド',
      description: 'ほのかな苦味とコクのバランスが絶妙な、当店自慢のブレンドです。',
      price: 600,
      image: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=400&q=80',
      category: 'drink',
      tags: ['コーヒー', 'ブレンド']
    },
    {
      id: 'c3',
      name: 'にがみブレンド',
      description: '深煎りの力強い苦味が特徴。コーヒー好きにおすすめの一杯です。',
      price: 600,
      image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefda?auto=format&fit=crop&w=400&q=80',
      category: 'drink',
      tags: ['コーヒー', '苦味']
    },
    {
      id: 'c4',
      name: 'エチオピ モカ',
      description: 'フルーティーな香りと華やかな酸味。モカの王道をお楽しみください。',
      price: 750,
      image: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=400&q=80',
      category: 'drink',
      tags: ['コーヒー', 'フルーティー']
    },
    {
      id: 'c5',
      name: 'コロンビア',
      description: 'まろやかなコクと甘み。バランスの良い定番のストレートコーヒーです。',
      price: 750,
      image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=400&q=80',
      category: 'drink',
      tags: ['コーヒー', 'マイルド']
    },
    {
      id: 'c6',
      name: 'グァテマラ',
      description: 'チョコレートのような甘い香りと、しっかりとしたボディが魅力です。',
      price: 750,
      image: 'https://images.unsplash.com/photo-1504627298434-2119d6928e93?auto=format&fit=crop&w=400&q=80',
      category: 'drink',
      tags: ['コーヒー', 'コク']
    },
    {
      id: 'c7',
      name: 'ブラジルサントス',
      description: 'ナッツのような香ばしさと程よい酸味。飲みやすい一杯です。',
      price: 750,
      image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=400&q=80',
      category: 'drink',
      tags: ['コーヒー', '香ばしい']
    },
    {
      id: 'c8',
      name: 'キリマンジャロ',
      description: '爽やかな酸味と豊かな風味。アフリカの大地が育んだ逸品です。',
      price: 750,
      image: 'https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=400&q=80',
      category: 'drink',
      tags: ['コーヒー', '酸味']
    },
    {
      id: 'c9',
      name: 'パナマ ゲイシャ',
      description: '世界最高峰のスペシャルティコーヒー。花のような香りと繊細な甘みの特別な一杯。',
      price: 4000,
      image: 'https://images.unsplash.com/photo-1611564494260-6f21b80af7ea?auto=format&fit=crop&w=400&q=80',
      category: 'drink',
      tags: ['コーヒー', 'スペシャル']
    },
    {
      id: 'c10',
      name: 'カフェオレ',
      description: '珈琲とミルクの優しいハーモニー。まろやかな味わいをどうぞ。',
      price: 750,
      image: 'https://images.unsplash.com/photo-1585494156145-1c60a4fe952b?auto=format&fit=crop&w=400&q=80',
      category: 'drink',
      tags: ['コーヒー', 'ミルク']
    },
    {
      id: 'c11',
      name: '水だしアイス',
      description: '時間をかけて水で抽出した、まろやかでクリアなアイスコーヒーです。',
      price: 750,
      image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=400&q=80',
      category: 'drink',
      tags: ['コーヒー', 'アイス']
    }
  ],
  drinks: [
    {
      id: 'd1',
      name: '紅茶（H・I）',
      description: '香り豊かな紅茶をホットまたはアイスでお選びいただけます。',
      price: 650,
      image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=400&q=80',
      category: 'drink',
      tags: ['紅茶', 'H/I']
    },
    {
      id: 'd2',
      name: 'オレンジジュース',
      description: 'さわやかな甘さのオレンジジュース。お子様にも人気です。',
      price: 600,
      image: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&w=400&q=80',
      category: 'drink',
      tags: ['ジュース', '爽やか']
    },
    {
      id: 'd3',
      name: 'アップルジュース',
      description: 'りんごの自然な甘みが広がる、やさしい味わいのジュースです。',
      price: 600,
      image: 'https://images.unsplash.com/photo-1576673442511-7e39b6545c87?auto=format&fit=crop&w=400&q=80',
      category: 'drink',
      tags: ['ジュース', 'フルーツ']
    },
    {
      id: 'd4',
      name: 'コーラ',
      description: 'シュワッと爽快な炭酸飲料。お食事のお供にどうぞ。',
      price: 600,
      image: 'https://images.unsplash.com/photo-1554866585-cd94860890b7?auto=format&fit=crop&w=400&q=80',
      category: 'drink',
      tags: ['炭酸', '爽快']
    },
    {
      id: 'd5',
      name: 'クリームソーダー',
      description: '鮮やかなメロンソーダにバニラアイスを浮かべた、喫茶店の定番です。',
      price: 750,
      image: 'https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?auto=format&fit=crop&w=400&q=80',
      category: 'drink',
      tags: ['炭酸', '人気']
    },
    {
      id: 'd6',
      name: 'レモンスカッシュ',
      description: 'レモンの酸味と炭酸の爽快感。さっぱりしたい時におすすめです。',
      price: 600,
      image: 'https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=400&q=80',
      category: 'drink',
      tags: ['炭酸', '爽やか']
    },
    {
      id: 'd7',
      name: 'ミルク（H・I）',
      description: 'あたたかいミルクまたは冷たいミルク。ほっとする優しい味わいです。',
      price: 600,
      image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=400&q=80',
      category: 'drink',
      tags: ['ミルク', 'H/I']
    },
    {
      id: 'd8',
      name: 'ココア（H・I）',
      description: '甘く香ばしいココア。ホットでもアイスでもお楽しみいただけます。',
      price: 600,
      image: 'https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?auto=format&fit=crop&w=400&q=80',
      category: 'drink',
      tags: ['ココア', 'H/I']
    }
  ],
  food: [
    {
      id: 'f1',
      name: 'モーニング',
      description: 'パンまたはおにぎりをお選びいただけます。コーヒー・ドリンク付き。〈8:00～11:00〉',
      price: 600,
      image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=400&q=80',
      category: 'food',
      tags: ['モーニング', '8:00～11:00']
    },
    {
      id: 'f2',
      name: 'カレーライス',
      description: 'じっくり煮込んだ手作りカレー。コーヒー・ドリンク付き。〈11:00～〉',
      price: 800,
      image: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=400&q=80',
      category: 'food',
      tags: ['ランチ', '食事']
    },
    {
      id: 'f3',
      name: 'チャーハン',
      description: '香ばしく炒めた自慢のチャーハン。コーヒー・ドリンク付き。〈11:00～〉',
      price: 800,
      image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=400&q=80',
      category: 'food',
      tags: ['ランチ', '食事']
    },
    {
      id: 'f4',
      name: 'スパゲッティ',
      description: '喫茶店ならではの懐かしいスパゲッティ。コーヒー・ドリンク付き。〈11:00～〉',
      price: 800,
      image: 'https://images.unsplash.com/photo-1551892374-ecf8754cf8b0?auto=format&fit=crop&w=400&q=80',
      category: 'food',
      tags: ['ランチ', '食事']
    },
    {
      id: 'f5',
      name: 'ホットケーキ',
      description: 'メープル・チョコ・イチゴからお選びいただけます。バニラアイス +100円。コーヒー・ドリンク付き。〈11:00～〉',
      price: 700,
      image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=400&q=80',
      category: 'food',
      tags: ['スイーツ', '人気']
    }
  ],
  dessert: [
    {
      id: 'ds1',
      name: 'バニラアイス',
      description: '濃厚でなめらかなバニラアイスクリーム。食後のひとときにどうぞ。',
      price: 300,
      image: 'https://images.unsplash.com/photo-1570197571499-166b36435e9f?auto=format&fit=crop&w=400&q=80',
      category: 'food',
      tags: ['デザート', 'アイス']
    },
    {
      id: 'ds2',
      name: 'バニラアイスチョコ',
      description: 'バニラアイスに濃厚なチョコレートソースをかけた贅沢なデザートです。',
      price: 350,
      image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=400&q=80',
      category: 'food',
      tags: ['デザート', 'チョコ']
    }
  ]
};
