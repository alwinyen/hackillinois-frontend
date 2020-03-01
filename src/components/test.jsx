import React from 'react'
import Slider from "react-slick";
import axios from 'axios';
import { Card, Icon } from 'semantic-ui-react'

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

    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    const w = window.innerWidth - 25;
    const h = window.innerHeight - 25; 

    return (
      <div>
        <div id = "login"><a href = "#">login</a></div>
        <h1
          style = {{
            textAlign: "center",
            paddingTop: "1vh",
            color: "white",
            fontFamily: "Odibee Sans",
            fontSize: "5rem"
          }}
        >
        Newsies</h1>
        <div
          style = {{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "25vh",
              marginBottom: "5vh"
          }}
        >
          <input 
            type = "text" 
            placeholder = "Search..."
            style = {{
              fontFamily: "Odibee Sans",
              backgroundColor: "transparent",
              width: "50vw",
              height: "5vh",
              border: "none",
              borderBottom: "0.2rem solid white",
              padding: "0.3rem",
              fontSize: "1.5rem",
              outline: "none"
            }}
          />
        </div>
      
        <Slider {...settings}>
          <div>
            <Card
              style = {{
                width: "50vw",
                marginRight: "25vw",
                marginLeft: "25vw",
                fontSize: "1.5rem",
                fontFamily: "Odibee Sans"
              }}
            >
              <Card.Content header='About Amy' className = "cards" style = {{fontFamily: "Odibee Sans!important"}}/>
              <Card.Content description={posts[0].summary} />
              <Card.Content extra>
                <Icon name='i cursor' />{posts[0].citations}
              </Card.Content>
            </Card>
          </div>
          <div>
            <Card
              style = {{
                width: "50vw",
                marginRight: "25vw",
                marginLeft: "25vw",
                fontSize: "1.5rem"
              }}
            >
              <Card.Content header='About Amy' />
              <Card.Content description={posts[0].summary} />
              <Card.Content extra>
                <Icon name='user' />4 Friends
              </Card.Content>
            </Card>
          </div>
          <div>
            <Card
              style = {{
                width: "50vw",
                marginRight: "25vw",
                marginLeft: "25vw",
                fontSize: "1.5rem",
              }}
            >
              <Card.Content header='About Amy' />
              <Card.Content description={posts[0].summary} />
              <Card.Content extra>
                <Icon name='user' />4 Friends
              </Card.Content>
            </Card>
          </div>
        </Slider>
      </div>
    );
  }
}


export default Example;