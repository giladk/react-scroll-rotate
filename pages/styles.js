import styled from 'styled-components';
import { EDEADLK } from 'constants';

export const PageContainer = styled.div``;

export const ExampleSection = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    position:relative;
    padding-bottom:32px;
`;


export const BannerWrapper = styled.div`
    background-color: #3e9fffa6;
    height: 50vh;
    box-shadow: 2px 1px 8px 0px #5f5f5f;
    position:relative;
`;


export const Title = styled.h1`
  padding-top:8vh;
  padding-bottom:2vh;
  font-size: 60px;
  @media (max-width: 768px) {
    font-size: 40px;
  }
  @media (max-width: 500px) {
    font-size: 30px;
  }
  text-align: center;
  color: #ffffff;

`;


export const CenterContainer = styled.div`
    flex:1;
    width: 100%;
    max-width:704px;
    margin:0 auto;
    display:flex;
    flex:1;
    flex-direction:${props=>props.flex==='col' ? 'column' : 'row'}
    align-items:start;
    @media (max-width: 768px) {
        margin:0 32px;
        width: auto;
    }
`;

export const NpmInstallWrapper = styled.div`
background: #484848;
padding: 8px 24px;
border-radius: 5px;
font-size: 1em;
color: #fff;
`;

export const BannerIconPositionOne = styled.div`
    position:absolute;
    bottom:-25px;
    left:37%;
    @media (max-width: 768px) {
        left:16%;
        top:40vh;
    }
`;

export const BannerIconPositionTwo = styled.div`
    position:absolute;
    top:73%;
    left:65%;
    @media (max-width: 768px) {
        top:73%;
        left:75%;
    }
`;

export const BannerIconPositionThree = styled.div`
    position:absolute;
    top:16%;
    left:72%;
    @media (max-width: 768px) {
        top:5%;
        left:60%;
    }
`;


export const BannerIconOne = styled.div`
    width:40px;
    height:40px;
    border-radius:10px;
    border:5px solid;
    background-color:#f7f7f7;
    color:green;
    display:flex;
    align-items:center;
    justify-content: center;
    box-shadow: 4px 4px;
`

export const LinksWrapper = styled.div`
    padding:8px 0px;
    font-size:16px;
    display:flex;
    @media (max-width: 768px) {
        flex-direction:column;
    }
`;
export const LinkWrapper = styled.a`
    color:#000;
    border:1px solid;
    border-radius:5px;
    padding: 8px;
    flex-direction: row;
    display: flex;
    align-items: center;
    margin-left:16px;
    text-decoration: none;
`;

export const LinkText = styled.div`
    margin-left:8px;
`;

export const WhatTitle = styled.div`
    font-size:32px;
    border-bottom:1px solid gray;
    width:100%;
    padding-top:40px;
    display:flex;
    justify-content:space-between;
    align-items: flex-end;
`;


export const ExampleTitle = styled.div`
    font-size:32px;
    border-bottom:1px solid gray;
    width:100%;
    padding-top:40px;
`;


export const ExampleContent = styled.div`
    font-size:20px;
    width:100%;
    padding-top:12px;
    p{
        margin:0px;
        padding:16px 0px;
    }
`;

export const ExampleDemoWrapper = styled.div`
    // position:absolute;
    // top:50%;
    // margin-top:-25px;
    // height:50px;
    // right:10%;
    // width:50px;
    padding-left:32px;display:flex;
    flex-direction:column;
    justify-content:center;
`

export const ExampleContentAndDemo = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    width:100%;
`;
export const ExampleCodeWrapper = styled.div`
    background-color: #000000;
    color: #c5c5c5;
    flex:1;
    padding:16px;
`;

export const ExampleCodePre = styled.pre`
    white-space: pre-wrap;
    font-size:14px;
    margin: 0px;
`;
export const ExampleDemoButtonWrapper = styled.div`
    margin:12px 0;
    position:relative;
`;

export const AnimationDurationNote = styled.div`
    poisition:absoulute;
    bottom:0;
    left:0;
    color:#36a1ff;
`;

export const ExampleDemoButton = styled.div`
    width:30px;
    height:30px;
    border-radius:10px;
    border:5px solid green;
    // border-color:#15ca15 #ff5e00 #a200a2 #55c6f5;
    box-shadow:2px 2px 1px 0px #273e28a3;
    display:flex;
    align-items:center;
    justify-content:center;
`;