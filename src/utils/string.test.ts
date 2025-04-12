import { formatDate } from './string';

describe('formatDate', () => {
    it('should format date correctly in English', () => {
        const result = formatDate('2024-04-10', 'en-US');
        expect(result).toBe('April 10, 2024');
    });

    it('should format date correctly in Arabic', () => {
        const result = formatDate('2024-04-10', 'ar-EG');
        expect(result).toMatch(/2024|١٠|أبريل/);
    });

    it('should handle Date object', () => {
        const result = formatDate(new Date('2022-01-01'), 'en-US');
        expect(result).toBe('January 1, 2022');
    });
});
