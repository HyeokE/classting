//write jest code test replaceEntity

import { replaceEntity } from './replaceEntity';

describe('replaceEntity', () => {
  test('test', () => {
    expect(replaceEntity('&quot;')).toBe('"');
    expect(replaceEntity('&#039;')).toBe("'");
    expect(replaceEntity('&amp;')).toBe('&');
    expect(replaceEntity('&rsquo;')).toBe('’');
    expect(replaceEntity('&ldquo;')).toBe('“');
    expect(replaceEntity('&rdquo;')).toBe('”');
    expect(replaceEntity('&hellip;')).toBe('…');
    expect(replaceEntity('&ndash;')).toBe('–');
    expect(replaceEntity('&mdash;')).toBe('—');
    expect(replaceEntity('&lsquo;')).toBe('‘');
    expect(replaceEntity('&sbquo;')).toBe('‚');
    expect(replaceEntity('&bdquo;')).toBe('„');
  });
});
