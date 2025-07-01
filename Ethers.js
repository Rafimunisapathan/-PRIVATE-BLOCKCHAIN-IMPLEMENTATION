# PRIVATE BLOCKCHAIN IMPLEMENTATION

./bin/cryptogen generate --config=crypto-config.yaml
./bin/configtxgen -profile TwoOrgsOrdererGenesis -outputBlock genesis.block -channelID mychannel
./bin/configtxgen -profile TwoOrgsChannel -outputCreateChannelTx channel.tx -channelID mychannel
docker-compose -f docker-compose.yaml up -d
{
  "status": "success",
  "txId": "c123fa9813e.",
  "result": "Asset created with ID asset001"
}

