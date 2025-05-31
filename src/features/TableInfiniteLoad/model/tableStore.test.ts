import { describe, it, expect, beforeEach, vi, type MockedFunction } from 'vitest';
import TableStore from './tableStore';
import * as api from '../../../entities/record/api';

vi.mock('../../../entities/record/api');
const mockFetch = api.fetchRecords as MockedFunction<typeof api.fetchRecords>;

describe('TableStore', () => {
    let store: TableStore;

    beforeEach(() => {
        mockFetch.mockClear();
        store = new TableStore({} as any);
    });

    it('должен загружать и добавлять записи', async () => {
        const fakeTimestamp = '2025-01-01T00:00:00.000Z';
        const fakeRecord = { id: 42, createdAt: fakeTimestamp, foo: 'bar' };
        mockFetch.mockResolvedValue([fakeRecord]);

        expect(store.list).toHaveLength(0);
        await store.loadMore();

        expect(store.list).toEqual([fakeRecord]);
        expect(store.page).toBe(2);
        expect(store.hasMore).toBe(false);
    });
});
