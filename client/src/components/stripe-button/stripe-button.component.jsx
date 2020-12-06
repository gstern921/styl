import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51HvVrVAOOG47e2dNP446SQIAk4PeD3etbEp5yZr820A1nkcAR9NRQL4A03CbQQBZdo7BiSnXwnhbUIkxgd8UAFvo00g3OW53Wf";

  const onToken = (token) => {
    axios({
      url: "/payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token: token,
      },
    })
      .then((response) => {
        alert("Succesful Payment!");
      })
      .catch((error) => {
        console.log("Payment Error: ", error);
        alert(
          "There was an issue with your payment! Please make sure to use the provided credit card data"
        );
      });
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Styl Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
