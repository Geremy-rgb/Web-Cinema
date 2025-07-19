import { useEffect, useState } from "react";

/**
 * Devuelve un valor debounced (retrasado) después del tiempo especificado.
 * @param value - El valor original (por ejemplo, un input).
 * @param delay - Tiempo en milisegundos para aplicar el debounce.
 */
export function useDebounce<T>(value: T, delay: number = 500): T {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [value, delay]);

  return debouncedValue;
}