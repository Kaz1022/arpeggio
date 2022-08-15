import styled from "styled-components";

export const EventFilterStyles = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: center;

 .form {
  margin: 2rem 13rem;
  display: flex;
  justify-content: center;

  .form-select{
    &:focus {
      outline: none;
      box-shadow: 0px 0px 4px 0.01px #b819a2b2;
    }
  }

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

export const EventListStyles = styled.div`
 .event {
  background: #fcfcfc;
 }
`;