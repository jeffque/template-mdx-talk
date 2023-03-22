import React from 'react';
import styled from 'styled-components';
import { FaTwitter, FaGithub } from 'react-icons/fa';
import Background from './Background';

const Img = styled.img`
  width: 160px;
  border: 6px solid #fff;
  border-radius: 50%;
`;

const Name = styled.h1`
  color: #ffffff;
`;

const Socials = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 24px;
`;

const Social = styled.a`
  text-decoration: none;
  color: #fff;
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    text-decoration: underline;
  }
`;

const Logo = styled.div`
  margin-top: 20px;
`;

const Title = styled.h2`
  margin: 0;
  font-size: 32px;
  color: #ffffff;
`;

const Intro = () => {
  return (
    <Background background="#03d69d">
      <Img src="./img/profile-photo.png" />
      <Name>Template baseado no trabalho do Fernando Silva</Name>
      <Socials>
        <Social href="https://twitter.com/fersilvaa16" target="_blank">
          <FaTwitter size="22px" />
          <a>fersilvaa16</a>
        </Social>
        <Social href="https://github.com/fersilva16" target="_blank">
          <FaGithub size="22px" />
          <a>fersilva16</a>
        </Social>
      </Socials>
      <Logo>
        <img width="240px" fillcolor="#fff" src="https://github.com/jxnblk/mdx-deck/raw/master/docs/ace.png"/>
        <Title>Compra um café pro cara</Title>
      </Logo>
    </Background>
  );
};

export default Intro;
