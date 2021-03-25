import { useCallback, useState } from 'react';

export default function useInput<T>(
  input: T
): [T, React.Dispatch<React.SetStateAction<T>>, (e: any) => void] {
  const [value, setValue] = useState(input);

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  return [value, setValue, onChange];
}
