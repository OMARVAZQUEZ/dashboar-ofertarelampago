import React from "react";
import styles from "./index.module.sass";
import Button from "../../component/Button";
import TextField from "../../component/TextField";
import DateField from "../../component/DateField";
import useFieldForm from "../../hooks/useFieldForm";
import { Link } from "react-router-dom";
import environment from "../../environment";
import graphql from "babel-plugin-relay/macro";
import { commitMutation } from "react-relay";

const mutation = graphql`
  mutation Form_Mutation($rule: LightningOfferRuleInput) {
    viewer {
      lightningOffer(rule: $rule) {
        id
        sku
        startDate
        endDate
      }
    }
  }
`;

const { useField } = useFieldForm;

const Form = props => {
  const params = props.match.params;

  let localData;

  try {
    localData = JSON.parse(localStorage.offerData);
  } catch (err) {
    localData = {};
  }

  const data = (localData.id === params.offerId && localData) || {};

  const id = useField({
    id: "id",
    name: "id",
    placeholder: "ej. 123456-1242345-234",
    validateEvent: "blur",
    disabled: true,
    errors: {
      requiredError: "Es necesario definir un ID"
    },
    value: data.id
  });

  const sku = useField({
    id: "sku",
    name: "sku",
    placeholder: "ej. 31035998",
    required: true,
    validateEvent: "blur",
    errors: {
      requiredError: "Es necesario ingresar un SKU"
    },
    value: data.sku
  });

  const startDate = useField({
    id: "startDate",
    name: "startDate",
    required: true,
    value: data.startDate || new Date(),
    validateEvent: "change",
    customValidation: value => {
      const now = new Date();
      const start = new Date(value);
      return now < start;
    },
    errors: {
      defaultError:
        "Verifica que la fecha final sea posterior a la fecha inicial, y que estes seleccionando fechas en el futuro"
    }
  });

  const endDate = useField({
    id: "endDate",
    name: "endDate",
    required: true,
    value: data.endDate || new Date(),
    validateEvent: "change",
    customValidation: value => {
      const now = new Date();
      const start = new Date(startDate.input.value);
      const end = new Date(value);
      return end > start && start > now;
    },
    errors: {
      defaultError:
        "Verifica que la fecha final sea posterior a la fecha inicial, y que estes seleccionando fechas en el futuro"
    }
  });

  const saveOffer = () => {
    const { data, errors } = useFieldForm.validateData([
      id,
      sku,
      startDate,
      endDate
    ]);

    if (errors && errors.length) return;

    commitMutation(environment, {
      mutation,
      variables: { rule: data },
      onCompleted: (response, errors) => {
        window.location.href = "/";
      },
      onError: error => {
        console.log(errors);
      }
    });
  };

  return (
    <div id={styles.content}>
      <form className={styles.formOffer}>
        <div className={styles.inputsContainer}>
          <TextField label="Identificador de la oferta" input={id.input} />
          <TextField
            label="SKU de la oferta (No es el ID del producto)"
            input={sku.input}
          />
        </div>
        <div className={styles.inputsContainer}>
          <DateField label="Fecha inicial" input={startDate.input} />
          <DateField label="Fecha final" input={endDate.input} />
        </div>
        <div className={styles.toolbar}>
          <Link className={styles.buttonLink} to="/">
            <Button type="cancel">
              <i className="material-icons">canceled</i>
              <span>Cancelar</span>
            </Button>
          </Link>
          <Button onClick={saveOffer}>
            <i className="material-icons">save</i>
            <span>Guardar</span>
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Form;
