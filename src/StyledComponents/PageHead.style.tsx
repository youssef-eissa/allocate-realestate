import styled from "styled-components";

type BackGroundImg = {
    background: string
}
export const StyledPageHead = styled.div<BackGroundImg>`
background-image: url(${props => props.background}) ;
background-size: cover;
height: 300px;
position: relative;
& .overlay{
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #0b244752;
    top: 0;
    left: 0;

}
& .title{
    font-family: 'Oswald', sans-serif;
    color: white;
    font-size: 18px;
    letter-spacing: 5px;
    position:relative;
    z-index: 1;
    font-weight:100;
    text-transform: uppercase;
}
& h2{
    font-family: 'Oswald', sans-serif;
    color: white;
    font-size: 50px ;
    font-weight: 500;
    position:relative;
    z-index: 1;
}
@media  (max-width: 600px) {
    & h2{
    font-size: 30px ;
}
}
`