import React, {useState, useEffect} from 'react'
import Slider from "react-slick";
import { Card, Icon } from 'semantic-ui-react'
import { BounceLoader } from "react-spinners";
import axios from 'axios'
import { css } from "@emotion/core";

class Home extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      search: "virus",
      searchNum: 5,
      result: [],
      loading: false
    }
  }
  
  componentWillMount(){
    document.addEventListener("keydown", this.handleKeyDown.bind(this))
  }

  handleKeyDown(e) {
    if(e.key == "Enter") {
      this.handleSubmit()
    } 
   }

  handleSearchChange(e) {
    this.setState({
      ...this.state,
      search: e.target.value,
    })
  }
 handleSubmit = () => {
    this.setState({
      ...this.state,
      loading: true
    })

    const outsideThis = this

    axios.post('http://18.216.28.55:5000/api?query=' + this.state.search +'&num=' + this.state.searchNum)
    .then(function (response) {
      // handle success
      console.log(response);

      outsideThis.setState({
        ...outsideThis.state,
        result: response.data.sources
      })
      outsideThis.setState({
        ...outsideThis.state,
        loading: false
      })
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
  }
  

  render() {
    const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
    `;

      
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
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
              height: "20vh",
              marginBottom: "-3vh"
          }}
        >
          <input 
            type = "text" 
            placeholder = "Search..."
            style = {{
              fontFamily: "Odibee Sans",
              backgroundColor: "transparent",
              width: "50.5vw",
              height: "5vh",
              border: "none",
              borderBottom: "0.2rem solid white",
              padding: "0.1rem",
              fontSize: "1.5rem",
              outline: "none",
              marginRight: "-9vh"
            }}
            onChange = {this.handleSearchChange.bind(this)}
          />
            <button id = "submitBtn" onClick={this.handleSubmit.bind(this)}> Submit ↵</button>
        </div>
      <Slider {...settings}>
      {
      this.state.loading ?
      <BounceLoader
          css={override}
          size={150}
          //size={"150px"} this also works
          color={"#FFF"}
          loading={this.state.loading}
        />
      :
      this.state.result.length > 0 ?
        this.state.result.map((source) => {
          return(
            <div>
            <Card
              style = {{
                width: "50vw",
                marginRight: "25vw",
                marginLeft: "25vw",
                fontSize: "1.5rem",
                fontFamily: "Odibee Sans"
              }}
              key = {source._id}
            >
              <a href = "#"><Card.Content header={source.title} className = "cards" style = {{fontFamily: "Odibee Sans!important"}}/></a>
              <Card.Content description={source.text.length <= 2000 ? source.text : (source.text.substring(0,2000)).substring(0, source.text.substring(0,2000).lastIndexOf(" ")) + "..."} />
              <Card.Content extra>
                {source.citation}
              </Card.Content>
            </Card>
          </div>
          )
        }) : ""
      }
      </Slider>
      </div>
    );
  }
}


export default Home;