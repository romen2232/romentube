import * as React from 'react';
import '../../assets/css/form.css';

export interface IInputProps {
  label: string;
  type: string;
  name: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

/**
 * Input component for form fields
 * @param props 
 * @returns 
 */
export function Input(props: IInputProps) {

  const [value, setValue] = React.useState(props.value);

  React.useEffect(() => {
    if (value === undefined || value === '' || value === null) {
      document.getElementById(props.label)?.classList.remove('hidden');
    } else {
      document.getElementById(props.label)?.classList.add('hidden');

    }
  }, [value]);




  return (
    <div className="relative mb-2">
      <input className="w-full rounded px-3 border border-gray-300 pt-5 pb-2 focus:border-blue-700 focus:ring-1 focus:ring-blue-700 focus:outline-none input active:outline-none block text-sm text-gray-900 bg-transparent appearance-none peer" id={props.name} type={props.type} name={props.name} value={value} onChange={e => setValue(e.target.value)} />
      <label id={props.label}  htmlFor={props.name} className="absolute text-lg text-gray-500 duration-300 transform scale-75 left-0 top-3 z-10 origin-[0]peer-focus:left-0 peer-focus:text-blue-700 peer-placeholder-shown:scale-100 peer-focus:text-sm peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:bg-white peer-focus:px-2 peer-focus:block" >{props.label}</label>
    </div>
  );
}
