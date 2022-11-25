import { useState, useEffect } from 'react';
import { User } from '../types/UserType';
import Button from '@mui/material/Button';

export const LoginPage = () => {

    const url= "" //To be filled
    const userUrl = url + "/user"
    const[users,setUsers] = useState<User[]>([])
    
    useEffect(()=>{fetch(userUrl)
    .then(response=>{return response.json()})
    .then(json=>setUsers(json))},[])
    
    console.log(users);
    const handleChange = (e:any) => {
      localStorage.setItem("userId",e.target.id);
      console.log(e.target.id)
    }
    return (
      <>
      <h1>ログイン</h1>
      {users.map((u)=>(
        <div key={u.UserId}>
          <form>
            <Button href="/home" id={u.UserId} onClick={(e:any) => handleChange(e)} >{u.Name},{u.UserPoint}ポイント 選択</Button>
          </form>
        </div>
      ))}
      </>
    )
  }
