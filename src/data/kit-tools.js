export const KIT_CATEGORIES = {
  data:   { emoji: '📊', label: '데이터',  color: '#818cf8' },
  text:   { emoji: '📝', label: '텍스트',  color: '#34d399' },
  encode: { emoji: '🔐', label: '인코딩',  color: '#f472b6' },
  calc:   { emoji: '🧮', label: '계산기',  color: '#fbbf24' },
};

export const KIT_TOOLS = [
  {
    slug: 'json-formatter',
    title: 'JSON 포매터',
    category: 'data',
    type: 'html',
    desc: 'JSON 데이터 정렬, 압축, 검증',
    emoji: '📋',
  },
];

export const KIT_CATEGORY_ORDER = ['data', 'text', 'encode', 'calc'];
