#[allow(unused_use)]
module upay::payment {

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

    public fun make_payment<BaseAsset, QuoteAsset>(
        pool: &mut Pool<BaseAsset, QuoteAsset>,
        client_order_id: u64,
        account_cap: &AccountCap,
        quantity: u64,
        base_coin: Coin<BaseAsset>,
        clock: &clock::Clock,
        ctx: &mut TxContext,): (Coin<BaseAsset>, Coin<QuoteAsset>) {

        //let original_val = coin::value(&quote_coin);

        // place market order
        let (sui_coin, usdt_coin) = clob::place_market_order(
            pool,
            account_cap,
            client_order_id,
            quantity,
            false,
            base_coin,
            coin::zero<QuoteAsset>(ctx),
            clock,
            ctx);

        //let ret_val = coin::value(&usdt_coin);

        // transfer funds
        //sui::transfer::public_transfer(usdt_coin, recipient);

        //sui_coin
        //let ret_val = coin::value(&sui_coin);
        
        (sui_coin, usdt_coin)
    }
}
