import * as React from 'react';

export interface IInputFileProps {
    'label': string;
    'maxSize': number;
    'onChange'?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    'onError'?: (error: string) => void;
    'onSuccess'?: (file: File) => void;
    'accept'?: string;
    'multiple'?: boolean;
}

/**
 * InputFile
 * https://tailwindflex.com/fagundo/file-upload-with-icon
 * @param props 
 * @returns 
 */
export function InputFile (props: IInputFileProps) {
  return (
    <>
        <div className="shrink-0">
        <img className="object-cover w-16 h-16 rounded-full"
        src="https://cdn.pixabay.com/photo/2016/04/22/04/57/graduation-1345143__340.png" alt="profile photo" />
    </div>
    <label className="block">
        <span className="sr-only">Choose File</span>
        <input type="file"
        className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />
  </label>
    </>
  );
}
