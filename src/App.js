import React, {Component} from 'react';
import {Admin, Resource} from 'react-admin';
import dataProvider from "./api/dataProvider";
import {VoteList, VoteCreate, VoteEdit} from "./entities/vote"
import {UserVoteList} from "./entities/user_vote"
import {UserList} from "./entities/user"
require('dotenv').config();

const App = () => <div style={{width: '95%'}}>
    <div style={{width: '100%'}}>
        <Admin dataProvider={dataProvider}
        >
            <Resource name="vote" list={VoteList} edit={VoteEdit} create={VoteCreate}/>
            <Resource name="user" list={UserList} />
            <Resource name="user_vote" list={UserVoteList} />
        </Admin>
    </div>
</div>;
export default App



