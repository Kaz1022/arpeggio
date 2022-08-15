import styled from 'styled-components';

//FAVOURITES & MYSESSIONS
export const Styles = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: center;

  .btn {
   font-weight: 600;
   margin-left: 0.5rem;
   padding: 8px 18px;
   background: #bb0dbe;
   color: #e2ef70;
   border: 1px solid #e2ef70;
  }
 }
`;

//USERS
export const UserStyles = styled.div`
.base-container {
  width: 100vw;
  height: 80vh;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  .header h1 {
    font-size: 3rem;
    font-family: "Oswald", sans-serif;
    margin-bottom: 2.5rem;
  }

.userCard{
  height: 50vh;
  width: 70%;
  margin: 50px;
  padding:0;
  display:flex;
  flex-wrap:wrap;
  justify content: space-betweeen;
  align-items:center;
  border-radius: 3px;
  font-family: 'Roboto', sans-serif;
  font-size: 1.2rem;
  background-color: #FFFFFF;
  box-shadow: 1px 3px 8px 0px rgba(148, 148, 148, 1);
}
.user-name{
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
  padding: 10px 25px;
  line-height: 38px;
  height: 100%;
  flex:1.5;
}
.top{
  display:flex;
  flex-wrap:wrap;
  justify-content: space-between;
}

.user-details{
  display: flex;
  flex-direction:column;
  flex-wrap:wrap;
  overflow: hidden;
}

.bio{
  overflow: hidden;
  text-overflow: ellipsis;
}

//RIGHT
.right{
  height: 100%;
  // width:100%;
  flex:1;
}

.bio{
  font-size: 1.2rem;
}

.edit-button{
  justify-content:flex-end;
}

.m-1{
  flex-direction: row-reverse;
  border: none;
}
`;