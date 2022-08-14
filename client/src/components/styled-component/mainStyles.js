import styled from "styled-components";

//MAIN PAGE
export const MainContainer = styled.div`
 position: relative;
 height: 75vh;
 width: 100%;

 p,
 button {
  position: absolute;
  color: white;
  font-family: 'Oswald', sans-serif;
 }

 p {
  font-size: 2.3rem;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
 }

 button {
  font-size: 1.3rem;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid white;
  border-radius: 3px;
  padding: 8px 18px;
  background: none;
  &:hover {
   background: #bb0dbe;
   color: #e2ef70;
   border: 1px solid #e2ef70;
  }
 }

 .features,
 .artists {
  padding: 30px;
  height: min-content;
 }

 .features,
 .users-container{
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  line-height: 30px;
 }

 .features {
  background-color: #e2ef70;
 }

 .artists {
  background-color: #ffe7ff;
 }

 h4{
  text-align:center;
  font-family: 'Oswald', sans-serif;
  font-size: 2rem;
  letter-spacing: 1px;
  font-weight:bold;
 }

 .connect,
 .collaborate,
 .learn,
 .create,
 .user1,
 .user2,
 .user3 {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  margin: 10px;
  padding: 23px 10px 23px 10px;
  border-radius: 10px;
  box-shadow: 1px 3px 8px 0px rgba(148, 148, 148, 1);
 }
 .connect,
 .collaborate,
 .learn,
 .create {
  height: auto;
  width: 21rem;
 }
 .user1,
 .user2,
 .user3 {
  height: auto;
  width: 30rem;
  padding: 3rem;
  text-align: center;
 }

 .feature {
  font-family: 'Oswald', sans-serif;
  margin: 15px 0px 15px 0px;
  font-size: 1.5rem;
 }
 .description {
  font-family: 'Roboto', sans-serif;
  font-size: 1.3rem;
 }
`;

//ARTISTS.JS
export const ArtistsContainer = styled.div`
position: relative;
height: auto;
width: 100%;

p,
button {
 position: absolute;
 color: white;
 font-family: 'Oswald', sans-serif;
}

p {
 font-size: 2.3rem;
 top: 45%;
 left: 50%;
 transform: translate(-50%, -50%);
}

button {
 font-size: 1.3rem;
 top: 60%;
 left: 50%;
 transform: translate(-50%, -50%);
 border: 1px solid white;
 border-radius: 3px;
 padding: 8px 18px;
 background: none;
 &:hover {
  background: #bb0dbe;
  color: #e2ef70;
  border: 1px solid #e2ef70;
 }
}

.features,
.artists {
 padding: 30px;
 height: min-content;
}

.features,
.users-container{
 display: flex;
 justify-content: space-around;
 align-items: center;
 flex-wrap: wrap;
 line-height: 30px;
}

.features {
 background-color: #e2ef70;
}

.artists {
 background-color: #ffe7ff;
}

h4{
 text-align:center;
 font-family: 'Oswald', sans-serif;
 font-size: 2rem;
 letter-spacing: 1px;
 font-weight:bold;
}

.connect,
.collaborate,
.learn,
.create,
.user1,
.user2,
.user3 {
 display: flex;
 flex-direction: column;
 align-items: center;
 background: white;
 margin: 10px;
 padding: 23px 10px 23px 10px;
 border-radius: 10px;
 box-shadow: 1px 3px 8px 0px rgba(148, 148, 148, 1);
}
.connect,
.collaborate,
.learn,
.create {
 height: auto;
 width: 21rem;
}
.user1,
.user2,
.user3 {
 height: 45vh;
 width: 30rem;
 padding: 3rem;
 text-align: center;
}

.feature {
  font-family: 'Oswald', sans-serif;
  margin: 15px 0px 15px 0px;
  font-size: 1.5rem;
 }
 .description {
 height: 100%;
 display:flex;
 align-items: center;
 // border: 3px solid blue;
 font-family: 'Roboto', sans-serif;
 font-size: 1.3rem;
}
`;

//FEATURES.JS
export const FeaturesContainer = styled.div`
 position: relative;
 height: auto;
 width: 100%;

 p,
 button {
  position: absolute;
  color: white;
  font-family: 'Oswald', sans-serif;
 }

 p {
  font-size: 2.3rem;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
 }

 button {
  font-size: 1.3rem;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid white;
  border-radius: 3px;
  padding: 8px 18px;
  background: none;
  &:hover {
   background: #bb0dbe;
   color: #e2ef70;
   border: 1px solid #e2ef70;
  }
 }

 .features,
 .artists {
  padding: 30px;
  height: min-content;
 }

 .features,
 .users-container{
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  line-height: 30px;
 }

 .features {
  background-color: #e2ef70;
 }

 .artists {
  background-color: #ffe7ff;
 }

 h4{
  text-align:center;
  font-family: 'Oswald', sans-serif;
  font-size: 2rem;
  letter-spacing: 1px;
  font-weight:bold;
 }

 .connect,
 .collaborate,
 .learn,
 .create,
 .user1,
 .user2,
 .user3 {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  margin: 10px;
  padding: 23px 10px 23px 10px;
  border-radius: 10px;
  box-shadow: 1px 3px 8px 0px rgba(148, 148, 148, 1);
 }
 .connect,
 .collaborate,
 .learn,
 .create {
  height: auto;
  width: 21rem;
 }
 .user1,
 .user2,
 .user3 {
  height: auto;
  width: 30rem;
  padding: 3rem;
  text-align: center;
 }

 .feature {
  font-family: 'Oswald', sans-serif;
  margin: 15px 0px 15px 0px;
  font-size: 1.5rem;
 }
 .description {
  font-family: 'Roboto', sans-serif;
  font-size: 1.3rem;
 }
`;