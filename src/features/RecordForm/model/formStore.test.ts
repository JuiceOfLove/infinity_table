import { describe, it, expect, beforeEach, vi, type MockedFunction } from 'vitest';
import FormStore from './formStore';
import * as api from '../../../entities/record/api';

vi.mock('../../../entities/record/api');
const mockCreate = api.createRecord as MockedFunction<typeof api.createRecord>;

describe('FormStore', () => {
  let store: FormStore;
  let fakeRoot: any;

  beforeEach(() => {
    fakeRoot = { table: { list: [] } };
    store = new FormStore(fakeRoot);
    mockCreate.mockClear();
  });

  it('validate() → true', () => {
    store.fields.forEach((_, i) => store.setField(i, 'hello'));
    const ok = store.validate();
    expect(ok).toBe(true);
    store.fields.forEach(f => {
      expect(f.error).toBe('');
    });
  });

  it('submit()', async () => {
    mockCreate.mockResolvedValue(undefined as any);
    store.fields.forEach((_, i) => store.setField(i, 'x'));

    expect(store.submitting).toBe(false);
    const p = store.submit();
    expect(store.submitting).toBe(true);
    await p;
    expect(store.submitting).toBe(false);
  });
});