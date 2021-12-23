
import HeaderInfluenciador from "../../../../assets/img/email/header-influenciador.svg";
import { Button, TextField } from "@mui/material";
import {Body, Topo, BoxCard, StyleCard, TitleLogin, ButtonStyled} from "./email_styles"


const Email = () => {

const titleEmail = "Login";
const buttonContinue = "Continuar";

return (
<>
    <Body>
        <Topo src={HeaderInfluenciador} alt="banner"
            style={{paddingBottom: "90px", boxShadow: "box-shadow: inset, 0 0 1em black"}} />
        <BoxCard>
            <StyleCard>
                <form style={{ width: "450px" }}>
                    <TitleLogin>{titleEmail}</TitleLogin>
                    <TextField id="email" label="E-mail" variant="standard" fullWidth margin="normal" />
                    <TextField id="password" label="Senha" variant="standard" autoComplete="on" fullWidth
                        margin="normal" />
                    <TextField id="confirmPassword" label="Confirmar senha" variant="standard" fullWidth
                        margin="normal" />
                    <ButtonStyled>
                        <Button variant="contained" type="submit" style={{backgroundColor: "#04C6FB", 
                    color: "#000000", 
                    fontWeight: "bold",
                    fontSize: "16px", 
                    width: "450px"}} fullWidth>
                            {buttonContinue}
                        </Button>
                    </ButtonStyled>
                </form>
            </StyleCard>
        </BoxCard>
    </Body>
</>
)

}

export default Email;