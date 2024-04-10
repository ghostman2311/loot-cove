import { useState, useEffect } from "react";

const Checkout = () => {
  return (
    <div>
      <form>
        <div className="checkItem">
          <label
            htmlFor="ffname"
            className="checkoutLabel"
          >
            First Name:
          </label>
          <input
            type="text"
            id="ffname"
            className="checkoutInput"
          />
        </div>
        <br />
        <div className="checkItem">
          <label
            htmlFor="flname"
            className="checkoutLabel"
          >
            Last Name:
          </label>
          <input
            type="text"
            id="flname"
            className="checkoutInput"
          />
        </div>
        <br />
        <div className="checkItem">
          <label
            htmlFor="faddress1"
            className="checkoutLabel"
          >
            Address 1:
          </label>
          <input
            type="text"
            id="faddress1"
            className="checkoutInput"
          />
        </div>
        <br />
        <div className="checkItem">
          <label
            htmlFor="faddress2"
            className="checkoutLabel"
          >
            Address 2:
          </label>
          <input
            type="text"
            id="faddress2"
            className="checkoutInput"
          />
        </div>
        <br />
        <div className="checkItem">
          <label
            htmlFor="fcity"
            className="checkoutLabel"
          >
            City:
          </label>
          <input
            type="text"
            id="fcity"
            className="checkoutInput"
          />
        </div>
        <br />
        <div className="checkItem">
          <label
            htmlFor="fprov"
            className="checkoutLabel"
          >
            Province:
          </label>
          <input
            type="text"
            id="fprov"
            className="checkoutInput"
          />
        </div>
        <br />
        <div>
          <label
            htmlFor="fpost"
            className="checkoutPostLabel"
          >
            Postal Code:
          </label>
          <input
            type="text"
            id="fpost"
            className="checkoutPost"
            maxLength={6}
          />
        </div>
        <br />
        <div className="checkItem">
          <label
            htmlFor="fcard"
            className="checkoutLabel"
          >
            Credit Card Number:
          </label>
          <input
            type="text"
            id="fcard"
            className="checkoutInput"
            maxLength={16}
          />
        </div>
        <br />
        <div>
          <label
            htmlFor="fdate"
            className="checkoutDateLabel"
          >
            Expiry Date:
          </label>
          <input
            type="month"
            id="fdate"
            className="checkoutDate"
          />
        </div>
        <br />
        <div>
          <label
            htmlFor="fcvv"
            className="checkoutCCVLabel"
          >
            CVV:
          </label>
          <input
            type="password"
            id="fcvv"
            className="checkoutCCV"
            maxLength={3}
          />
        </div>
        <br />
        <button
          type="submit"
          className="checkBtn"
        >
          Buy Now
        </button>
      </form>
    </div>
  );
};

export default Checkout;
