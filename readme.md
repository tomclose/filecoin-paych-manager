# Filecoin Payment Channel Investigations

I'm using this codebase to invesigate interacting with filecoin payment channels. Currently
I'm trying (and failing 😕) to get a payment channel to open.

## Reproducing the problem

I've followed the instructions [here](https://docs.filecoin.io/build/examples/network-inspector/step-1-start-lotus-devnet-and-go-ipfs/#steps) to setup a local lotus devnet:

```
git clone git@github.com:filecoin-shipyard/lotus-devnet.git
cd lotus-devnet
make devnet BIGSECTORS=false
```

To get going with this codebase you'll need node and yarn installed. You can then run

```
yarn
```

to install the dependencies and then `yarn start` to run [this code](./src/index.ts).

I'd expect this to open a payment channel. Instead I get an error with `ExitCode: 16`.

```
▶ yarn start
yarn run v1.19.0
$ npx ts-node src/index.ts
Address t3sikvkvgsbzdasjmjkh26i4jfe6mk6xty2dzs5ii4k2lpnqai3dfiu5eyilkomyvis42dxifkk3k563au7eza
New address t3rt742bwfnlmm2tp4ci6s3o6b5uyd6ep6rrufq74wicnmqstqmpcf7rucwn6giuhuh7lhkflthx5zbuf3nvwq
Result of paychGet: {
  Channel: '<empty>',
  ChannelMessage: {
    '/': 'bafy2bzacedyhjxzxxiyzs7dhgovd7b6soxribmi4nbxercosgpe3vleue44mg'
  }
}
Waiting for ChannelMessage to be mined {
  Channel: '<empty>',
  ChannelMessage: {
    '/': 'bafy2bzacedyhjxzxxiyzs7dhgovd7b6soxribmi4nbxercosgpe3vleue44mg'
  }
}
ChannelMessage mined {
  Receipt: { ExitCode: 16, Return: '', GasUsed: 1713 },
  TipSet: { Cids: [ [Object] ], Blocks: [ [Object] ], Height: 306 }
}
✨  Done in 5.53s.
```
