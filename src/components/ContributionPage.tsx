import { Button } from '@mui/material'
import React, { useState, ChangeEvent } from 'react'
import { ulid } from 'ulid';
import { Menu } from './Menu';
import { UserMessage } from '../types/UserMessageType';

export const ContributionPage = () => {
  const url = "" //To be filled 
  const sendMessageUrl = url+"/sendMessage"

  const localUserId: any = localStorage.getItem("userId");  

  const [name, setName] = useState<string>("");
  const [point, setPoint] = useState<number>(0);
  const [text, setText] = useState<string>("");

  　//name入力欄にて入力値を表示する
  const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  //point入力欄にて入力値を表示する
  const onChangePoint = (e: ChangeEvent<HTMLInputElement>) => {
    setPoint(e.target.valueAsNumber)
  };  

  //text入力欄にて入力値を表示する
  const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
        const result = await fetch(sendMessageUrl, {   //urlじゃなくてuserURLかも、他のやつかも
          method: "POST",
          body: JSON.stringify({
            MessageId: ulid(),
            FromUserId: localUserId,
            ToUserId: "",  //To be filled
            MessagePoint: point,
            MessageText: text,
            UserId: localUserId,
            Name: name
          }),
        }); 
        if (!result.ok) {
          throw Error(`Failed to create user: ${result.status}`);
        }
        setName("");
        setPoint(0);
        } catch (err) {
          console.error(err);
        }
  };

  return (
    <div>
      <header>
        <h1>Title</h1>
        <br></br>
        <Menu />
      </header>
      <body>
        <form action={sendMessageUrl} method="post" onSubmit={onSubmit}>
            <label>To:</label>
            <input type="text" name="ToUserId" onChange={onChangeName} />
            <label>送るポイント:</label>
            <input type="number" name="MessagePoint" min="1" max="50" onChange={onChangePoint} required />
            <label>メッセージ</label>
            <input type="text" name="MessageText" onChange={onChangeText} required />
            <input type="hidden" name="MessageId" value={ulid()} />
            <input type="hidden" name="FromUserId" value={localUserId} />
            <Button href="/home" type="submit" >送信</Button>
        </form>
        <br></br>
        <Button href="/delete">貢献の削除</Button>
       </body> 
    </div>
  );
};