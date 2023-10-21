import { createContext, useContext, useState } from "react";
import { DeepBookClient } from "@mysten/deepbook";
import { SuiClient,SuiObjectChangeCreated } from "@mysten/sui.js/client";
import { TransactionBlock } from '@mysten/sui.js/transactions';
import { SUI_CLOCK_OBJECT_ID,	normalizeStructTag,
	parseStructTag
 } from '@mysten/sui.js/utils';
import { PACKAGE_ID,MODULE_CLOB,UPAY_MODULE_CLOB,UPAY_PACKAGE_ID } from "../utils";
import { useWallet } from "@suiet/wallet-kit";

const StateContext=createContext();

export const StateContextProvider=({children})=>{
    // trail function
    async function executeTransactionBlock(
        myrawSigner,
        txb,
    ) {
        const result = await myrawSigner.signAndExecuteTransactionBlock({
            transactionBlock: txb,
            options: {
              showEffects: true,
              showEvents: true,
              showInput: true,
            },
          });
        return result;
    }
    // use wallet hook
    const wallet=useWallet();
    console.log(wallet.account);

    const [registering,setRegistering]=useState(false);
    // a fucntion to register for the merchant
    const addRegistration=(data)=>{
        try{
            console.log(data);
            
        }
        catch(e)
        {
            console.log(e);
        }
    }
    
    // a function to pay to the Merchant
    const payToMerchant=async (data)=>{
        try{
            const local_client = new SuiClient({ url: 'https://fullnode.testnet.sui.io:443' })
            const deepbook = new DeepBookClient(local_client);
            const market_price = await deepbook.getMarketPrice('0xeb91fb7e1050fd6aa209d529a3f6bd8149a62f2f447f6abbe805a921983eb76c')
            console.log("market price",market_price)
            console.log("data",data);
            // to call the contract call
		    const pools = await deepbook.getAllPools()
            console.log("pools",pools)
            const create_account_tx = deepbook.createAccount(wallet.address);
            const res = await executeTransactionBlock(wallet, create_account_tx); 
            console.log("res",res);

            const accountCap = res.objectChanges[1].objectId;
            console.log("account",accountCap);



            const resp = await local_client.getAllCoins({
                owner: wallet.address,
                coin_type: '0x0000000000000000000000000000000000000000000000000000000000000002::sui::SUI'
              });
            console.log("resp",resp);

            const txb=new TransactionBlock();
            // txb.setGasPayment({objectId: resp.data[0].coinObjectId, digest: resp.data[0].digest, version: resp.data[0].version })
            const id=200; 
            const merchant_address="0xe578aa844671d2ebbb850f6352a14b48b337dc39547ab2a5025e99df93fd86f7";
            const poolId="0x1e501bbcc0b1bc6edcb85c6a208b5098d9fc2b0ced0eb9b4dba8548b4fc82315";
            // const sui_coin_id=;        
            const sui_coin_id=resp.data[0].coinObjectId;
            const usdt_coin_id='0x1cf136d45d2811c3239c9a1b15ccb4eb7f0459847a83403cb46d8aab312f0e9a'
		    const quantity=BigInt(1);

            deepbook.setAccountCap(accountCap)
            // const dep_tx = deepbook.deposit(poolId, sui_coin_id, quantity)
            // const dep = await wallet.signAndExecuteTransactionBlock(dep_tx);
            // console.log(dep);

            const [baseAssetType, quoteAssetType] = await deepbook.getPoolTypeArgs(poolId);

            // const txb = new TransactionBlock();


            
            // txb.moveCall({
                
            //     target: `${UPAY_PACKAGE_ID}::${UPAY_MODULE_CLOB}::dummy`,
            //     arguments: [],
            // });
            // await wallet.signAndExecuteTransactionBlock({transactionBlock: txb});
            // console.log('Test')
            // // empty coin
            // const argse = []
            // const emptyCoin = txb.moveCall({
            //     typeArguments: [quoteAssetType],
            //     target: `0x2::coin::zero`,
            //     arguments: argse,
            // });
            // console.log(emptyCoin);

            const tx_id=await deepbook.placeMarketOrder(poolId,quantity,'ask',sui_coin_id,usdt_coin_id,id,merchant_address);
            const pay_merchant_sdk = await wallet.signAndExecuteTransactionBlock({transactionBlock: tx_id});
            console.log(pay_merchant_sdk);

//             const args = [
//                 txb.object(poolId),
//                 txb.pure.u64(quantity),
//                 txb.object(sui_coin_id),
//                 txb.object(SUI_CLOCK_OBJECT_ID),
//             ];
//             // const args = []
//             const [coin1,coin2]=txb.moveCall({
//                 typeArguments:  [baseAssetType, quoteAssetType],
//                 target: `${UPAY_PACKAGE_ID}::${UPAY_MODULE_CLOB}::make_payment_in_suiusdt`,
//                 arguments: args,
//             });
// console.log('Hiiiii')
//             txb.transferObjects([coin1], txb.object(wallet.address));
//             txb.transferObjects([coin2], txb.object(wallet.address));

// 		    const pay_merchant = await wallet.signAndExecuteTransactionBlock({transactionBlock: txb});
            }
            catch(e)
            {
                console.log(e);
            }
    }
    return (
        <StateContext.Provider value={{addRegistration,registering,setRegistering,payToMerchant}}>
        {children}
        </StateContext.Provider>
    )
}

export const useStateContext=(()=>useContext(StateContext));