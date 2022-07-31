import styled from 'styled-components';
export const Ul = styled.ul`
list-style: none;
display: flex;
justify-content: right;
margin:20px 50px;
z-index: 15; 
  
li{
    padding: 18px 30px;
}
@media(max-width:768px) {
    margin: 0;
    position:fixed;
    background-color: #1565df;
    top: 0;
    right: 0;
    flex-direction: column;
    height:100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: all 0.3s linear;
      transform:${(props)=>(props.open?'translateX(0)':'translateX(100%)')}; 
      opacity:${(props)=>(props.open?'1':'0')}; 
  
    li{
        color: #fff
    }
}
`