import TableStore from '../features/TableInfiniteLoad/model/tableStore';
import FormStore from '../features/RecordForm/model/formStore';

export default class Store {
    table: TableStore;
    form: FormStore;

    constructor() {
        this.table = new TableStore(this);
        this.form = new FormStore(this);
    }
}