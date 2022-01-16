import React, { useContext } from "react";
import { UserContext } from "../../../providers/UserProvider";
import styled from "styled-components";

export const UserIconWithName = (props) => {
  const { image, name } = props;
  const { userInfo } = useContext(UserContext);
  const isAdmin = userInfo ? userInfo.isAdmin : false;
  console.log("UserCardWithName");

  return (
    <Scontainer>
      <SImg height={160} width={120} src={image} alt="プロフィール" />
      <SName>{name}</SName>
      {isAdmin && <SEdit>編集</SEdit>}
    </Scontainer>
  );
};

const Scontainer = styled.div`
  text-align: center;
`;
const SImg = styled.img`
  border-radius: 50%;
`;
const SName = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  color: #40514e;
`;
const SEdit = styled.span`
  text-decoration: underline;
  color: #aaa;
  cursor: pointer;
`;
