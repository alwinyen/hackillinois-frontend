import React, {useState} from 'react';
import Cube from "react-cube-navigation";

const images = [
  "https://images.unsplash.com/photo-1565371557106-c2abcc6fb36a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
  "https://images.unsplash.com/photo-1565361849078-294849288ced?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
  "https://images.unsplash.com/photo-1565279799937-b397e6483124?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=619&q=80",
  "https://images.unsplash.com/photo-1565264216052-3c9012481a1f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
  "https://images.unsplash.com/photo-1565274952013-13cecde5c8b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
  "https://images.unsplash.com/photo-1565287753977-e94d0227c640?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=633&q=80",
  "https://images.unsplash.com/photo-1565340076861-7a6667b36072?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80",
  "https://images.unsplash.com/photo-1565259901762-b8d797c6f887?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
];

const titles = [
  "Title 1",
  "Title 2",
  "Title 3",
  "Title 4",
  "Title 5",
  "Title 6",
  "Title 7",
  "Title 8"
];

const summaries = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
];

const links = [
  "Link 1",
  "Link 2",
  "Link 3",
  "Link 4",
  "Link 5",
  "Link 6",
  "Link 7",
  "Link 8"
];

const citations = [
  "Dean, Cornelia. \"Executive on a Mission: Saving the Planet.\" The New York Times, 22 May 2007, www.nytimes.com/2007/05/22/science/earth/22ander.html?_r=0. Accessed 29 May 2019.Link 1",
  "Dean, Cornelia. \"Executive on a Mission: Saving the Planet.\" The New York Times, 22 May 2007, www.nytimes.com/2007/05/22/science/earth/22ander.html?_r=0. Accessed 29 May 2019.Link 1",
  "Dean, Cornelia. \"Executive on a Mission: Saving the Planet.\" The New York Times, 22 May 2007, www.nytimes.com/2007/05/22/science/earth/22ander.html?_r=0. Accessed 29 May 2019.Link 1",
  "Dean, Cornelia. \"Executive on a Mission: Saving the Planet.\" The New York Times, 22 May 2007, www.nytimes.com/2007/05/22/science/earth/22ander.html?_r=0. Accessed 29 May 2019.Link 1",
  "Dean, Cornelia. \"Executive on a Mission: Saving the Planet.\" The New York Times, 22 May 2007, www.nytimes.com/2007/05/22/science/earth/22ander.html?_r=0. Accessed 29 May 2019.Link 1",
  "Dean, Cornelia. \"Executive on a Mission: Saving the Planet.\" The New York Times, 22 May 2007, www.nytimes.com/2007/05/22/science/earth/22ander.html?_r=0. Accessed 29 May 2019.Link 1",
  "Dean, Cornelia. \"Executive on a Mission: Saving the Planet.\" The New York Times, 22 May 2007, www.nytimes.com/2007/05/22/science/earth/22ander.html?_r=0. Accessed 29 May 2019.Link 1",
  "Dean, Cornelia. \"Executive on a Mission: Saving the Planet.\" The New York Times, 22 May 2007, www.nytimes.com/2007/05/22/science/earth/22ander.html?_r=0. Accessed 29 May 2019.Link 1"
];


export function Example() {
  const [index, setIndex] = React.useState(0);

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
          index={index}
          onChange={i => setIndex(i)}
          width={w > 600 ? 600 : w}
          height={h > 400 ? 400 : h}
          lockScrolling
          hasNext={i => i < images.length - 1}
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
                <img src = "./images/star.svg"/>
                <h1>
                  <a href = {links[i]}>{titles[i]}</a>
                </h1>
                <p
                  style = {{
                    fontSize: "1rem"
                  }}
                >
                  {citations[i]}
                </p>
                <p>{summaries[i]}</p>
                <a href = {links[i]}>Visit Source</a>
              </div>
            );
          }}
        />
      </div>
    </div>
  );
}


export default Example;