import React, { useState } from "react";
import styles from "./CheckoutDetails.modules.scss";

const initialAddressState = {
  name: "",
  line1: "",
  line2: "",
  city: "",
  state: "",
  postal_code: "",
  phone: "",
};

const CheckoutDetails = () => {
  const [shippingAddress, setShippingAddress] = useState({
    ...initialAddressState,
  });
  const [billingAddress, setBillingAddress] = useState({
    ...initialAddressState,
  });

  const handleShipping = () => {};
  const handleBilling = () => {};

  return (
    <section>
      <div className={`container ${styles.checkout}`}>
        <h2>Checkout Details</h2>
      </div>
    </section>
  );
};

export default CheckoutDetails;
