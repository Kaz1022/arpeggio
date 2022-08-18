import styled from "styled-components";

export const Img = styled.img`
max-width: 100%;
height: 100%;
object-fit: cover;
`;

export const EventStyles = styled.div`
width: 100%;

.card{
  // display:flex;
  // flex-direction: column;
  // align-items:center;
  border: none;  
  padding: 0rem 5rem;
}
.eventCard{
  height: 100%;
  // max-height: 50vh;
  width: 100%;
  margin: 30px;
  padding:0;
  display:flex;
  flex-wrap:wrap;
  justify content: space-betweeen;
  align-items:center;
  border-radius: 3px;
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  background-color: #FFFFFF;
  box-shadow: 1px 3px 8px 0px rgba(148, 148, 148, 1);
}
.event-name{
  text-transform: uppercase;
  font-family: 'Oswald', sans-serif;
  font-size: 1.74rem;
}
.top{
  margin:15px 0px;
}

//LEFT
.left{
  // display: flex;
  // flex-direction: column;
  // justify-content: space-between;
  position: relative;
  padding: 1em 2em;
  height: 100%;
  flex:1.5;
}
.top{
  display:flex;
  flex-wrap:wrap;
  justify-content: space-between;
}
.heart-icon{
  position: absolute;
  left: 92%;
  bottom: 5%;
}
.event-details{
  display: flex;
  flex-direction:column;
  flex-wrap:wrap;
}
.details{
  display:flex;
  justify-content:space-between;
  padding-right: 8rem;
}
.spots{
  width: 50%;
  .spots-heading{
    font-family: 'Oswald', sans-serif;
    font-size: 1.4rem;
  }
}
.event-description{
  font-size: 1.2rem;
  margin: 30px 0px;
  line-height: 30px;
}
.instrument-icons{
  width: 75%;
  display:flex;
  justify content: space-around;

  .icons{
    display: flex;
}
.icon-container{
  width:100%;
  margin-right: 15px;

  .instr-icon{
  height:140px;
  width:auto;
  min-width:100%;
  margin-top: 30px;
  border-radius: 60%;
  box-shadow: 0.5px 0.5px 8px 1px #A9A9A9;
  &:hover{
      box-shadow: 1px 1px 5px 1px pink;
      outline: none;
  }
  }

}
.render-icon{
 margin-right: 30px;
}

}

//RIGHT
.right{
  position: relative;
  height: 100%;
  width:100%;
  flex:1;

  .timeago{
    background-color: rgba(187, 13, 190, 0.28);
    border-radius: 5px;
    font-size: 20px;
    color:white;
    font-family: 'Oswald', sans-serif;
    position: absolute;
    top:88.5%;
    right:78%;
  }
  .main_image{
    width: 100%;
    min-height: 50vh;
    object-fit: cover;
  }
  .edit-button{
    position: absolute;
    bottom:89%;
    right:1%;
  }
}
`;