import React, { Component } from 'react';
import '../index.css';
import Moment from 'react-moment';

class List extends Component {

    constructor(props){
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        }
    }

    componentDidMount(){
        fetch('https://contenthub-api.eco.astro.com.my/channel/all.json')
            //use es6 arrow function to not lose context of 'this'
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    items: json.response,
                })
            }).catch(console.log);
    }



    render() { 

        var { isLoaded, items } = this.state;

        if(!isLoaded) {
            return <div>Loading...</div>;
        }

        else {
            return (
            <div className="List">

                {/* <input type="text" 
                    value={this.state.search}
                    onChange={this.updateSearch.bind(this)} /> */}
                    
                <div className="row">
                    {items.map(item => (
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={item.id}>
                            <div>
                                <a href={"https://content.astro.com.my"+ item.detailUrl }>
                                    <div className="box">
                                        <div className="row">
                                            <div className="logo-wrap col-lg-4 col-md-3 col-sm-4 col-3">
                                                <img className="logo" src={item.imageUrl} />
                                            </div>
                                            <div className="col-lg-8 col-md-9 col-sm-8 col-9">
                                                <div className="col-12">CH{item.stbNumber}</div>
                                                <div className="col-12"><strong>{item.title}</strong></div>
                                            </div>
                                        </div>
                                        <hr />
                                        { item.currentSchedule.slice(0,3).map( (schedule,scheduleIndex) => (
                                        <div className="row">
                                            <div className="col-lg-4 col-md-3 col-sm-4 col-3">
                                                <div style={{marginBottom: "5px"}}>{scheduleIndex === 0 ? "On Now" : <Moment format="h:mm a" style={{color: "#888"}}>{schedule.datetime}</Moment> }</div>
                                            </div>
                                            <div className="col-lg-8 col-md-9 col-sm-8 col-9">
                                                {scheduleIndex === 0 ? <div className="col-12" style={{marginBottom: "5px"}}>{schedule.title}</div> : <div className="col-12" style={{color: "#888", marginBottom: "5px"}}>{schedule.title}</div> }
                                            </div>
                                        </div>
                                        ))}
                                    </div>
                                </a>
                            </div>
                        </div>
                    ))};
                </div>
            </div>
            );
        }
    }
}
 
export default List;