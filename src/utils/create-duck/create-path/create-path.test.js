import { createPath } from './create-path';

describe('createPath', () => {
  it('should correctly create a path from provided names', () => {
    expect(createPath(['home', 'user', 'documents'])).toBe('home.user.documents');
  });

  it('should correctly flatten and create a path from nested arrays', () => {
    expect(createPath(['home', ['user', 'documents']])).toBe('home.user.documents');
  });

  it('should ignore empty or falsy values', () => {
    expect(createPath(['home', '', 'user', null, 'documents'])).toBe('home.user.documents');
  });

  it('should return an empty string if no names are provided', () => {
    expect(createPath()).toBe('');
  });
});
