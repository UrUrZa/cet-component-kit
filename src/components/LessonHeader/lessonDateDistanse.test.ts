import { formatDateDistance } from "./lessonDateDistanse";
import { advanceTo, clear } from 'jest-date-mock';
import { 
  addMilliseconds, 
  addHours, 
  addDays, 
  addMonths, 
  subMonths
} from 'date-fns';

describe('formatDateDistance', () => {

  afterEach(() => {
    clear();
  });

  it('formats distance in future months correctly', () => {
    const baseDate = new Date(2023, 6, 14, 0, 0, 0);
    advanceTo(baseDate);
    const date = addMonths(baseDate, 2);
    const expected = 'in 2 months'; 
    expect(formatDateDistance(date)).toEqual(expected);
  });

  it('formats distance in past months correctly', () => {
    const baseDate = new Date(2023, 6, 14, 0, 0, 0);
    advanceTo(baseDate);
    const date = subMonths(baseDate, 2);
    const expected = '2 months ago'; 
    expect(formatDateDistance(date)).toEqual(expected);
  });

  it('formats distance in future days correctly', () => {
    const baseDate = new Date(2023, 6, 14, 0, 0, 0);
    advanceTo(baseDate);
    const date = addDays(baseDate, 3);
    const expected = 'in 3 days';
    expect(formatDateDistance(date)).toEqual(expected);
  });

  it('formats distance in past days correctly', () => {
    const baseDate = new Date(2023, 6, 14, 0, 0, 0);
    advanceTo(baseDate);
    const date = addDays(baseDate, -3);
    const expected = '3 days ago';
    expect(formatDateDistance(date)).toEqual(expected);
  });

  it('formats distance in future hours correctly', () => {
    const baseDate = new Date(2023, 6, 14, 0, 0, 0);
    advanceTo(baseDate);
    const date = addHours(baseDate, 4);
    const expected = 'in about 4 hours at 04:00';
    expect(formatDateDistance(date)).toEqual(expected);
  });

  it('formats distance in past hours correctly', () => {
    const baseDate = new Date(2023, 6, 14, 0, 0, 0);
    advanceTo(baseDate);
    const date = addHours(baseDate, -4);
    const expected = 'about 4 hours ago at 20:00';
    expect(formatDateDistance(date)).toEqual(expected);
  });

  it('formats distance in future minutes correctly', () => {
    const baseDate = new Date(2023, 6, 14, 0, 0, 0);
    advanceTo(baseDate);
    const date = addMilliseconds(baseDate, 60000 * 30); // 30 minutes
    const expected = 'in 30 minutes at 00:30'
    expect(formatDateDistance(date)).toEqual(expected);
  });

  it('formats distance in past minutes correctly', () => {
    const baseDate = new Date(2023, 6, 14, 0, 0, 0);
    advanceTo(baseDate);
    const date = addMilliseconds(baseDate, -60000 * 30); // 30 minutes ago
    const expected = '30 minutes ago at 23:30';
    expect(formatDateDistance(date)).toEqual(expected);
  });
});
