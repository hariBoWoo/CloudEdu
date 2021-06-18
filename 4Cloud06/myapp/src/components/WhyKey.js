import React, { useState, useRef, useEffect } from "react";
import {shuffle} from 'lodash'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

// ------------matrial-ui 적용
const useStyles = makeStyles((theme) => ({
root: {
    '& > *': {
    margin: theme.spacing(1),
    width: '25ch',
    },
},
}));

export default function Whykey() {
  const classes = useStyles(); //-------------------matrial-ui 적용
  const inputTxt = useRef(null);

  const [ userList, setUserList ] = useState([
    { id: 1, name: "빌게이츠" },
    { id: 2, name: "스티브잡스" },
    { id: 3, name: "홍길동" },
    { id: 4, name: "일론머스크" }
  ]);

  const putUserList = () => {
    setUserList([
        //...userList에 담겨있던 값을 앞에 가져오겠다 
      ...userList,
      {
        id: userList.length + 1,
        name: inputTxt.current.value
      },
    ])
  }

//   useEffect(()=>{
//     const id = setInterval(()=>{
//         const newUserList = shuffle(userList);
//         setUserList(newUserList)
//     }, 1000);
//     return () => {
//         clearInterval(id);
//     }
//   },[]);

  return(
    <div className="container">
      {
        userList.map((item, index) => (
          <TextField
            id="outlined-read-only-input"
            label="Read Only"
            defaultValue={item.name}
            InputProps={{
              readOnly: true,
            }}
            variant="outlined" 
            key={item.id}
            type="text" 
            // placeholder={item.name} 
            style={{ display: "block"}}
          />
        ))
      }
      
      <TextField id="standard-basic" label="Standard"
        type="text"
        ref={inputTxt}
      />
      <Button variant="contained" color="primary"onClick={putUserList}>Submit</Button>
    </div>
  );
}