import RecordForm from '../../features/RecordForm/ui/RecordForm';
import Table from '../../features/TableInfiniteLoad/ui/Table';

export default function TablePage() {
  return (
    <div className="max-w-4xl mx-auto py-8 space-y-8">
      <h1 className="text-2xl font-bold">Таблица</h1>
      <RecordForm />
      <Table />
    </div>
  );
}