import styled from 'styled-components'

export const Div = styled.div`
width:2rem; 
height: 2rem;
position: fixed;   
display:none;
top: 40px;
right: 30px;
cursor: pointer;
z-index:20;
@media (max-width:768px) { 
    display: flex;
    justify-content:space-around;
    flex-direction:column;
    
}
div{
    margin-bottom: 5px;
    width:2rem;
    height:0.25rem;
    background:${(props)=>( props.open ?'#fff':'#1565df')};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.2s linear;
    &:nth-child(1){
        transform:${(props)=>( props.open ?'rotate(45deg)':'rotate(0)')}
    }
    &:nth-child(2){
        transform:${(props) => (props.open ? 'translateX(-100%)' : 'translateX(0)')};
        opacity:${(props) => (props.open ? '0' : '1')} ;
    }
    &:nth-child(3){
        transform:${(props)=>( props.open ?'rotate(-45deg)':'rotate(0)')}
    }
}
`