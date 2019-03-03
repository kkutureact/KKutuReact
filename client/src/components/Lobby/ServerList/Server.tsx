import React from 'react';
import styled from "styled-components";
import blue from "../../../assets/images/blue_gauge.png";

const Container = styled.div`
    float: left;
    margin: 2px 0px;
    width: 320px;
    height: 16px;
    font-size: 13px;
    cursor: pointer;
    
    &>div {
        float: left;
    }
`;

const StatusIcon = styled.div<{ isOnline: boolean }>`
    background-color: ${props => props.isOnline ? '#3E3' : '#777'};
    border-radius: 6px;
    margin: 2px;
    width: 12px;
    height: 12px;
`;

const StatusName = styled.div`
    width: 60px;
`;

const StatusGraph = styled.div`
    width: 190px;
    height: 100%;
    box-shadow: 0px 1px 1px #141414;
    
    &>label {
        position: relative;
        display: block;
        top: -14px;
        width: 100%;
        text-align: center;
        font-size: 11px;
    }
`;

const Graph = styled.div<{ width: number }>`
    width: ${props => props.width}%;
    height: 100%;
    background-image: url(${blue});
`;

const StatusEnter = styled.div`
    width: 50px;
    text-align: center;
`;

interface Props {
    readonly name: string;
    readonly isOnline: boolean;
    readonly size: number;
}

export const Server: React.FC<Props> = ({ name, isOnline, size }) => {
    return(
        <Container>
            <StatusIcon isOnline={isOnline}/>
            <StatusName>{name}</StatusName>
            <StatusGraph>
                <Graph width={size}/>
                <label>{isOnline ? '현재인원/전체인원' : '-'}</label>
            </StatusGraph>
            <StatusEnter>{isOnline ? '접속' : '-'}</StatusEnter>
        </Container>
    );
}

export default Server;