import React, { Component, useEffect, useState } from "react";
import {BrowserRouter as Router , Route , Switch , Link } from 'react-router-dom';



class Home extends Component {

    constructor (){
super();
this.state = {
    title1:"Vallabhbhai Patel",
    title2:"Mahatma Gandhi",
    title3:"Nelson Mandela",
    title4:"Mother Teresa ",
    title5:"Jawaharlal Nehru",
    title6:"Subhas Chandra Bose",
    title7:"The Joy Luck Club (novel)",
    title8:"The Top Twenty",
    title9:"DAVID MITCHELL",
    title0:"Lord Vishnu's Love Handles",

    details1:"Sardar Vallabhbhai  popularly known as Sardar Patel, was an Indian statesman. He served as the first Deputy Prime Minister of India. ",
    details2:"Mohandas Karamchand Gandhi anti-colonial nationalist,[4] and political ethicist,[5",
    details3:"Nelson Rolihlahla Mandela  18 July 1918 – 5 December 2013) was a South African anti-apartheid revolutionary, political leader and philanthropist who served as President of South Africa from 1994 to 1999. He was the country's first black head of state and the first elected in a fully representative democratic election",
    details4:"Mother Mary Teresa Bojaxhiu  26 August 1910 – 5 September 1997), honoured in the Catholic Church as Saint Teresa of Calcutta,",
    details5:"Jawaharlal Nehru  14 November 1889 – 27 May 1964) was an Indian independence activist and, subsequently,",
    details6:"Subhas Chandra Bose  23 January 1897 – 18 August 1945)[h] was an Indian nationalist whose defiant patri",
    details7:"The Joy Luck Club is a 1989 novel written by Amy Tan. It focuses on four Chinese American immigrant families in San Francisco who start a club known as The Joy Luck Club, playing the Chinese game of mahjong for money while feasting on a variety of foods.",
    details8:"There are some moments from A Visit From the Goon Squad that I won’t forget. In one chapter, a former PR hotshot named Dolly is tasked with reviving the public image of an African dictator known as “The General” with the help of a B-list actress named Kitty Jackson. Kitty’s job is to stand next to The General in a photo, but she ends up asking too many questions about a genocide and gets thrown into prison",
    details9:"It is easier to conjure the intellectual-literary atmosphere of an era when it is 30 years’ past than when it is a mere decade ago. It is hard to see 2010 right now, as we wait for time and the canon to true the lens, but I have a very clear sense-memory of revelation and exhilaration as I sped through David Mitchell’s epic",
    details0:"His second novel some sources claim it's his first, but the publication history is a bit blurred due to his self-publishing at least one of the books before Simon &",
}
    }
    render() {
        return (
            <>
    <div style={{backgroundColor:"red" ,margin:"10px" ,padding:"10px"}}>    
            <div  style={{backgroundColor:"white" , width:"70%",margin:"10px 200px 10px 200px", padding:"10px"}}>
                <h1><Link  style={{color:"black" , width:"100%", textDecoration:"none"}} to={`/nextpage/${this.state.title1}/${this.state.details1}/`} >{this.state.title1} </Link></h1>
                <h5>{this.state.details1} </h5>
           </div>
           <div style={{backgroundColor:"white" , width:"70%",margin:"10px 200px 10px 200px", padding:"10px"}}>
                <h1><Link  style={{color:"black" , width:"100%", textDecoration:"none"}} to={`/nextpage/${this.state.title2}/${this.state.details2}`} >{this.state.title2}</Link></h1>
                <h5>{this.state.details2} </h5>
           </div>
           <div style={{backgroundColor:"white" , width:"70%",margin:"10px 200px 10px 200px", padding:"10px"}}>
                <h1><Link  style={{color:"black" , width:"100%", textDecoration:"none"}} to={`/nextpage/${this.state.title3}/${this.state.details3}`} >{this.state.title3}</Link></h1>
                <h5>{this.state.details3} </h5>
           </div>
           <div style={{backgroundColor:"white" , width:"70%",margin:"10px 200px 10px 200px", padding:"10px"}}>
                <h1><Link  style={{color:"black" , width:"100%", textDecoration:"none"}} to={`/nextpage/${this.state.title4}/${this.state.details4}`} >{this.state.title4}</Link></h1>
                <h5>{this.state.details4} </h5>
           </div>
           <div style={{backgroundColor:"white" , width:"70%",margin:"10px 200px 10px 200px", padding:"10px"}}>
                <h1><Link  style={{color:"black" , width:"100%", textDecoration:"none"}} to={`/nextpage/${this.state.title5}/${this.state.details5}`} >{this.state.title5}</Link></h1>
                <h5>{this.state.details5} </h5>
           </div>
           <div style={{backgroundColor:"white" , width:"70%",margin:"10px 200px 10px 200px", padding:"10px"}}>
                <h1><Link  style={{color:"black" , width:"100%", textDecoration:"none"}} to={`/nextpage/${this.state.title6}/${this.state.details6}`} >{this.state.title6}</Link></h1>
                <h5>{this.state.details6} </h5>
           </div>
           <div style={{backgroundColor:"white" , width:"70%",margin:"10px 200px 10px 200px", padding:"10px"}}>
                <h1><Link  style={{color:"black" , width:"100%", textDecoration:"none"}} to={`/nextpage/${this.state.title7}/${this.state.details7}`} >{this.state.title7}</Link></h1>
                <h5>{this.state.details7} </h5>
           </div>
           <div style={{backgroundColor:"white" , width:"70%",margin:"10px 200px 10px 200px", padding:"10px"}}>
                <h1><Link  style={{color:"black" , width:"100%", textDecoration:"none"}} to={`/nextpage/${this.state.title8}/${this.state.details8}`} >{this.state.title8}</Link></h1>
                <h5>{this.state.details8} </h5>
           </div>
           <div style={{backgroundColor:"white" , width:"70%",margin:"10px 200px 10px 200px", padding:"10px"}}>
                <h1><Link  style={{color:"black" , width:"100%", textDecoration:"none"}} to={`/nextpage/${this.state.title9}/${this.state.details9}`} >{this.state.title9}</Link></h1>
                <h5>{this.state.details9} </h5>
           </div>
           <div style={{backgroundColor:"white" , width:"70%",margin:"10px 200px 10px 200px", padding:"10px"}}>
                <h1><Link  style={{color:"black" , width:"100%", textDecoration:"none"}} to={`/nextpage/${this.state.title0}/${this.state.details0}`} >{this.state.title0}</Link></h1>
                <h5>{this.state.details0} </h5>
           </div>
           <div  style={{backgroundColor:"white" , width:"70%",margin:"10px 200px 10px 200px", padding:"10px"}}>
                <h1><Link  style={{color:"black" , width:"100%", textDecoration:"none"}} to={`/nextpage/${this.state.title1}/${this.state.details1}`} >{this.state.title1}</Link></h1>
                <h5>{this.state.details1} </h5>
           </div>
           <div style={{backgroundColor:"white" , width:"70%",margin:"10px 200px 10px 200px", padding:"10px"}}>
                <h1><Link  style={{color:"black" , width:"100%", textDecoration:"none"}} to={`/nextpage/${this.state.title2}/${this.state.details2}`} >{this.state.title2}</Link></h1>
                <h5>{this.state.details2} </h5>
           </div>
           <div style={{backgroundColor:"white" , width:"70%",margin:"10px 200px 10px 200px", padding:"10px"}}>
                <h1><Link  style={{color:"black" , width:"100%", textDecoration:"none"}} to={`/nextpage/${this.state.title3}/${this.state.details3}`} >{this.state.title3}</Link></h1>
                <h5>{this.state.details3} </h5>
           </div>
           <div style={{backgroundColor:"white" , width:"70%",margin:"10px 200px 10px 200px", padding:"10px"}}>
                <h1><Link  style={{color:"black" , width:"100%", textDecoration:"none"}} to={`/nextpage/${this.state.title4}/${this.state.details4}`} >{this.state.title4}</Link></h1>
                <h5>{this.state.details4} </h5>
           </div>
           <div style={{backgroundColor:"white" , width:"70%",margin:"10px 200px 10px 200px", padding:"10px"}}>
                <h1><Link  style={{color:"black" , width:"100%", textDecoration:"none"}} to={`/nextpage/${this.state.title5}/${this.state.details5}`} >{this.state.title5}</Link></h1>
                <h5>{this.state.details5} </h5>
           </div>
           <div style={{backgroundColor:"white" , width:"70%",margin:"10px 200px 10px 200px", padding:"10px"}}>
                <h1><Link  style={{color:"black" , width:"100%", textDecoration:"none"}} to={`/nextpage/${this.state.title6}/${this.state.details6}`} >{this.state.title6}</Link></h1>
                <h5>{this.state.details6} </h5>
           </div>
           <div style={{backgroundColor:"white" , width:"70%",margin:"10px 200px 10px 200px", padding:"10px"}}>
                <h1><Link  style={{color:"black" , width:"100%", textDecoration:"none"}} to={`/nextpage/${this.state.title7}/${this.state.details7}`} >{this.state.title7}</Link></h1>
                <h5>{this.state.details7} </h5>
           </div>
           <div style={{backgroundColor:"white" , width:"70%",margin:"10px 200px 10px 200px", padding:"10px"}}>
                <h1><Link  style={{color:"black" , width:"100%", textDecoration:"none"}} to={`/nextpage/${this.state.title8}/${this.state.details8}`} >{this.state.title8}</Link></h1>
                <h5>{this.state.details8} </h5>
           </div>
           <div style={{backgroundColor:"white" , width:"70%",margin:"10px 200px 10px 200px", padding:"10px"}}>
                <h1><Link  style={{color:"black" , width:"100%", textDecoration:"none"}} to={`/nextpage/${this.state.title9}/${this.state.details9}`} >{this.state.title9}</Link></h1>
                <h5>{this.state.details9} </h5>
           </div>
           <div style={{backgroundColor:"white" , width:"70%",margin:"10px 200px 10px 200px", padding:"10px"}}>
                <h1><Link  style={{color:"black" , width:"100%", textDecoration:"none"}} to={`/nextpage/${this.state.title0}/${this.state.details0}`} >{this.state.title0}</Link></h1>
                <h5>{this.state.details0} </h5>
           </div>

    </div>
    </>
        );
    }
}



export default Home;
