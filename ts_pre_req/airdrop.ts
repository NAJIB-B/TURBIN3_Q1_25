const { Connection, Keypair, LAMPORTS_PER_SOL } = require("@solana/web3.js");
const wallet = require("./dev-wallet.json");


const keypair = Keypair.fromSecretKey(new Uint8Array(wallet));

const connection = new Connection("https://api.devnet.solana.com");

  (async () => {
  try {
    // We're going to claim 2 devnet SOL tokens
    const txhash = await connection.requestAirdrop(
      keypair.publicKey,
      2 * LAMPORTS_PER_SOL,
    );
    console.log(`Success! Check out your TX here:
https://explorer.solana.com/tx/${txhash}?cluster=devnet`);
  } catch (e) {
    console.error(`Oops, something went wrong: ${e}`);
  }
})();