import styled from 'styled-components';

const StyledNavbar = styled.div`
    margin-bottom: 1rem;
        
li {
    margin-bottom: 1rem;
    color: #fff;
 }
 
 nav {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  list-style: none;
  text-align: center;
  background-color: #4361ee;
  color: #fff;
  padding: 1rem;
 }
 
 ul{
    display: flex;
  flex-direction: column;
  list-style: none;
 }

 h1 {
    margin-bottom: 1rem;
  color: #fff;
  text-decoration: none;
  font-size: 2.44rem;
  text-align: center;
 }

 a {
        color: #fff;
        text-decoration: none;
    }

 @media screen and (min-width: 768px) {
    nav {
        flex-direction: row;
    justify-content: space-between;
    align-items: center;
    }

    h1{
        margin-bottom: 0;
    }

    ul {
        flex-direction: row;
    }

    li {
        margin: 0 1rem;
        color: #fff;
        }

    a {
        color: #fff;
        text-decoration: none;
    }
}
`;

export default StyledNavbar;