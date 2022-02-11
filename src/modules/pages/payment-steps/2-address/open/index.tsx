import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
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
import { IApplicationState } from "../../../../../store/rootReducer";
import {
  setDonatorAddress,
  setPaymentStep,
  createDonator,
} from "../../../../../store/payment/actions";
import { IAddress } from "../../../../../store/shared";
import { showErrorToast } from "../../../../../utils/toast";
import {
  setLoading,
  clearLoading,
} from "../../../../../store/loading-progress/actions";

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
  const paymentState = useSelector((state: IApplicationState) => state.payment);

  const { handleSubmit, register } = useForm();

  const [country, setCountry] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleChangeCountry = (event: SelectChangeEvent) => {
    setCountry(event.target.value);
  };

  const onSubmit = (data: IAddressForm) => {
    const address: IAddress = {
      ...data,
      country,
    };

    dispatch(setDonatorAddress(address));
    setSubmitted(true);
    dispatch(setLoading());
  };

  useEffect(() => {
    if (paymentState.donator && submitted && paymentState.donator.address) {
      dispatch(
        createDonator(
          paymentState.donator,
          () => {
            dispatch(setPaymentStep(paymentState.currentStep + 1));
            dispatch(clearLoading());
          },
          (errorMessage: any) => {
            dispatch(clearLoading());
            showErrorToast(
              `Erro ao cadastrar doador${
                errorMessage && errorMessage.length > 0
                  ? ": " + errorMessage
                  : ""
              }`
            );
          }
        )
      );
    }
  }, [paymentState.donator?.address, submitted]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <CardAddressOpen container item direction="column">
        <AddressIcon container item direction="row">
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
            id="city"
            label="Cidade"
            placeholder="Rio de Janeiro"
            variant="standard"
            type="text"
            fullWidth
            required
            margin="normal"
            style={{ marginBottom: "16px" }}
            {...register("city")}
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

        <Grid item container direction="row">
          <Grid item>
            <TextField
              id="number"
              label="Número"
              placeholder="Ex. 285"
              variant="standard"
              style={{
                maxWidth: "100px",
                marginBottom: "16px",
                marginRight: "16px",
              }}
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

        <DivSubmitButton>
          <Button
            variant="contained"
            type="submit"
            fullWidth
            data-testid="button-saved"
          >
            {buttonSaved}
          </Button>
        </DivSubmitButton>
      </CardAddressOpen>
    </form>
  );
};

export default AddressStepOpen;
