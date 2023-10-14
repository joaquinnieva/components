import useClickOutside from '@/hooks/useClickOutside';
import { useState } from 'react';

function Menu() {
  const [show, setShow] = useState(false);
  const select = useClickOutside((): void => setShow(false));
  return (
    <div onClick={(e) => e.stopPropagation()}>
      <button
        onClick={() => setShow(!show)}
        className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
        label
      </button>
      <div
        ref={select}
        className={`z-50 mt-1 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 w-80 ${
          show ? '' : 'invisible'
        }`}>
        <ul>
          <li className="hover:bg-slate-100">1asd</li>
          <li className="hover:bg-slate-100">2asd</li>
          <li className="hover:bg-slate-100">
            <input type="text" />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Menu;
