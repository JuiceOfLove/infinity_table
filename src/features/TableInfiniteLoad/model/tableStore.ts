import { makeAutoObservable, runInAction } from 'mobx';
import { fetchRecords } from '../../../entities/record/api';

export default class TableStore {
  root: any;
  list: any[] = [];
  page = 1;
  limit = 10;
  loading = false;
  hasMore = true;

  constructor(root: any) {
    makeAutoObservable(this);
    this.root = root;
  }

  async loadMore() {
    if (this.loading || !this.hasMore) return;
    this.loading = true;
    try {
      const data = await fetchRecords(this.page, this.limit);
      runInAction(() => {
        this.list.push(...data);
        this.page++;
        this.hasMore = data.length === this.limit;
      });
    } finally {
      runInAction(() => (this.loading = false));
    }
  }
}