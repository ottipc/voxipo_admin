import React, {Component} from 'react';
import {Admin, Resource, Login} from 'react-admin';
import dataProvider from "./api/dataProvider";
import {VoteList, VoteCreate, VoteEdit} from "./entities/vote"
import {UserVoteList} from "./entities/user_vote"
import {UserList} from "./entities/user"
import {QuestionList, QuestionCreate, QuestionEdit} from "./entities/question";
import {CategoryCreate, CategoryEdit, CategoryList} from "./entities/category";
import {AnswerCreate, AnswerEdit, AnswerList} from "./entities/answer";
require('dotenv').config();
const MyLoginPage = () => (
    <Login
        // A random image that changes everyday
        backgroundImage="https://source.unsplash.com/random/1600x900/daily"
    />
);

const App = () => <div>
<div style={{width: '95%'}}>

    <div style={{width: '100%'}}>
        <Admin loginPage={MyLoginPage} dataProvider={dataProvider}
        >
            <Resource name="vote" list={VoteList} edit={VoteEdit} create={VoteCreate}/>
            <Resource name="user" list={UserList} />
            <Resource name="user_vote" list={UserVoteList} />
            <Resource name="question" list={QuestionList} edit={QuestionEdit} create={QuestionCreate} />
            <Resource name="category" list={CategoryList} edit={CategoryEdit} create={CategoryCreate} />
            <Resource name="answer" list={AnswerList} edit={AnswerEdit} create={AnswerCreate} />
        </Admin>

    </div>
</div></div>;
export default App



