import React, {useState, useEffect} from 'react';
import Cube from "react-cube-navigation";
import axios from 'axios';


const posts = [
  {
    images: "https://images.unsplash.com/photo-1565371557106-c2abcc6fb36a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    title:  "Title 1",
    summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    link: "Link 1",
    citations: "Dean, Cornelia. \"Executive on a Mission: Saving the Planet.\" The New York Times, 22 May 2007, www.nytimes.com/2007/05/22/science/earth/22ander.html?_r=0. Accessed 29 May 2019.Link 1"
  },
  {
    images: "https://images.unsplash.com/photo-1565371557106-c2abcc6fb36a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    title:  "Title 2",
    summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    link: "Link 2",
    citations: "Dean, Cornelia. \"Executive on a Mission: Saving the Planet.\" The New York Times, 22 May 2007, www.nytimes.com/2007/05/22/science/earth/22ander.html?_r=0. Accessed 29 May 2019.Link 1"
  }
]

class Example extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      index: 1
    }
  }

  componentDidMount() {
    axios.post('http://18.216.28.55:5000/api?query=virus&num=2', {
      firstName: 'Fred',
      lastName: 'Flintstone'
    })
    .then(function (data) {
      console.log(data);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  render() {

    const w = window.innerWidth - 25;
    const h = window.innerHeight - 25; 

    return (
      <div>
        <div id = "login"><a href = "#">login</a></div>
        <div
          style = {{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "25vh",
              marginBottom: "-5vh"
          }}
        >
          <input 
            type = "text" 
            placeholder = "Search..."
            style = {{
              fontFamily: "Odibee Sans",
              backgroundColor: "transparent",
              width: "40vw",
              height: "5vh",
              border: "none",
              borderBottom: "0.2rem solid white",
              padding: "0.3rem",
              fontSize: "1.5rem",
              outline: "none"
            }}
          />
        </div>
  
        <div
          style = {{
              color: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "5vh",
              marginBottom: "10vh"
          }}
        >
          <input type="radio" id="apa" name="citationStyle" value="apa"/>
          <label 
            for="apa"
            style = {{
              marginRight: "1%"
            }}
          >
            APA
          </label>
          <input type="radio" id="mla" name="citationStyle" value="mla"/>
          <label 
            for="mla"
            style = {{
              marginRight: "1%"
            }}
          >
            MLA
          </label>
          <input type="radio" id="chicago" name="citationStyle" value="chicago"/>
          <label 
            for="chicago"
            style = {{
              marginRight: "1%"
            }}
          >
            Chicago
          </label>
        </div>
  
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "50vh"
          }}
        >
          <Cube
            index={this.state.index}
            onChange={i => console.log("AAAA:"+i)}
            width={w > 600 ? 600 : w}
            height={h > 400 ? 400 : h}
            lockScrolling
            hasNext={i => i < posts.length - 1 }
            renderItem={(i, active) => {
              return (
                <div
                  style={{
                    backgroundColor: "rgba(248,246,245,0.95)",
                    flex: 1,
                    borderRadius: "0.5rem",
                    textAlign: "center",
                    boxShadow: "10px 10px 10px rgba(0,0,0,0.2)",
                    padding: "1rem"
                  }}
                >
                  {console.log(i)}
                  <img src = "./images/star.svg"/>
                  <h1>
                    <a href = {posts[0].link}>{posts[0].title}</a>
                  </h1>
                  <p
                    style = {{
                      fontSize: "1rem"
                    }}
                  >
                    {posts[0].citations}
                  </p>
                  <p>{posts[0].summary}</p>
                  <a href = {posts[0].links}>Visit Source</a>
                </div>
              );
            }}
          />
        </div>
      </div>
    );
  }
}


export default Example;