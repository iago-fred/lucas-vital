import styled from "styled-components";


function Logomarca ({size, margin, cor=true}){
    const Logo = styled.img`
        height: ${size};
        margin: ${margin};
    `
    const imagem = cor===true? "../../assets/logo.svg": "../../assets/logo-branco.svg"
    return(

        <Logo src={imagem}/>
    )
    
}

export default Logomarca