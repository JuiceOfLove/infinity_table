import { makeAutoObservable, runInAction } from 'mobx';
import { createRecord } from '../../../entities/record/api';

export default class FormStore {
    root: any;
    fields: { name: string; label: string; value: string; error?: string }[];
    submitting = false;

    constructor(root: any) {
        makeAutoObservable(this);
        this.root = root;

        const pool = [
            'title', 'description', 'author', 'email', 'category',
            'status', 'priority', 'dueDate', 'notes', 'location',
            'type', 'amount', 'comments', 'tags', 'remarks'
        ];
        const cnt = 5 + Math.floor(Math.random() * 11);
        this.fields = pool
            .sort(() => Math.random() - 0.5)
            .slice(0, cnt)
            .map(name => ({
                name,
                label: name[0].toUpperCase() + name.slice(1),
                value: '',
                error: '',
            }));
    }

    setField(i: number, v: string) {
        this.fields[i].value = v;
        this.fields[i].error = '';
    }

    validate() {
        let ok = true;
        this.fields.forEach(f => {
            if (!f.value.trim()) {
                f.error = 'Обязательное поле';
                ok = false;
            }
        });
        return ok;
    }

    async submit() {
        if (!this.validate()) return;
        this.submitting = true;
        const payload: Record<string, any> = {};
        this.fields.forEach(f => (payload[f.name] = f.value));

        try {
            const rec = await createRecord(payload);
            runInAction(() => {
                this.root.table.list.unshift(rec); this.fields.forEach(f => (f.value = ''));
            });
        } finally {
            runInAction(() => (this.submitting = false));
        }
    }
}