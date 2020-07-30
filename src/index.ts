import { LotusRPC } from '@filecoin-shipyard/lotus-client-rpc';
import { NodejsProvider } from '@filecoin-shipyard/lotus-client-provider-nodejs';
import { testnet } from '@filecoin-shipyard/lotus-client-schema';

const url = 'ws://127.0.0.1:7777/rpc/v0';
// const url = 'http://127.0.0.1:7777/rpc/v0'
// const url = 'wss://lotus.testground.ipfs.team/api/0/node/rpc/v0'
// const provider = new BrowserProvider(url)
// const provider = new NodejsProvider(url, { transport: 'http' })
const provider = new NodejsProvider(url);
const client = new LotusRPC(provider, { schema: testnet.fullNode });

async function run() {
  try {
    const version = await client.version();
    console.log('Version', version);
  } catch (e) {
    console.error('client.version error', e);
  }
  await client.destroy();
}
run();
