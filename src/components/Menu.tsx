import ArrowDropdown from '@/icons/ArrowDropdown';
import { useState } from 'react';

function Menu({ options, value = { name: 'Seleccione' }, onSelect, optionKey = 'name' }: { options: any[]; value?: any; onSelect?: Function; optionKey?: string }) {
  const [show, setShow] = useState<boolean | undefined>(undefined);
  const [selected, setSelected] = useState(value);
  const [preSelectedIndex, setPreSelectedIndex] = useState(-1);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [clicks, setClicks] = useState(0);

  const handleSelect = (option: any, index: number) => {
    onSelect?.(option);
    setSelected(option);
    setSelectedIndex(index);
    setPreSelectedIndex(index);
  };

  const onKeyDown = (e: any): void => {
    if (e.key === 'Tab' || e.key === 'Escape') {
      setPreSelectedIndex(selectedIndex);
      e?.target?.blur();
      return;
    }
    if (e.key === 'Enter') {
      handleSelect(options?.[preSelectedIndex], preSelectedIndex);
      e?.target?.blur();
      return;
    }
    if (e.key === 'ArrowUp') {
      setPreSelectedIndex((i: number): number => (i > 0 ? i - 1 : i));
      return;
    }
    if (e.key === 'ArrowDown') {
      setPreSelectedIndex((i: number): number => (i < options?.length - 1 ? i + 1 : i));
      return;
    }

    const newIndex = options?.findIndex((option: any): boolean => {
      return option?.[optionKey]?.[0].toLowerCase() === e.key.toLowerCase();
    });
    newIndex >= 0 && setPreSelectedIndex(newIndex);
  };

  const onMouseUp = (e: any): void => {
    setClicks((e: number): number => e + 1);
    if (clicks > 0) e.target.blur();
  };
  const onFocus = (): void => {
    setShow(true);
    setClicks(0);
  };
  const onBlur = (): void => {
    setShow(false);
    setClicks(0);
  };

  return (
    <div className="w-full">
      <button
        onKeyDown={onKeyDown}
        onMouseUp={onMouseUp}
        onFocus={onFocus}
        onBlur={onBlur}
        className="flex justify-start relative rounded-md text-sm font-medium transition-colors border border-input outline-gray-500 focus:outline-1 focus-visible:outline-1 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full">
        {selected?.[optionKey]}
        <ArrowDropdown
          className={`absolute top-1/2 right-2 transform ease-in -translate-x-1/2 -translate-y-1/2 
        ${show ? 'rotate-180' : 'rotate-0'}`}
        />
      </button>

      <ul className={`z-50 mt-1 py-1 rounded-md border shadow-md outline-none w-full ${show === true ? 'animation-drop-open' : show === false ? 'animation-drop-close' : 'invisible'}`}>
        {options?.map((option: any, i: number) => (
          <li key={i} className={`p-2 hover:bg-slate-100 ${i === preSelectedIndex ? 'bg-slate-100' : ''}`} onMouseDown={(): void => handleSelect(option, i)}>
            {option?.[optionKey]}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Menu;
