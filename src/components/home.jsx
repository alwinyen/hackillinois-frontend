import React, {useState, useEffect} from 'react'
import Slider from "react-slick";
import { Card, Icon, Popup } from 'semantic-ui-react'
import { BounceLoader } from "react-spinners";
import axios from 'axios'
import { css } from "@emotion/core";
import copy from "copy-to-clipboard";
import { fadeIn } from 'react-animations'
import Radium, {StyleRoot} from 'radium';

const styles = {
  fadeIn: {
    animation: 'x 8s',
    animationName: Radium.keyframes(fadeIn, 'fadeIn')
  }
}

class Home extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      search: "virus",
      searchNum: 5,
      result: [],
      loading: false,
      textToCopy: ""
    }
    this.handleCopy = this.handleCopy.bind(this);
  }

  handleCopy() {
    copy(this.state.textToCopy);
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

    axios.post('https://f05cbd5c.ngrok.io/api?query=' + this.state.search +'&num=' + this.state.searchNum)
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
        <div id = "login"></div>
        <StyleRoot>
          <div className="test" style={styles.fadeIn}>
          <h1 id = "tldr">TL;DR</h1>
          </div>
        </StyleRoot>        

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
              caretColor: "white",
              fontFamily: "Odibee Sans",
              backgroundColor: "transparent",
              width: "50.5vw",
              height: "5vh",
              border: "none",
              borderBottom: "0.2rem solid white",
              padding: "0.1rem",
              fontSize: "2rem",
              outline: "none",
              marginRight: "-9vh"
            }}
            onChange = {this.handleSearchChange.bind(this)}
          />
            <button id = "submitBtn" onClick={this.handleSubmit.bind(this)}> Submit <span>↵</span></button>
        </div>
      <Slider {...settings}>
      {
      this.state.loading ?
      <BounceLoader
          css={override}
          size={200}
          //size={"150px"} this also works
          color={"#FFF"}
          loading={this.state.loading}
        />
      :
      this.state.result.length > 0 ?
        this.state.result.filter(source => source.text.length > 20).map((source) => {
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
              <a a target = "_blank" id = "cardLink" href = {source.url}><Card.Content header={source.title} className = "cards" style = {{fontFamily: "Odibee Sans!important"}}/></a>
              <Card.Content description={source.text.length <= 1500 ? source.text : (source.text.substring(0,2000)).substring(0, source.text.substring(0,1200).lastIndexOf(" ")) + "..."} />
              
              <Popup content='Citation Copied' position='right center' on = "click" 
                mouseLeaveDelay={0} basic style = {{cursor: "pointer"}} trigger={
                <Card.Content extra onClick={() => {this.setState({textToCopy: source.citation}); this.handleCopy()}}>
                  {source.citation}
                </Card.Content>
              }/>
             </Card>
          </div>
          )
        }) :
        <div id="introWrapper">
          <p id="intro">We make research<strong>&nbsp;faster&nbsp;</strong>&nbsp;and&nbsp;<strong>&nbsp;easier!</strong></p>
          
        </div>
      }
      </Slider>
      </div>
    );
  }
}


export default Home;