// import React, { Component } from 'react';
// import '../index.css';


// class Sort extends Component {

    // constructor() {
    //     super();
    //     this.state = {
    //         search: ''
    //     };
    // }

    // updateSearch(event){
    //     this.setState({search: event.target.value.substr(0,20)});
    // }

    // render(){
    //     return (
    //         <div>
                
    //         </div>
    //     )
    // }

    
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         items: [],
    //         isLoaded: false,
    //     };
        
    //     this.handleSubmit = this.handleSubmit.bind(this);
    //     this.handleSubmitCategory = this.handleSubmitCategory.bind(this);
    // }

    // handleSubmitCategory(event){
    //     alert("Your select value is: " + this.state.category);
    //     event.preventDefault();
    // }

    // handleChange = event => {
    //     this.setState({ value: event.target.value });
    // };

    // handleChangeCategory = event => {
    //     this.setState({ category: event.target.value });
    // };

    // getUnique(arr, comp){
    //     const unique = arr
    //     .map(e => e[comp])

    //     .map((e, i, final) => final.indexOf(e) === i && i)

    //     .filter(e => arr[e])

    //     .map(e => arr[e]);

    // return unique;
    // }

    // componentDidMount(){
    //     fetch('https://contenthub-api.eco.astro.com.my/channel/all.json')
    //         //use es6 arrow function to not lose context of 'this'
    //         .then(res => res.json())
    //         .then(json => {
    //             this.setState({
    //                 isLoaded: true,
    //                 items: json.response,
    //             })
    //         }).catch(console.log);
    // }

    // render() { 

    //     var { isLoaded, items } = this.state;

    //     const uniqueItem = this.getUnique(this.state);


    //     return (
    //         <div>
    //             <form onSubmit={this.handleSubmitCategory}>
    //                 <label>
    //                 Looping through category from JSON
    //                     <select value={items.category}
    //                         onChange={this.handleChangeCategory}
    //                     >
    //                         {uniqueItem.map(item =>{
    //                             <option key={item.id} value={item.category}>
    //                             </option>
    //                         })}
    //                     </select>
    //                 </label>
    //                 <input type="submit" value ="Submit" />
    //                 <div>  
    //                     {items.map(item =>{
    //                         <div>
    //                             {item.title}
    //                             <br />
    //                         </div>
    //                     })}
    //                 </div>
    //             </form>
    //         </div>
    //     );
    // }
// }
 
// export default Sort;