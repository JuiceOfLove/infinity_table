import type { Record as T } from './types';
import { get, post } from '../../shared/lib/httpClient';

const BASE = 'http://localhost:3001/records';

export function fetchRecords(page = 1, limit = 10): Promise<T[]> {
  return get(`${BASE}?_page=${page}&_limit=${limit}`);
}

export function createRecord(data: Record<string, any>): Promise<T> {
  return post(BASE, { ...data, createdAt: new Date().toISOString() });
}