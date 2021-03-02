import React from 'react';
import {Admin, Resource} from 'react-admin';
import dataProvider from "./api/dataProvider";
import {VoteList, VoteCreate, VoteEdit} from "./entities/vote"
import DashBoard from "./comp/DashBoard";
require('dotenv').config();

const App = () => <div style={{width: '95%'}}>
    <div style={{width: '100%'}}>
        <Admin dashboard={DashBoard} dataProvider={dataProvider}
        >
            <Resource name="vote" list={VoteList} edit={VoteEdit} create={VoteCreate}/>
        </Admin>
    </div>
</div>;
export default App



