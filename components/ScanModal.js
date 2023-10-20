// import React, { useState, useRef } from "react";
// import { QrReader } from "react-qr-reader";
// import styles from "../styles/Home.module.css";

// const ScanModal = () => {
//     const [data, setData] = useState(null);
//     return (
//         <div className={styles.container}>
//           <div className={styles.container}>
//             <QrReader
//               onResult={(result, error) => {
//                 if (!!result) {
//                   setData(result?.text);
//                 }
    
//                 if (!!error) {
//                   console.info(error);
//                 }
    
//               } 
//             }
//             constraints    ={{ facingMode:  "environment"  }}
//               style={{ width: "40%", height: "40%" }}
//             />
//             <p>{data}</p>
//           </div>
//         </div>
//       );
// }

// export default ScanModal
import { useStateContext } from "../context";
import React, {
  useState
} from "react";
import QrReader from "react-web-qr-reader";

const ScanModal = () => {
  // all the functions to handle the scan
  const delay = 500;

  const previewStyle = {
    height: 240,
    width: 320
  };

  const [result, setResult] = useState(null);

  const handleScan = (result) => {
      setResult(result);
      console.log("scan result",result);
  };

  const handleError = (error) => {
    console.log(error);
  };

  // all the code to handle the pay
  const {payToMerchant}=useStateContext();
  const qrCode ="paymentId=812798721398$account=ox638290204837200090$USD=0.0378$token=Usdt$price=14";

  // Define a regular expression pattern to match paymentId and account
  const pattern = /paymentId=([^\$]*)\$account=([^\$]*)\$USD=([^\$]*)\$token=([^\$]*)\$price=(.*)/;
  
  // Use the `match` method to extract the values
  const matches = qrCode.match(pattern);
  
  const data={
    paymentId:matches[1],
    account:matches[2],
    tokenPrice:matches[3],
    token:matches[4],
    amount:matches[5]
  }
  if (matches) {
    console.log("Account:", data);
  } else {
    console.log("No match found in the string.");
  }
  


  const handlePay=()=>{
    payToMerchant(data);
    console.log("You have initialted a payment");
  }
  if(true)
  {
    return (
      <div className="max-w-xs rounded overflow-hidden shadow-lg m-4">
      <h1 className="text-3xl font-semibold text-center">Pay</h1>
      <div className="px-6 py-4">
        <p className=" text-gray-600">Payment ID: <span className=" text-black">{data.paymentId}</span></p>
        <p className=" text-gray-600">Account: <span className=" text-black">{data.account}</span></p>
        <p className=" text-gray-600">Token: <span className=" text-black">{data.token}</span></p>
        <p className=" text-gray-600">Amount: <span className=" text-black">{data.amount}</span></p>
      </div>
      <div className="px-6 py-4 flex justify-center">
        <button
          className=" bg-blue-500 text-white align-middle font-bold py-2 px-4 rounded-full"
          onClick={handlePay}
        >
          Pay
        </button>
      </div>
    </div>
    )
  }
  else{
    return (
      <div className=" text-center font-semibold text-3xl">
      <div className="py-5">
      Scan Your Qr Code
      </div>
      <div>
      <QrReader
          delay={delay}
          style={previewStyle}
          onError={handleError}
          onScan={handleScan}
        />
      </div>
      </div>
    )
  }
};

export default ScanModal;
