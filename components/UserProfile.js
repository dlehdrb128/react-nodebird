import React, { useCallback } from 'react';
import {Card,Button} from 'antd';
import Avatar from 'antd/lib/avatar/avatar';


const UserProfile = ({setIsLoggedIn}) => {
    console.log(setIsLoggedIn)
    const onLogOut = useCallback(()=> {
        setIsLoggedIn(false)
    })
    return (
       <Card actions={[
            <div key="twit">짹쨱<br/>0</div>,
            <div key="followings">팔로잉<br/>0</div>,
            <div key="followings">팔로워<br/>0</div>
        
       ]}>
           

           <Card.Meta title="ZeroCho" avatar={<Avatar>ZC</Avatar>} />
           <Button onClick={onLogOut}>로그아웃</Button>
       </Card>
    )
};


export default UserProfile