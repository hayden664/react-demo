import React, { Component } from 'react';
import '../index.css';
import Moment from 'react-moment';
import 'bootstrap-icons/font/bootstrap-icons.css';

class List extends Component {

    constructor(props){
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        }

        this.ChangeCategory = this.ChangeCategory.bind(this);
        this.btnSearch = this.btnSearch.bind(this);
    }
    
    ChangeCategory(){
        fetch('https://contenthub-api.eco.astro.com.my/channel/all.json')
        .then(res => res.json())
        .then(json => {
            var category;
            var x;
  
            category = json.response;
    
            var result = category.filter((z)=>z.category === document.getElementById("locality").value);

            var items2 = [];
            for (x in result) {
                items2[x] = result[x];
            }

            this.setState({
                items: items2,
            })
            
        }).catch(console.log);

        document.getElementById("txtBox1").value = '';

    }
    
    btnSearch(){    
        fetch('https://contenthub-api.eco.astro.com.my/channel/all.json')
        .then(res => res.json())
        .then(json => {
            var items;
            var y;
            var searchItem = [];

            items = json.response;
    
            //filter by channel name, search the list with keyword from textbox (don't need to be exact word)
            var result = items.filter((z)=>z.title.toUpperCase().indexOf(document.getElementById("txtBox1").value.toUpperCase()) !== -1);
            
            for (y in result) {
                searchItem[y] = result[y];
            }
    
            this.setState({
                items: searchItem,
            })
            
        }).catch(console.log);
    
        document.getElementById("locality").selectedIndex = 0;
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

                var items = json.response;
                var result = items.filter((z)=>z.category === document.getElementById("locality").value);

                //Populate category into dropdownlist
                var select = document.getElementById("locality");
                var options = [];
                var option = document.createElement('option');
                var i = 0;

                var uniqueNames = [];
                for(i = 0; i< items.length; i++){
                    if(uniqueNames.indexOf(items[i].category) === -1){
                        uniqueNames.push(items[i].category);        
                    }        
                }

                for(i = 0; i< uniqueNames.length; i++){    
                    option.text = option.value = option.key = uniqueNames[i];
                    options.push(option.outerHTML);      
                }

                select.insertAdjacentHTML('beforeEnd', options.join('\n'));
                //Populate category into dropdownlist
            }).catch(console.log);
            
    }

    
    render() { 

        var { isLoaded, items } = this.state;

        if(!isLoaded) {
            return <div>Loading...</div>;
        }

        else {
            return (

                
            <div className="list">
                <h1 className="text-center pt-5 pb-5">Astro Channel List</h1>
                <br></br>
                <div className="row mb-5">

                    <div className="col-md-6 col-sm-12 category-wrap">
                        <select key="locality" id="locality" className="form-control" name="locality" onChange={this.ChangeCategory} style={{padding:"5px", width:"250px"}}>
                            <option>Select category</option>
                        </select>
                    </div>

                    <div className="col-md-6 col-sm-12 search-wrap">
                        <div className="input-group" style={{width:"250px"}}>
                            <input key="txtBox1" type="text" id="txtBox1" className="form-control" placeholder="Channel Name" onKeyPress={event => {
                                if (event.key === 'Enter') {
                                this.btnSearch()
                                }
                            }}/>
                            <button id="btnClick1" className="btn" onClick={this.btnSearch}><i className="bi bi-search"></i></button>
                        </div>
                    </div>
                </div>

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
                    ))}
                </div>
            </div>
            );
        }
    }
}
 
export default List;