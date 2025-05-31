export const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = props => (
    <button
        {...props}
        className={`px-4 py-2 rounded ${props.disabled ? 'opacity-50 bg-gray-400' : 'bg-blue-600 hover:bg-blue-700 text-white'
            } ${props.className || ''}`}
    />
);