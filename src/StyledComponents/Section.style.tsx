import styled from "styled-components";

export const WrapperSection = styled.div`

padding: 100px;

& .SectionTitle .title{
    font-family: 'Oswald', sans-serif;
    font-weight: lighter;
    letter-spacing: 5px;
    font-size: 20px;
    color: #2B2B2B;
}
& .SectionTitle .purposeText{
    font-family: 'Oswald', sans-serif;
    font-size: 40px;
    color: #091D35;
    font-weight: 500;
}
@media (max-width: 768px) {
    padding: 10px;
    & .SectionTitle .title{
    font-family: 'Oswald', sans-serif;
    font-weight: lighter;
    letter-spacing: 3px;
    font-size: 15px;
    color: #2B2B2B;
}
}
`
