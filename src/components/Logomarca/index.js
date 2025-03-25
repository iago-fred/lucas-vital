import styled from "styled-components";


function Logomarca (props){
    const Logo = styled.img`
        height: ${props.size};
        margin: ${props.margin};
    `
    return(
        <Logo src="../../assets/logo.svg"/>
    )
    
}

export default Logomarca