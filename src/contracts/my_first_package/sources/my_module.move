//#[allow(unused_field)]
#[allow(unused_use)]
module my_first_package::my_module {

    // Part 1: Imports
    use sui::object::{Self, UID};
    use sui::transfer;
    use sui::sui::{Self, SUI};
    use sui::tx_context::{Self, TxContext};
    use sui::balance::{Self, Balance, Supply};
    use sui::coin::{Self, Coin};
    use sui::clock;


    use deepbook::clob_v2::{Self as clob, Pool};
    use deepbook::custodian_v2::{Self as custodian, AccountCap};

    struct USDT has drop {}

    fun init(_ctx: &mut TxContext) {

    }

    public fun make_payment_in_suiusdt(id: u64, quantity: u64, recipient: address, pool: &mut Pool<SUI, USDT>, account_cap: &AccountCap, base_coin: Coin<SUI>, quote_coin: Coin<USDT>, clock: &clock::Clock, ctx: &mut TxContext): (Coin<SUI>, u64) {

        let original_val = coin::value(&quote_coin);

        // place market order
        let (sui_coin, usdt_coin) = clob::place_market_order(
                             pool,
                             account_cap,
                             id,
                             quantity,
                             false,
                             base_coin,
                             quote_coin,
                             clock,
                             ctx);

        let ret_val = coin::value(&usdt_coin);

        // transfer funds
        sui::transfer::public_transfer(usdt_coin, recipient);

        //sui_coin
        //let ret_val = coin::value(&sui_coin);
        
        (sui_coin, ret_val - original_val)
    }
}
