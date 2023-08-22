import "./styles.css";
import { getParsedNftAccountsByOwner } from '@nfteyez/sol-rayz'
import * as web3 from '@solana/web3.js'

export default function App() {

  const getParsedNfts = async () => {
    try {
      var connection = new web3.Connection(
        web3.clusterApiUrl('mainnet-beta'),
        'confirmed',
      )

      const resp = await window?.solana?.connect()
      const key = resp.publicKey.toString()

      let details = await getParsedNftAccountsByOwner({
        publicAddress: key,
        connection: connection,
        serialization: true
      })
      console.log('wallet data', details)
    } catch (err) {

    }
  }

  return (
    <div className="App">
     <button onClick={() => getParsedNfts()}>Click Me!</button>
    </div>
  );
}
