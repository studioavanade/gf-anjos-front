import { useForm } from "react-hook-form";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddressIconSVG from "../../../../../assets/img/payment/icon-address-card.svg";

import {
  CardAddressOpen,
  AddressIcon,
  TitleAddress,
  DivSubmitButton,
} from "./styles";

import {
  Select,
  SelectChangeEvent,
  TextField,
  Link,
  Button,
  Grid,
  MenuItem,
} from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { COUNTRIES } from "../../../../../constants";
import { ApplicationState } from "../../../../../store/rootReducer";
import {
  setDonatorAddress,
  setPaymentStep,
} from "../../../../../store/payment/actions";
import { IAddress } from "../../../../../store/shared";

interface IAddressForm {
  street: string;
  number: string;
  neighborhood: string;
  postalCode: string;
  city: string;
  state: string;
  complement: string;
}

const AddressStepOpen = () => {
  const titleAddress = "Dados de Endereço";
  const buttonSaved = "Salvar e continuar";
  const notKnowCep = "Não sei meu CEP";
  //const address = "Endereço";

  const dispatch = useDispatch();
  const paymentState = useSelector((state: ApplicationState) => state.payment);

  const { handleSubmit, register } = useForm();

  const [country, setCountry] = useState("");

  const handleChangeCountry = (event: SelectChangeEvent) => {
    setCountry(event.target.value);
  };

  const onSubmit = (data: IAddressForm) => {
    const address: IAddress = {
      ...data,
      country,
    };

    dispatch(setDonatorAddress(address));
    dispatch(setPaymentStep(paymentState.currentStep + 1));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <CardAddressOpen item direction="column" spacing={3}>
        <AddressIcon container item direction="row" spacing={3}>
          <Grid item>
            <img src={AddressIconSVG} alt="IconAddress" />
          </Grid>
          <Grid item>
            <TitleAddress>{titleAddress}</TitleAddress>
          </Grid>
        </AddressIcon>

        <Grid item container>
          <TextField
            id="street"
            label="Rua"
            placeholder="Rua das palmeiras"
            variant="standard"
            type="text"
            fullWidth
            margin="normal"
            required
            style={{ marginBottom: "32px" }}
            {...register("street")}
          />
        </Grid>

        <Grid container item>
          <FormControl variant="standard" fullWidth>
            <InputLabel id="country">País</InputLabel>
            <Select
              labelId="country"
              id="country"
              label="País"
              variant="standard"
              placeholder="País"
              onChange={handleChangeCountry}
              value={country}
              style={{ marginBottom: "16px" }}
              required
              fullWidth
            >
              <MenuItem selected hidden>
                Selecione um país
              </MenuItem>
              {COUNTRIES.map((country) => (
                <MenuItem value={country} key={country}>
                  {country}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid item container>
          <TextField
            id="neighborhood"
            label="Bairro"
            placeholder="Santo Amaro"
            variant="standard"
            type="text"
            fullWidth
            required
            margin="normal"
            style={{ marginBottom: "16px" }}
            {...register("neighborhood")}
          />
        </Grid>

        <Grid item container>
          <TextField
            id="state"
            label="Estado"
            placeholder="Rio de Janeiro"
            variant="standard"
            type="text"
            fullWidth
            required
            margin="normal"
            style={{ marginBottom: "16px" }}
            {...register("state")}
          />
        </Grid>

        <Grid container item>
          <TextField
            id="postalCode"
            label="CEP"
            type="number"
            variant="standard"
            placeholder="00000-000"
            inputProps={{
              inputMode: "numeric",
              pattern: "[0-9]{8}",
              max: 99999999,
            }}
            fullWidth
            required
            margin="normal"
            style={{ marginBottom: "16px" }}
            {...register("postalCode")}
          />
        </Grid>

        <Grid container item>
          <Link
            href="https://buscacepinter.correios.com.br/app/endereco/index.php"
            target="_blank"
            rel="noreferrer"
            style={{ marginBottom: "16px" }}
          >
            {notKnowCep}
          </Link>
        </Grid>

        <Grid item container direction="row" spacing={2}>
          <Grid item>
            <TextField
              id="number"
              label="Número"
              placeholder="Ex. 285"
              variant="standard"
              style={{ maxWidth: "100px", marginBottom: "16px" }}
              type="number"
              fullWidth
              required
              margin="normal"
              {...register("number")}
            />
          </Grid>
          <Grid item flexGrow={1}>
            <TextField
              id="complement"
              label="Complemento"
              placeholder="Ex.: Casa, Prédio, Apto"
              variant="standard"
              fullWidth
              margin="normal"
              style={{ marginBottom: "16px" }}
              {...register("complement")}
            />
          </Grid>
        </Grid>

        <Grid container item>
          <TextField
            id="reference"
            label="Referência"
            placeholder="Ao lado do shopping"
            type="text"
            variant="standard"
            fullWidth
            margin="normal"
            style={{ marginBottom: "16px" }}
            {...register("reference")}
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