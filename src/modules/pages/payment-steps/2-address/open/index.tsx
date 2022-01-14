import * as React from "react";
import AddressIconSVG from "../../../../../assets/img/payment/icon-address-card.svg";

import {
  CardAddressOpen,
  AddressIcon,
  TitleAddress,
  DivSubmitButton,
  StyleCep,
} from "./styles";

import {
  Select,
  SelectChangeEvent,
  TextField,
  Link,
  Button,
  Grid,
} from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { COUNTRIES } from "../../../../../constants";

const AddressStepOpen = () => {
  const titleAddress = "Dados de Endereço";
  const buttonSaved = "Salvar e continuar";
  const notKnowCep = "Não sei meu CEP";
  //const address = "Endereço";

  const [country, setCountry] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setCountry(event.target.value);
  };

  return (
    <form>
      <CardAddressOpen container item direction="column">
        <AddressIcon container item direction="row" spacing={3}>
          <Grid item>
            <img src={AddressIconSVG} alt="IconAddress" />
          </Grid>
          <Grid item>
            <TitleAddress>{titleAddress}</TitleAddress>
          </Grid>
        </AddressIcon>

        <Grid item>
          <FormControl variant="standard" fullWidth>
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
            >
              <option selected hidden>
                Selecione um país
              </option>
              {COUNTRIES.map((country) => (
                <option value={country} key={country}>
                  {country}
                </option>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item>
          <TextField
            id="Cep"
            label="CEP"
            type="text"
            variant="standard"
            placeholder="00000-000"
            fullWidth
          />
        </Grid>
        <Grid item>
          <StyleCep>
            <Link href="https://buscacepinter.correios.com.br/app/endereco/index.php">
              {notKnowCep}
            </Link>
          </StyleCep>
        </Grid>
        {/* <Grid item>
          <CardAddressHome>{address}</CardAddressHome>
        </Grid> */}
        <Grid item container direction="row" spacing={2}>
          <Grid item>
            <TextField
              id="Number"
              label="Número"
              placeholder="Ex. 285"
              variant="standard"
              style={{ maxWidth: "100px" }}
              fullWidth
            />
          </Grid>
          <Grid item flexGrow={1}>
            <TextField
              id="Complement"
              label="Complemento"
              placeholder="Ex.: Casa, Prédio, Apto"
              variant="standard"
              fullWidth
            />
          </Grid>
        </Grid>
        <Grid container item>
          <TextField
            id="reference"
            label="Referência"
            type="text"
            variant="standard"
            fullWidth
          />
        </Grid>
        <DivSubmitButton>
          <Button variant="contained" type="submit" fullWidth>
            {buttonSaved}
          </Button>
        </DivSubmitButton>
      </CardAddressOpen>
    </form>
  );
};

export default AddressStepOpen;
