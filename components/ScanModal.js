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
import React, {
  useState
} from "react";
import QrReader from "react-web-qr-reader";

const ScanModal = () => {
  const delay = 500;

  const previewStyle = {
    height: 240,
    width: 320
  };

  const [result, setResult] = useState(null);

  const handleScan = (result) => {
      setResult(result);
      console.log(result);
  };

  const handleError = (error) => {
    console.log(error);
  };

  if(result)
  {
    return (<>
    got data
    </>)
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
