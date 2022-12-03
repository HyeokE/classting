export const replaceEntity = (str: string) => {
  return str
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&amp;/g, '&')
    .replace(/&rsquo;/g, '’')
    .replace(/&ldquo;/g, '“')
    .replace(/&rdquo;/g, '”')
    .replace(/&hellip;/g, '…')
    .replace(/&ndash;/g, '–')
    .replace(/&mdash;/g, '—')
    .replace(/&lsquo;/g, '‘')
    .replace(/&sbquo;/g, '‚')
    .replace(/&bdquo;/g, '„');
};
