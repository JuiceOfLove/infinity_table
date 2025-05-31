interface I { value: string; onChange(v: string): void; }
export const Input: React.FC<I & React.InputHTMLAttributes<HTMLInputElement>> = ({ value, onChange, ...p }) => (
    <input
        {...p}
        value={value}
        onChange={e => onChange(e.target.value)}
        className="mt-1 w-full border rounded p-2"
    />
);