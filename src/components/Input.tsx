import { ChangeEvent, KeyboardEvent, useRef } from 'react';

function Input({
  onChange,
  label = '',
  type = 'text',
  value = '',
  placeholder = '',
  required = false,
  disabled = false,
  onlyNumbers = false,
  noAvailableWords = [],
  charToAdd = '',
  addCharIn = [],
  max,
  className,
  classNameInput,
}: {
  onChange?: Function;
  label?: string;
  value?: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  onlyNumbers?: boolean;
  noAvailableWords?: string[];
  charToAdd?: string;
  addCharIn?: number[];
  max?: number;
  className?: string;
  classNameInput?: string;
}) {
  const input = useRef<HTMLInputElement>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value);
  };

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (value.length === max) {
      e.key.length === 1 && e.preventDefault();
      return;
    }

    if (noAvailableWords.includes(e.key)) {
      e.preventDefault();
      return;
    }

    if (onlyNumbers && !e.key?.match(/^[0-9]+$/)) {
      e.key !== 'Backspace' && e.preventDefault();
    }

    for (const index of addCharIn) {
      if (value.length === index) {
        e.key.length === 1 && onChange?.(value + charToAdd);
      }
    }
  };

  return (
    <div>
      <fieldset className={`border-2 rounded border-neutral-400 relative`}>
        {label && (
          <legend className={`w-auto ml-2 px-0.5 text-sm`}>
            {label}
            {required && <span className="text-red-500">*</span>}
          </legend>
        )}
        <input
          type={type}
          ref={input}
          onKeyDown={onKeyDown}
          onChange={handleChange}
          disabled={disabled}
          required={required}
          value={value}
          placeholder={placeholder}
          className={`text-base p-2 rounded-md placeholder-gray-500 w-full h-full flex-1 outline-none select-none ${classNameInput} ${label ? 'pt-0' : ''} `}
        />
      </fieldset>
    </div>
  );
}

export default Input;
