import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Router from 'next/router';
import NicknameEditForm from '../components/NicknameEditForm';
import AppLayout from '../components/AppLayout';
import FollowList from '../components/FollowList';
import { LOAD_FOLLOWERS_REQUEST, LOAD_FOLLOWINGS_REQUEST } from '../reducers/user';

const Profile = () => {
  const dispatch = useDispatch();

  const { me } = useSelector((state) => state.user);
  console.log(me);
  useEffect(() => {
    dispatch({
      type: LOAD_FOLLOWERS_REQUEST,

    });
    dispatch({
      type: LOAD_FOLLOWINGS_REQUEST,
    });
  }, []);

  useEffect(() => {
    console.log(me);
    // console.log(me.id, '보너스');
    // console.log(me && me.id, '이건알아야되');
    // console.log(!(me && me.id), '이건알아야되');
    if (!(me && me.id)) {
      Router.push('/');
    }
  }, [me && me.id]);
  if (!me) {
    return null;
  }
  return (
    <AppLayout>
      <NicknameEditForm />
      <FollowList
        header="팔로잉 목록"
        data={me.Followings}
      />
      <FollowList
        header="팔로워 목록"
        data={me.Followers}
      />
    </AppLayout>
  );
};

export default Profile;
