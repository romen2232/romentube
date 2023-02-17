import * as React from 'react';
import { Title } from '../../components/ui/Title';
import { AnchorLink } from '../../components/ui/AnchorLink';
import { Form } from '../../components/form/Form';
import { Input } from '../../components/form/Input';
import { InputFile } from '../../components/form/InputFile';
import { Button } from '../../components/form/Button';
import UserAPI from '../../context/Auth/UserAPI';

export interface IRegisterCardProps {
}

export function RegisterCard (props: IRegisterCardProps) {
  const [username, setUsername] = React.useState('');
  const [name, setName] = React.useState('');
  const [surname, setSurname] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [profilePicture, setProfilePicture] = React.useState<File | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const user = {
      username,
      name,
      surname,
      password,
      profilePicture
    };
    const response = await UserAPI.createUser(user);
    console.log(response);
  };

  return (
    <>
      <div className="flex flex-col items-center space-y-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="75" viewBox="5.368 13.434 53.9 37.855"><path fill="#FFF" d="M41.272 31.81c-4.942-2.641-9.674-5.069-14.511-7.604v15.165c5.09-2.767 10.455-5.301 14.532-7.561h-.021z"/><path fill="#E8E0E0" d="M41.272 31.81c-4.942-2.641-14.511-7.604-14.511-7.604l12.758 8.575c.001 0-2.324 1.289 1.753-.971z"/><path fill="#CD201F" d="M27.691 51.242c-10.265-.189-13.771-.359-15.926-.803-1.458-.295-2.725-.95-3.654-1.9-.718-.719-1.289-1.816-1.732-3.338-.38-1.268-.528-2.323-.739-4.9-.323-5.816-.4-10.571 0-15.884.33-2.934.49-6.417 2.682-8.449 1.035-.951 2.239-1.563 3.591-1.816 2.112-.401 11.11-.718 20.425-.718 9.294 0 18.312.317 20.426.718 1.689.317 3.273 1.267 4.203 2.492 2 3.146 2.035 7.058 2.238 10.118.084 1.458.084 9.737 0 11.195-.316 4.836-.57 6.547-1.288 8.321-.444 1.12-.823 1.711-1.479 2.366a7.085 7.085 0 0 1-3.76 1.922c-8.883.668-16.426.813-24.987.676zM41.294 31.81c-4.942-2.641-9.674-5.09-14.511-7.625v15.166c5.09-2.767 10.456-5.302 14.532-7.562l-.021.021z"/></svg>
          <Title title="Sign up" />
          <p className="leading-normal">Create your RomenTube account</p>
      </div>
      <Form>
          <Input type="text" label="Username" name='username' />
            <Input type="text" label="First name" name='name' />
            <Input type="text" label="Last name" name='surname' />
            <InputFile label="Profile picture" accept='image/*' maxSize={3}/>
          <Input type="password" label="Password" name='password' />
      </Form>
      <div className="text-sm flex justify-between items-center">
          <AnchorLink href="/login" text="Login" />
          <Button type="submit" text='Submit' />
      </div>
    </>
  );
}
