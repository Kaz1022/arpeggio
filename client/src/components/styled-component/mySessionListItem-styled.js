import styled from "styled-components";

export const Img = styled.img`
max-width: 100%;
height: 100%;
object-fit: cover;
`;

export const EventStyles = styled.div`
.card{
  display:flex;
  flex-direction: column;
  align-items:center;
  border: none;  
  padding: 0rem 5rem;
}
.eventCard{
  height: fit-content
  // max-height: 90vh;
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
  padding-right: 10rem;
}
.spots-heading{
  font-family: 'Oswald', sans-serif;
  font-size: 1.4rem;
}
.event-description{
  font-size: 1.2rem;
  margin: 30px 0px;
  line-height: 30px;
}
.instrument-icons{
  width: 50%;
  display:flex;
  justify content: space-around;
}

//RIGHT
.right{
  flex-direction: column;
  align-content: space-between;
  padding: 0;
  margin: 0;
  flex:1;
}

.edit-button{

}

`;