import Button from '@mui/material/Button';
import { MyData } from './MyData';
import { Menu } from './Menu';

export const HomePage = () => {

  return (
    <div>
        <header>
            <h1>Title</h1>
            <br></br>
            <Menu />
        </header>
        <body>
            <MyData />
            <Button href="/login">ログイン</Button>
            <Button href="/register">新規登録</Button>
        </body>
    </div>
  );
};