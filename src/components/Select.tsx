'use client';
import useClickOutside from '@/hooks/useClickOutside';
import { KeyboardEvent, useRef, useState } from 'react';

function Select({
  onSelect,
  options,
  value,
  label = '',
  optionKey = 'name',
  required = false,
  disabled = false,
  className,
  classNameInput,
}: {
  onSelect: Function;
  options: any[];
  value?: any;
  label?: string;
  optionKey?: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
  classNameInput?: string;
}) {
  const input = useRef<HTMLInputElement>(null);
  const optionsRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState<boolean>(false);
  const [preselectedIndex, setPreselectedIndex] = useState<number>(0);
  const select = useClickOutside((): void => {
    setOpen(false);
    input?.current?.blur();
  });

  const onFocus = (): void => {
    !open && setOpen(true);
  };
  const onClickOverlay = (): void => {
    input?.current?.blur();
  };
  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Escape') {
      setOpen(false);
      input?.current?.blur();
      return;
    }
    if (e.key === 'Enter') {
      !open && setOpen(true);
      open && handleSelect(options[preselectedIndex], preselectedIndex);
      return;
    }
    if (e.key === 'ArrowUp') {
      setPreselectedIndex((i: number): number => (i > 0 ? i - 1 : i));
      return;
    }
    if (e.key === 'ArrowDown') {
      setPreselectedIndex((i: number): number => (i < options.length - 1 ? i + 1 : i));
      return;
    }

    const isObject = typeof options[0] === 'object';
    const newIndex = options.findIndex((option: any): boolean => {
      if (isObject) {
        return option?.[optionKey]?.[0] === e.key;
      } else {
        return option?.[0] === e.key;
      }
    });
    newIndex >= 0 && setPreselectedIndex(newIndex);
  };

  const handleSelect = (optionSelected: any, i: number): void => {
    onSelect(optionSelected);
    setPreselectedIndex(i);
    setOpen(false);
    input?.current?.blur();
  };

  return (
    <div ref={select} className={`relative select-none w-52 cursor-pointer ${className}`}>
      <fieldset className={`border-2 rounded border-neutral-400 relative ${open ? '!border-black' : ''}`}>
        {label && (
          <legend className={`w-auto ml-2 px-0.5 text-sm`}>
            {label}
            {required && <span className="text-red-500">*</span>}
          </legend>
        )}
        <input
          readOnly
          type="text"
          ref={input}
          onFocus={onFocus}
          onKeyDown={onKeyDown}
          disabled={disabled}
          required={required}
          value={value?.[optionKey] || value || ''}
          placeholder="Seleccione..."
          className={`text-base p-2 rounded-md placeholder-gray-500 w-full h-full flex-1 cursor-pointer outline-none select-none selection:bg-transparent ${classNameInput} ${
            label ? 'pt-0' : ''
          } `}
        />
        <div className={`absolute -top-1 flex items-center justify-center h-full right-2 ${open ? '' : 'rotate-180'}`}>^</div>
        {open && <div className="absolute top-0 left-0 w-full h-full" onClick={onClickOverlay}></div>}
      </fieldset>
      <div
        ref={optionsRef}
        className="fixed shadow-xl top-100 bg-white w-full delay-75 transition rounded border border-neutral-400 overflow-y-auto"
        style={{ width: Number(input?.current?.clientWidth) + 4, visibility: open ? 'visible' : 'hidden', opacity: open ? '1' : '0' }}>
        {options.length !== 0 ? (
          options.map((option: any, i: number) => (
            <div
              key={i}
              onClick={() => handleSelect(option, i)}
              className={`w-full cursor-pointer hover:bg-[#d5dcff] p-2 px-4 ${i === preselectedIndex ? '!bg-[#006fda] text-white' : ''}`}>
              {option?.[optionKey] || option}
            </div>
          ))
        ) : (
          <p className="text-sm text-center p-1">No hay opciones</p>
        )}
      </div>
    </div>
  );
}

export default Select;
