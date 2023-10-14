import { useEffect, useRef } from 'react';

function useClickOutside(handler: any, watch?: boolean) {
  const ref = useRef<any>(null);

  useEffect(() => {
    if (watch === false) return;
    // Detectar click afuera del componente
    const outside = (event: MouseEvent): void => {
      if (!ref.current || ref.current.contains(event.target)) return;
      handler(event);
    };

    document.addEventListener('mousedown', outside);
    return (): void => {
      document.removeEventListener('mousedown', outside);
    };
  }, [ref, handler]);

  return ref;
}
export default useClickOutside;
