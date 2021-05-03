import React, { useCallback } from 'react';
import { Card, Button, Avatar } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { logoutRequestAction } from '../reducers/user';

const UserProfile = () => {
  const { me, logOutLoadding } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const onLogout = useCallback(() => {
    dispatch(logoutRequestAction());
  }, []);
  return (
    <Card actions={[
      <div key="twit">짹짹<br />{me.Posts.length}</div>,
      <div key="following">팔로잉<br />{me.Followings.length}</div>,
      <div key="follower">팔로워<br />{me.Followers.length}</div>,

    ]}
    >

      <Card.Meta title={me.nickname} avatar={<Avatar>{me.nickname[0]}</Avatar>} />
      <Button onClick={onLogout} loading={logOutLoadding}>로그아웃</Button>
    </Card>
  );
};

export default UserProfile;
