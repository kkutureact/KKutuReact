import React from 'react';
import {RouteComponentProps, withRouter} from 'react-router';
import {WebSocketProvider} from '../../index';
import config from '../../config';
import Room from './Room';
import {Link} from 'react-router-dom';

export const RoomProvider: React.FC<RouteComponentProps<{ channel: string }>> = ({match}) => {
    const gameServerWS = config.gameServers[parseInt(match.params.channel)];

    if (gameServerWS == undefined) {
        alert('Error! 존재하지 않는 채널입니다.');
        return(<Link to={'/'}><button>로비로 돌아가기</button></Link>);
    }

    return (
        <WebSocketProvider
            url={gameServerWS}
            onError={(event: any) => {
                console.log(`WebSocket Error! ${JSON.stringify(event)}`);
            }}>
            <Room/>
        </WebSocketProvider>
    );
};

export default withRouter(RoomProvider);
