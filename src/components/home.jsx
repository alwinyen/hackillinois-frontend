import React, {useState, useEffect} from 'react'
import Slider from "react-slick";
import { Card, Icon } from 'semantic-ui-react'
import { BounceLoader } from "react-spinners";
import useAxios from 'axios-hooks'
import { css } from "@emotion/core";

function Home() {

  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;

  const [ state, setState ] = useState({
    index: 1,
    search: "virus",
    searchNum: 5,
    result: [],
    random: 0
  });

  const [{ data, loading, error }, refetch] = useAxios(
    {
      method: 'post',
      url: 'http://18.216.28.55:5000/api?query=' + state.search +'&num=' + state.searchNum
    }
  )
  
  useEffect( () => {
    const loadData = async () => {
      if(!loading) {
        setState({...state, result: data})
      }
    };
    loadData()
  }, [state.random]);

  function handleSearchChange(e) {
    setState({
      ...state,
      search: e.target.value,
    })
  }

  function handleSubmit() {
    setState({
      ...state,
      random: state.random + 1,
    })
  }

  
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
            onChange = {handleSearchChange}
          />
          <button id = "submitBtn" onClick={handleSubmit}> Submit ↵</button>
        </div>
        { loading ? 
        <BounceLoader
          css={override}
          size={150}
          //size={"150px"} this also works
          color={"#FFF"}
          loading={loading}
        />
        : 
        <Slider {...settings}>
          {data.sources.map((source) => {
            console.log(source)
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
                    <Card.Content header={source.title} className = "cards" style = {{fontFamily: "Odibee Sans!important"}}/>
                    <Card.Content description={source.text.length <= 2000 ? source.text : (source.text.substring(0,2000)).substring(0, source.text.substring(0,2000).lastIndexOf(" ")) + "..."} />
                    {console.log(source.text)}
                    <Card.Content extra>
                      {source.citations}
                    </Card.Content>
                  </Card>
                </div>
              )
            })}
        </Slider>
      }
      </div>
    );
}


export default Home;