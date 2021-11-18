import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton=({price})=>{
    const priceForStripe=price*100;
    const publishableKey='pk_test_51JwlepSDKk6JL0Dz29MPY4BzY1GL4J7zj6tEn2ypu8eaJqqWgDAna0nTEq7ZFRx5G5bzuMj28EuByXT19R08Uw0H00SLBN4yKC';
    const onToken=token=>{
        console.log(token);
        alert("PAYMENT SUCCESFULL");
    }

    return (
        <StripeCheckout
        label="Pay Now"
        name="Clothing Store Ltd."
        billingAddress
        shippingAddress
        image=""
        description={`Your Total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
        />
    )
};


export default StripeCheckoutButton;
    

