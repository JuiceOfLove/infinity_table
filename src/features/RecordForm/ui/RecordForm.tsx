import { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../../../main';

const RecordForm = observer(() => {
    const { store } = useContext(Context);

    return (
        <form
            onSubmit={e => {
                e.preventDefault();
                store.form.submit();
            }}
            className="bg-white rounded shadow p-6 space-y-4"
        >
            {store.form.fields.map((f, i) => {
                const inputId = `field-${f.name}`;

                return (
                    <div key={f.name}>
                        <label
                            htmlFor={inputId}
                            className="block text-sm font-medium"
                        >
                            {f.label}
                        </label>

                        <input
                            id={inputId}
                            type="text"
                            value={f.value}
                            onChange={e => store.form.setField(i, e.target.value)}
                            placeholder={f.label}
                            className="mt-1 w-full border rounded p-2"
                        />

                        {f.error && (
                            <p className="text-red-600 text-sm mt-1">
                                {f.error}
                            </p>
                        )}
                    </div>
                );
            })}

            <button
                type="submit"
                disabled={store.form.submitting}
                className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50 cursor-pointer"
            >
                {store.form.submitting ? 'Сохраняем...' : 'Добавить'}
            </button>
        </form>
    );
});

export default RecordForm;
