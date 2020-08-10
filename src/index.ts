import { LotusRPC } from '@filecoin-shipyard/lotus-client-rpc';
import { NodejsProvider } from '@filecoin-shipyard/lotus-client-provider-nodejs';
import { testnet } from '@filecoin-shipyard/lotus-client-schema';

// const url = 'ws://127.0.0.1:1234/rpc/v0';
const url = 'http://127.0.0.1:7777/rpc/v0';
// const url = 'wss://lotus.testground.ipfs.team/api/0/node/rpc/v0'
// const provider = new BrowserProvider(url)
// const provider = new NodejsProvider(url, { transport: 'http' })
const provider = new NodejsProvider(url);
const client = new LotusRPC(provider, { schema: testnet.fullNode });

async function run() {
  try {
    const defaultWalletAddress = await client.walletDefaultAddress();
    console.log('Address', defaultWalletAddress);

    const newWalletAddress = await client.walletNew(2); // no idea why 2
    console.log('New address', newWalletAddress);

    const channelInfo = await client.paychGet(
      defaultWalletAddress,
      newWalletAddress,
      '20000'
    );
    console.log('Result of paychGet:', channelInfo);

    const channelMessage = channelInfo['ChannelMessage'];
    console.log('Waiting for ChannelMessage to be mined...');
    const msgResult = await client.stateWaitMsg(channelMessage, 1); // confidence (depth) = 1
    console.log('ChannelMessage mined:', msgResult);
  } catch (e) {
    console.error('client.version error', e);
  }
  await client.destroy();
}
run();
