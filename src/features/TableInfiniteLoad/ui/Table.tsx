import { useEffect, useRef, useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../../../main';

const Table = observer(() => {
    const { store } = useContext(Context);
    const refBottom = useRef<HTMLDivElement>(null);

    useEffect(() => {
        store.table.loadMore()
    }, []);

    useEffect(() => {
        const obs = new IntersectionObserver(([e]) => {
            if (e.isIntersecting) store.table.loadMore();
        });
        if (refBottom.current) obs.observe(refBottom.current);
        return () => obs.disconnect();
    }, []);

    const columns = store.table.list.length
        ? Array.from(
            new Set(
                store.table.list
                    .flatMap(Object.keys)
                    .filter(key => key !== 'id')
            )
        )
        : store.form.fields.map(f => f.name);

    return (
        <div className="overflow-x-auto bg-white rounded shadow">
            <table className="min-w-full">
                <thead className="bg-gray-50">
                    <tr>
                        {columns.map(c => (
                            <th key={c} className="px-4 py-2 text-left text-sm font-medium">{c}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {store.table.list.map(rec => (
                        <tr key={rec.id} className="hover:bg-gray-100">
                            {columns.map(c => (
                                <td key={c} className="px-4 py-2 text-sm">{rec[c]}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            <div ref={refBottom} className="h-1"></div>
            {store.table.loading && <p className="text-center py-2">Загрузка...</p>}
            {!store.table.hasMore && <p className="text-center py-2 text-gray-500">Больше нет данных</p>}
        </div>
    );
});

export default Table;
