import * as React from "react";
import AddressIconSVG from "../../../../../assets/img/payment/icon-address-card.svg";

import {
  CardAddressOpen,
  AddressIcon,
  TitleAddress,
  DivSubmitButton,
  StyleCep,
  CardAddressHome,
} from "./address-open_styles";

import {
  Select,
  SelectChangeEvent,
  TextField,
  Link,
  Button,
} from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

const AddressStepOpen = () => {
  const titleAddress = "Dados de Endereço";
  const buttonSaved = "Salvar e continuar";
  const notKnowCep = "Não sei meu CEP";
  const address = "Endereço";

  const [country, setCountry] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setCountry(event.target.value);
  };

  return (
    <>
      <CardAddressOpen>
        <AddressIcon>
          <img src={AddressIconSVG} alt="IconAddress" />
          <TitleAddress>{titleAddress}</TitleAddress>
        </AddressIcon>

        <FormControl variant="standard" sx={{ m: 1, minWidth: 380 }}>
          <InputLabel id="country">País</InputLabel>
          <Select
            labelId="country"
            id="country"
            label="País"
            variant="standard"
            placeholder="País"
            onChange={handleChange}
            value={country}
            fullWidth
          />
        </FormControl>
        <form
          style={{
            width: "390px",
            paddingLeft: "5px",
            paddingBottom: "35px",
          }}
        >
          <TextField
            id="Cep"
            label="CEP"
            type="text"
            variant="standard"
            placeholder="00000-000"
            fullWidth
            margin="normal"
          />
          <StyleCep>
            <Link href="https://buscacepinter.correios.com.br/app/endereco/index.php">
              {notKnowCep}
            </Link>
          </StyleCep>
          <CardAddressHome>{address}</CardAddressHome>
          <TextField
            id="Number"
            label="Número"
            placeholder="Ex. 285"
            variant="standard"
            style={{ width: "100px", margin: "2px" }}
          />
          <TextField
            id="Complement"
            label="Complemento"
            placeholder="Ex. Casa, Predio, Apto"
            variant="standard"
            style={{ width: "275px", margin: "2px" }}
          />
          <TextField
            id="reference"
            label="Referência"
            type="text"
            variant="standard"
            fullWidth
            margin="normal"
          />
        </form>
        <DivSubmitButton>
          <Button variant="contained" type="submit" fullWidth>
            {buttonSaved}
          </Button>
        </DivSubmitButton>
      </CardAddressOpen>
    </>
  );
};

export default AddressStepOpen;
