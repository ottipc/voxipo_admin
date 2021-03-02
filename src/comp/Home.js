import React, {Component} from 'react';
//import {ImageBackground, Text, View} from 'react-admin';
import  Cards, { Card } from 'react-swipe-card';
import City from './City';
import CardItem from './CardItem';


//const votedata = myApiService.getAllVotes();


class Home extends Component {


    constructor(props) {
        super(props);
        console.log("*************************** Constructor Home *****************************************************")
        //console.log(props.navigation.state.params.user)
        this.state = {
            //user_id: 3,
            user_id: props.navigation.state.params.user[0].id,
            user_email: props.navigation.state.params.user[0].email,
            //user_email: "test@test.de",
            loading: 'initial',
            voteData: []
        }
    }
  /*  persistVote(userId, voteId, answer) {
        console.log("Persisting Vote!!!!")
        myApiService.persistVoteResultForUser(voteId, userId, answer);
    }



*/
    async fetchVotesAsync() {
        try {
            this.setState({...this.state, isFetching: true});
            const response = await fetch('http://o.ssystems.de/api/vote', {
                method: 'get',
                headers: new Headers({
                        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoidm94aXBvX3VzZXIifQ.wC01CzL9dlurJYgqszJjDIyE0aQ_MPknUIgxrDkzssc',
                        'Content-Type': 'application/json'
                    }
                )
            })
            let votes = await response.json();
            votes = this.filterEmptyData(votes)
            //console.log("Votes")
            //console.log(votes)
            return votes
        } catch (e) {
            console.log(e);
            this.setState({...this.state, isFetching: false});
        }
    };

   /* async filterEmptyData(data) {
        let filterData = [];
        let userVotes = await myApiService.getAllUserVotes(this.state.user_id)
        for(let i = 0; i < data.length; i++) {
            if(data[i].picture_link === "" || data[i].ruling_party_leader === ""){
                continue;
            }
            if(this.voteExists(userVotes, data[i])){
                continue;
            }
            filterData.push(data[i])
        }
        return filterData
    }
*/
    /*voteExists(userVotes, voteobject) {
        for (let index = 0; index < userVotes.length; ++index) {
            let user_vote = userVotes[index];
            if (user_vote.vote_id == voteobject.id) {
                return true
            }
        }
        return false;
    }*/

    componentDidMount() {
        console.log('This happens 3rd.');

        this.setState({ loading: 'true' });
        this.fetchVotesAsync()
            .then((data) => {
                console.log('This happens 7th.');
                //console.log(data);
                this.setState({
                    voteData: data,
                    loading: 'false'
                });
            });
    }

    render() {

        {
            console.log("----------RENDERING-----------------------------")
            console.log("----------VOTE DATA IN RENDERING-----------------------------")
            //    console.log(voteData)
        }

        if (this.state.loading === 'initial') {
            console.log('This happens 2nd - after the class is constructed. You will not see this element because React is still computing changes to the DOM.');
            return (<div>Intializing...</div>);
        }


        if (this.state.loading === 'true') {
            console.log('This happens 5th - when waiting for data.');
            return (<div>Loading...</div>);
        }

        if (this.state.voteData === undefined || this.state.voteData.length === 0) {
            return (<div>Empty...</div>);
        }

        return (



           /* <ImageBackground
                source={require('../../assets/images/bg.png')}
                style={styles.bg}
            >*/
              /*  <View style={styles.containerHome}>
                    <View style={styles.top}>
                        <City/>
                        <Text>{this.state.user_email}</Text>
                        {/!*<Filters />*!/}

                    </View>*/

                    <Cards
                        onEnd={action('end')} className='master-root'
                    >
                        {this.state.voteData.map((item, index) => (
                            <Card
                                onSwipedLeft={() => {
                                    //this.persistVote(this.state.user_id, item.id,false)
                                }}
                                onSwipedRight={() => {
                                    //this.persistVote(this.state.user_id, item.id,true)
                                }}
                                key={index}>
                                <CardItem
                                    text={item.ruling_party_leader}
                                    detail={item.political_position}
                                    imageurl={item.picture_link}
                                    state_of_leader={item.state}
                                    licence_text={item.licence_text}
                                    matches="0"
                                    actions
                                    onPressLeft={() => {

                                        //this.swiper.swipeLeft()
                                            //this.persistVote(this.state.user_id, item.id,false)
                                    }}
                                    onPressRight={() => {
                                        //this.swiper.swipeRight()
                                        //this.persistVote(this.state.user_id, item.id,true)
                                    }}
                                />
                            </Card>
                        ))}
                    </Cards>
           /*     </View>
            </ImageBackground>*/
        );
    }
};

export default Home;
