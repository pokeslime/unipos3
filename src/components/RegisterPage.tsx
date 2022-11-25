import { Button } from '@mui/material';
import { ulid } from 'ulid';


export const RegisterPage = () => {
  const id = ulid()
  const url = "" //To be filled
  const userUrl = url + "/user";
  const set = () => {
    localStorage.setItem("userId",id)
  };
  return (
    <div>
        <h1>Register</h1>
        <form action={userUrl} method="post">
          <label>name:</label>
          <input type="text" name="Name" required/>
          <input type="hidden" name= "UserId" value ={id}/>
          <input type="hidden" name="UserPoint" value="0" />
          <br></br>
          <Button href="/"  type="submit" onClick={set}>登録</Button>
        </form>
    </div>
  );
};