# Smitherium
kharidoge?
<!--# Contents
<ol>
   <li>Blockchain</li>
   <ul>
      <li><a href="#introduction">Introduction</a></li>
      <li><a href="#what-is-trust-">What is Trust ?</a></li>
      <li><a href="#blockchain-technology">Blockchain Technology</a></li>
      <li><a href="#applications-of-blockchain">Application Of Blockchain</a></li>
      <li><a href="#hashing-block">Hashing Block</a></li>
      <li><a href="#immutable-ledger">Immutable Ledger</a></li>
      <li><a href="#p2p-network">P2P Network</a></li>
      <li><a href="#how-does-distributed-p2p-network-work-in-blockchain-">How does distributed P2P network work in blockchain</a></li>
      <li><a href="#blockchain-mining">Blockchain Mining</a></li>
      <li><a href="#byzantine-generals-problem">Byzantine's General Problem</a></li>
      <li><a href="#concensus-protocol">Concensus Protocol</a></li>
   </ul>
   <li>Bitcoin</li>
   <ul>
      <li><a href="#what-is-cryptocurrency-">What is Cryptocurrency ?</a></li>
      <li><a href="#what-is-protocol-">What is Protocol ?</a></li>
      <li><a href="#what-is-the-difference-between-coins-and-tokens">What is difference between Coins and Tokens ?</a></li>
      <li><a href="#what-are-coins">What are Coins?</a></li>
      <li><a href="#what-are-tokens">What are Tokens ?</a></li>
      <li><a href="#bitcoins-monetory-policy">Bitcoin's Monetory Policy ?</a></li>
      <li><a href="#how-mining-works-">How mining works ?</a></li>
      <li><a href="#cpu-vs-gpu-vs-asic">CPU vs GPU vs ASIC</a></li>

   </ul>
</ol>
-->

# Blockchain

![image](https://images.idgesg.net/images/article/2017/10/fintech_financial_technology_blockchain_network_thinkstock_664868402-100739353-large.jpg)

## Introduction

Blockchain is a disruptive technology.
Disruptive technology is a technology that completely changes the traditional technology into a more enhanced version.
For eg: Tanga was replaced by car, bus and other vehicles as they are fast and more feasible as compared to the tanga. So they are disruptive technology. Similarly Email, Internet is also the disruptive technology in the communication environment.

(Blockchain is used for trust environment on internet).

## What is Trust ?

Let's consider an example of buying a coffee from the reputed coffee store which promises to provide some good ingredients into its coffee. But how can we actually know that the coffee which the reputed store providing actually contains those nutrients.
So Using blockchain, we can have some trust under such conditions.

## Blockchain Technology

In layman language, blockchain is a decentralized, immutable and transparent ledger.
(Ledger is like a entry book or data book which keeps the track of all transaction).

Lets consider the example of a shopkeeper selling a flour to a man in debt of rupees 1000 and enters this debt record into its ledger book in front of man. But after the man departs from the shop, the shopkeeper changes this 1000 rs to 2000 rs. So this is wrong.

In case of blockchain, this record is stored in the BLOCK and this CHAIN of BLOCKS(records) form the ledger book. In blockchain, the data once feed to the block can NEVER be changed.
Now whenever some change is done to the blockchain in one device, the changes if valid are reflected in all the other copy of blockchain available with all the devices on the network. So this means that blockchain is decentralized.

![image](https://github.com/Jigsaw-23122002/Blockchain/blob/master/Information/01.png)

This gives rise to the question in our mind that - the copy of ledger is available with everyone on the network. So everone will be able to see our transactions. But this is not the case, the block contains all its data encrypted and its data can only be accessed by the one who are the owner of the block in the blockchain. So the data is very safe.

## Applications Of Blockchain

1. Product tracking (can be used to check whether the product is original or fake)
2. Smart contract (It is special type of program that runs on etherium blockchain)

![image](https://github.com/Jigsaw-23122002/Blockchain/blob/master/Information/02.png)

3. International wire transfer (transfering money from one country format to another country format. In case of centralized system this is disadvantageous due to the high cost charged by the intermediate banks and the time taken for the conversion is also high.Using blockchain cuts down the cost and time by larger extent).
4. Health Care System
   Consider an example where a person visits a hospital 'A' for all health realted problem he has. So all the details about the diagnonis of the person is stored in the database of hospital 'A' and suppose in future the same person goes to hospital 'B' then they will not have any details about the previous diagnosis of the person. So this was the problem of centralized database of the hospitals.
   Blockchain helps to decentralize this data and helps the hospital 'B' to also access the previous diagnosis details of the person.

## Hashing Block

The block in the blockchain looks like -

![image](https://github.com/Jigsaw-23122002/Blockchain/blob/master/Information/03.png)

The Hash part in the block acts like the fingerprint of the block.It is unique for each block in the blockchain. This hash is generated using SHA-256 algorithm.
Whenever any data is entered into the block, it is first passed through the SHA-256 algorithm which generates a string of length 64 characters and each character is of 4 bits leading to the total 256 bits data generation.

![image](https://github.com/Jigsaw-23122002/Blockchain/blob/master/Information/04.png)

The first block in the block chain is known as the genesis block as it does not have any previous hash

Properties of hashing i blockchain :

1. It is one way i.e. the from the data, we can generate the hash but from hash we can never generate the data.
2. The algorithm is deterministic i.e. for same data, the hash will always be same no matter how many times we pass the data.
3. Fast computation i.e. the hash is generated at faster rate.
4. Withstand collision i.e. the hash cannot be easily decrypted by the hackers.
5. Avalache effect (Even the smallest change results in the drastic change in the newly generated hash)

## Immutable Ledger

We know that every block in the blockchain stores the hash of the previous block. So suppose the hacker change the content of one of the block of the blockchain. Now due to this change in data the hash of the block also changes due to the avalanche effect property of the hashing algorithm. Now as this hash changes, this changed hash need to be reflected in the next block which storing the hash of the changed block as the previous hash. This leads to the change in the content of the next block leading to change in its hash too. So it is like a domino effect and the entire blockchain from the changed block becomes corrupted and all have to be changed.

![image](https://github.com/Jigsaw-23122002/Blockchain/blob/master/Information/05.png)

## P2P Network

In P2P networks, there is no centralized database and the data is kept distributed on the clients on the networks and sometimes copy of the same data is also kept on multiple clients on the network.
This eliminates the risks due to hacking.(There is no centralized server for hackers to hack it. Multiple copies of data are available on multiple clients on the network so if one of the client is hacked and some changes are done on the copy of data reciding in the hacked computer then the same data can be retirived from another client on the network)

## How does distributed P2P network work in blockchain ?

Suppose the network is as follows shown in figure. Now suppose A mines a block and add this newly mined block into its blockchain. So after adding this new block the blockchain has changed and all the other devices should also be having the same new block chain so A reports the change to the devices B, E and F on the network. If more than 50% of the neighbours approve the addition of new block by A then all the neighbours are modified with new block and similarly this process works for their neighbors too.

![image](https://github.com/Jigsaw-23122002/Blockchain/blob/master/Information/06.png)

1. Why do we need distributed P2P in blockchain ?

- Suppose Hacker hacks the blockchain of device A and changes the blocks in it. As soon as the changes are done in the blockchain of A, the neighbours B, F and E will be notified with the changes to agree and disagree. Obviously the changes will be milacious as it is changed by the hacker so B, E and F will disagree from the changes and the blockchain of A will be again changed back to the original blockchain. So in this way distributed network helps us in getting the blockchain secured from the hackers.

![image](https://github.com/Jigsaw-23122002/Blockchain/blob/master/Information/07.png)

## Blockchain Mining

In this, the group of miners try to solve a particular mathematical problem. A miner who solves that mathematical problem first will get a chance to mine(extract) a block from the mem-pool. Now this mined block is verified by the other miners whether the mined block is valid or not. After the successful verification of the mined block by the other miners on the network the block can be added into the blockchain.

![image](https://github.com/Jigsaw-23122002/Blockchain/blob/master/Information/08.png)

## Byzantine Generals Problem

![image](https://github.com/Jigsaw-23122002/Blockchain/blob/master/Information/09.png)

This problem is commonly faced in case of distributed computing system.
To understand this problem, let's consider the case where there is a kingdom which has to attacked by the 4 enemies from 4 different directions (N,E,W,S).
Now in ideal case when the conditions was actaully favourable for the attack, all the four enemies would simultaneouly agree to attack onto the kingdom.
But there might be some case when one or more than one enemy can disagree to attack on the kingdom. This is because they might be the traitor among the enemies.
So in actual we don't know whether the disagreement to attack the kingdom was because of some valid reason or they were the traitors.
So this is _Byzantines General Problem_.
So as to avoid this, Miguel Castro provided the solution to this problem called _Byzantine Fault Tolerance_.

Byzantine Fault Tolerance states that the distributed system can tolerate 1/3 of the total population of the network as the network hackers because the decision is always based on the majority so 2/3 will always take the correct decision no matter what decision the remaining 1/3 will take.

## Concensus Protocol

Concensus protocol protects us by preventing the attacks and solves the competing chain problem.
There are two main type of concensus protocols :

1. Proof of work
2. Proof of stake

![image](https://github.com/Jigsaw-23122002/Blockchain/blob/master/Information/10.png)

- **Preventing attacks**
  <br>We know that when an attacker tries to attack an existing block present somewhere in the middle of the blockchain then this attack can be easily resolved by checking the blockchain with the blockchains present on the other devices in the network.
  But when the attacker tries to add a new corrupt block at the end of the blockchain then this is difficult to recognize whether the block is corrupt or valid because there is no block in the blockchain present on the other devices in the network containing the newly added block with which we can compare.
  Concensus protocol helps us to resolve this problem.
  Whenever the miner tries to add a new block in the blockchain, the other nodes present in the network do not directly add the block into their blockchain too. Instead all the nodes present in the network run an algorithm on the newly added block to check whether it is authenticated block or not.(The time for completely running the algorithm on the newly added block only takes few seconds. This is because checking the mined block is like checking the whether the rubik's cube is solved or not.The solver takes a lot of time for solving the rubik's cube but the checker instead takes only few seconds to check whether it is solved or not)
  Also mining a block is a very costly task for the miners(Very hogh computational power computer is needed and the hardware has to be kept in cool conditions so as to avoid the fire) and they themselve avoid to the add some milacious or corrupt block into the blockchain as the incentives which was meant to be given to them for mining will not be given to them.

- **Competing Chain Problem**
  <br/>Suppose node A and node C simultaneously mine a block and adds the mined block into their respective blockchain. Now the notification is sent to the remaining nodes onto the network by the nodes A and C to change the blockchain of all the other nodes (shown in the diagram below).<br/><br/>
  ![image](https://github.com/Jigsaw-23122002/Blockchain/blob/master/Information/11.png)

  <br/>Let's assume that the notification sent by node A reaches node E and F and the notification sent by the node C reaches the node B. So after verifying the validity of the new block, nodes E and F adds them into their blockchain too and similarly node B will also add the new block of node C into its blockchain after verifying its validity.
  So, Node A, E and F have the same blockchain and Nodes B and C have the same blockchain (shown in the diagram below). Now the problem is that within the same network, there exists two different blockchains.<br/><br/>
  ![image](https://github.com/Jigsaw-23122002/Blockchain/blob/master/Information/12.png)

  <br/>This problem is known as competing chain problem and to eliminate such difference of blockchain, a simple rule is used - _Eliminate the block having smaller length and keep the one having larger length_.

  Now at this point of time the network will not be able to discard any of the blockchain as the length of both the blockchain is same. So now the network will wait for the new block being added by someone else on the network. Now assuming the computational power of all the nodes on the network same, the chances of blockchain contained by nodes A, E and F to get accepted is more because there are 3 nodes in their favour so chances of them mining a new block is more as compared to the nodes B and C.
  Suppose one among the nodes A, E and F mines a new block, then the length of their blockchain will now be more and hence the entire network will contain the blockchain of A, E and F.
  <br/><br/>
  ![image](https://github.com/Jigsaw-23122002/Blockchain/blob/master/Information/12.png)

  Note -

  1. The concensus protocol of the blockchain is much better than the byzantine's general problem as it requires only the 51% of the majority which was 66% in case of byzantine.
  2. All the transaction in the discarded block will be dropped and the miner that had mined the block will not get any reward.
  3. So that's why wait for 6 confirmations before assuming payment to be successful.

# Bitcoin

![image](https://resize.hswstatic.com/w_907/gif/bitcoin-6.jpg)

( Below content is taken from the article - https://8bitsumo.com/difference-between-coin-token-protocol/ )

## What is Cryptocurrency ?

Before we delve into complicated matters, let start at the beginning and explain what cryptocurrencies are and why the name “cryptocurrency” doesn’t capture all the nuances.
I’m sure that by now you know that cryptocurrencies are digital/virtual money. But do you interpret this phrases correctly? In a sense, your money in the bank also could be called “digital” because they exist as a sum in your bank account. But whenever you feel like it, you can go to the nearest machine and withdraw them.
In addition to this, in case someone deceives you, or you pay for something you don’t receive, you can file a complaint, and you’ll probably get part of your money back.

Cryptocurrencies are virtual because they don’t exist as material objects. You can’t touch them, withdraw them, or store them under your mattress. People get cofounded because everybody talks about “coins.” But these coins are not like the one you’ll find in your purse. They are just a string of data, which you transfer from one account to the other and store in cryptocurrency wallets.

No one but you has control over these digital currencies, which is great on the one hand. But on the other, it also means that you’re the only one responsible for keeping your investments safe, and you can’t complain to anyone if someone cheats you.

We call them cryptocurrencies because cryptography is used to secure and validate the transactions and to make sure that no one can create thousands of “coins” easily.

By this point, some of you might be wondering how something that doesn’t exist can be worth something.
But have you actually thought what money is? Economically speaking, money functions as:

1. ​A unit of account
2. ​A store of value
3. A medium of exchange

If we go back in the centuries, we’ll see that people used many goods as currency – metals, pelts, corn, and so on. Banknotes became valuable because they represented gold – a metal, which people deemed precious and rare, and they wanted to have it.

The same is happening with cryptocurrencies. They are valuable because people want to own them. If no one were interested in buying bitcoins or Litecoins, they would be useless and worthless, and you wouldn’t be reading this article.

Today, when people hear “cryptocurrency”, they immediately think Bitcoin. Bitcoin is the first among many. There are “coins” and “tokens” which are regarded as cryptocurrencies, but they don’t have the same functions. What’s more, people don’t use them as a medium of exchange, e.g. to buy and sell things.

## What is protocol ?

So, if the blockchain is the idea, the protocols are the sets of rules, which define the idea. I know that it’s hard to comprehend, so let me give you an example.

Think about the blockchain as language itself – the concept of communicating with other people with words/signs. But not everybody speaks the same language. So protocols would be all those individual languages that exist – like English, French, Spanish, which have their own sets of grammar rules. They are all based on the same idea – to communicate – but execute it differently.

Wait a minute. Don’t all cryptocurrencies use the same protocol developed by the creators of Bitcoin? No, the Bitcoin protocol was the first one, but other cryptocurrencies have their independent protocols, their own rules of communicating between the different nodes in the chain.

Take Bitcoin and Ethereum – one of the most popular cryptocurrencies – for example. Bitcoin transactions require 10-15 minutes to confirm, while Ethereum ones get validated in seconds. Bitcoin uses a hash algorithm to encrypt, while Ethereum uses ethash. Bitcoin strives to be an alternative to fiat currencies, while Ethereum aims to facilitate peer-to-peer contracts.

As you start to grasp, all the important rules are defined by the protocols – consensus, validation, and participation in the network. That’s why every cryptocurrency is different and unique, even those based on Bitcoin.

If you think about it, you’ll realize that you’re already using one protocol without even knowing it. I’m talking about BitTorrent, which allows us to send files through a torrent application, which runs the BitTorrent protocol.

## What is the difference between coins and tokens?

Now when we know what blockchain and protocols are, we can explain the difference between coins and tokens. We said already that most people often use them interchangeably. As you would see, there is a difference between the two, even though it’s not as blaring as between Bitcoin and the blockchain.

If we have to divide cryptocurrencies into groups, we would have:

1. Bitcoin and Altcoins/coin
2. Tokens

The name “altcoin” comes from alternative coins. All cryptocurrencies created after Bitcoin are altcoins. For example, ​Ripple, ​Cardano, Monero, or Litecoin. Sometimes they are simply called “coins” for short.

Most altcoin cryptocurrencies are build using the original Bitcoin protocol. That doesn’t mean that they are identical with Bitcoin. The developers have made changes in the code, which results in a new coin with new features, which bears a similarity to Bitcoin. Examples of such coins are Litecoin, Bitcoin Cash, and Namecoin.

Others, like Ethereum, have their unique blockchain and protocol, which doesn’t have anything to do with Bitcoin. They also offer some additional features, which we are going to discuss later.

## What are coins?

So, coins are the native digital assets of their blockchain. In simple words, Bitcoin operates on the Bitcoin blockchain following the Bitcoin protocol. It can’t function or operate on another blockchain like Ethereum. That’s why, if you want to buy something with bitcoins, you can’t do it on Ethereum. You’ll have to convert the bitcoin into Ether.

Since most altcoins follow the steps of Bitcoin, they have the same goals as Bitcoin – to function as money. In other words, they are a unit of account, a store of value, and a medium of exchange. You can store them if you like and wait for their price to go up and then sell. You can use them to buy goods, or you can exchange them for other digital currencies.

However, some altcoins like Ethereum doesn’t function simply as currencies. And here is where tokens come into the picture, and things get complicated.

## What are tokens?

Tokens exist on top of another blockchain, so they are not a separate currency with its own blockchain. While “coins” are used to purchase goods or pay for services, tokens can represent anything tradable – a utility, an asset or both. Also, coins can exist independently, but tokens can’t.

Usually, people create tokens on the Ethereum platform, but you can also use NEO or Waves. Unlike “coins” like Bitcoin, which require significant processing power to mine, tokens are easy to create by following the provided template on the platform. Even someone with little programming experience can do it, as long as he is ready to try.

However, to build tokens, you need “coins.” Did you get confused already? Let’s illustrate. If you want to make a token on Ethereum, you’ll have to spend some Ethers (the native digital asset of the Ethereum blockchain) to validate the creation. You’ll also have to pay fees if you want to send the token to someone else.

## Bitcoin's Monetory policy

Every country has a simple authority which determines/decides/controls how much of money will be in circulation in our system.
To maintain the demand and supply of money, Monetory policies are used.
Since, Bitcoin is also related to money/transaction, there has to be some monetory policy for it to control its supply.

The two principles given by Satoshi Nakamoto for bitcoin's monetory policy are :

1. Halving
2. Block Frequency

- **Halving**
  <br/>
  It states that when the number of block increases by 210,000 then the reward value id decreased by half.
  <br/><br/>
  ![image](https://github.com/Jigsaw-23122002/Blockchain/blob/master/Information/14.png)

  In the above table we can see that in 2009 the number of blocks was 0 and at that time the reward given for mining a particular block was 50 bitcoins. But as the mining increased and when the number of blocks mined reached 210,000 in 2012 then after that the reward for mining a new block was halved to 25 bitcoins only.
  So, In this way it is estimated that in 2140 the reward of mining the block will be 0 bitcoins.

  Satoshi estimated this start value of 50 bitcoins by considering the constraint that only 21 million bitcoins will be available for transaction in all together.
  The algorithm is designed such that it automatically keeps the track when to half the value.

## How mining works ?

The Miners solve the mathematical problem to mine the blocks. Now to understand what kind of mathematical problem is solved by them, we have to first understand the concept of NONCE(a number).

Now solving a particular mathematical problem for miners is to generate the block with hash which is very close to some target value. Now the general structure of block in the block chain is shown below -

![image](https://github.com/Jigsaw-23122002/Blockchain/blob/master/Information/15.png)

Now, we can see that the fields block no., data and previous hash cannot be changed by us. So the only thing we can change is the field called NONCE, such that the hash generated is close to the target value. So solving the mathematical problem means selecting a value for nonce such that the hash generated after passing the through SHA-256 is very close to the target value.

Use this website to have a testing experience : https://demoblockchain.org/block

So basically, NONCE is a number that blockchain miners are solving for.

**Target**

1. Target is a number used in mining.
2. It is a number that a block hash must be below for the block to be added on to the blockchain.
3. The target adjusts every 2016 blocks (roughly 2 weeks) to try and ensure that the blocks aare mined once every 10 minutes on an average.

Target hashes can be visualized as -

![image](https://github.com/Jigsaw-23122002/Blockchain/blob/master/Information/16.png)

Here we can see that the all possible hashes are from 0000000.......00 to fffffffff.......ff. Now suppose target value is set to something like it must start with 4 zeroes, so the miner hash to select such a NONCE such that the generated hash lies between the smallest hash (0000000......00) and the target hash (0000ffff.....ff).
The miner will continue to change the nonce unless it gets the satisfactory hash.

![image](https://github.com/Jigsaw-23122002/Blockchain/blob/master/Information/17.png)

In above figure we can see that on putting the nonce value as 100, the hash is not valid.But when we put nonce value as 512, a valid hash is generated as show in figure below.

![image](https://github.com/Jigsaw-23122002/Blockchain/blob/master/Information/18.png)

This means the miner has successfully mined the block.

**_The change of target is handle automatically by the algorithm i.e. it is not manually changed by anyone_**
The Bitcoin's target history can be seen below -

![image](https://github.com/Jigsaw-23122002/Blockchain/blob/master/Information/19.png)

## CPU vs GPU vs ASIC

These are the technologies which are used to generate the hashes by the miners in order to mine the block.
Let's consider the example, Suppose a person A generates 5 hashes per second and checks fro its validity and there is another person B who generates 10 hashes per second and checks for its validity. So obviously the probability of person B hitting the target is more as compared to person A.
That means the more advance technology one use for generating hash more is the probablity of mining the block for the block chain.

![image](https://github.com/Jigsaw-23122002/Blockchain/blob/master/Information/20.png)

In the above image, we can see that the hashes generated by CPUs is 1 Million hashes per second, GPU generates 1 Giga hashes per second and ASIC generates more than 1000 giga hashes per second.

## Mining Pool

Suppose miners individually try to mine the block but among them suppose there are some bulk miners with much higher power of mining technologies, then in such cases the individual miners will suffer as their chance of mining the block individually is very less.
So in such cases what miners do is that they form the groups among themselves to mine the block which is called as the MINING POOL and on mining the block successfully the reward is divided based on the computing power of the miner's technology.
The higher percentge of the reward will be given to the miner providing higher power technology for mining the block.

![image](https://github.com/Jigsaw-23122002/Blockchain/blob/master/Information/21.png)

If any new miner has to join the mining pool then by paying small amount in terms of bitcoin, the new miner can join the pool. Also the new miner doen't have to do much, he/she just have to start the machine to generate the hashes.
One can see the hash rate distribution on - https://www.blockchain.com/explorer/charts/pools

## Nonce Range

Nonce is a 32 bit integer. So we can max generate 2<sup>32</sup>-1 nonce values i.e. around 4 billion nonce values. This simply implies that we can generate at max 4 billion hashes for any particular block.
Also SHA-256 is a 64 character long string and at every place we have 16 choices of hexadecimal numbers.So there are 16<sup>64</sup> hashes possible.(i.e. 2<sup>256</sup> hashes)

Now it is possible that all the values of hashes generated by all the nonce doesn't lie in the target range and all the nonce get exhausted. This can be visualized with the help of the diagram below -

![image](https://github.com/Jigsaw-23122002/Blockchain/blob/master/Information/22.png)

In the above figure, we can get the situation that all the hashes generated by all nonce is not valid but there is a possibility that the some value among the unmapped values were the valid ones.
Now what the miners will do ? They will never be able to hit the target value 😥.

So this is solved by concept of Timestamp😀.

## Timestamp

Now in order to have all the possible combinations of the hashes, we introduce a new field in the block called as time which is UNIX time.

![image](https://github.com/Jigsaw-23122002/Blockchain/blob/master/Information/23.png)

We can see int the above image that even for the same nonce, the hash generated will be different because timestamp field will be ever increasing.
So with the help of this, we will be able to access all the possible hashes

Now in every one second, the timestamp field will change, so the nonce will start from the 0 at every second. And also in one second max of 0.1 billion nonce will only be utilized that means we will never be using the entire nonce range instead using part of it, we will be able to explore all the hashes.

Current hashing rate is 180 million trillion hashes/sec for a network.
One can watch current hashing rate on - https://www.blockchain.com/explorer/charts/hash-rate

If the hashing rate is so high then all the nonce will be cumulatively exhausted by the miners of the network in just 10<sup>-9</sup> seconds only.
Also the timestamp will change only after 1 second.
Then what should the miners do for the idle time? as they cannot explore more as everything is already explored.

![image](https://github.com/Jigsaw-23122002/Blockchain/blob/master/Information/24.png)

## Mempool

Mempool is basically the list of unconfirmed transaction. Unconfirmed transaction are those transactions which are not still recorded in the blockchain.
Miners while mining the block, picks up the transactions from this transaction and it is completely in their hand which transaction to be picked. Each transaction is associated with unique trnsaction id and an associated fees that the miner will get on confirming this transaction by adding it into the block.
So, Obviously, the miners picks up the transactions for which they will get more fees.In the image below, we can see that the top four transactions with highest fees are picked up as miner will be getting more fees by confirming that transaction.

![image](https://github.com/Jigsaw-23122002/Blockchain/blob/master/Information/25.png)

Now, we had already studied about the problem related to the idle time due to the hash rate and the timestamp. The nonce range is easily exhausted in 4 _ 10<sup>-9</sup> seconds and the timestamp can only change after 1 second. Now, we know that in order to change the hash of the block, we can also change the transaction field of the block. So now what the miners do is after 4 _ 10<sup>-9</sup> seconds, the miners picks up the transaction providing the minimum fees among the selected transactiion and replace it with the transaction providing the fees just less than the picked up transaction.
Considering the above example, we can have -

![image](https://github.com/Jigsaw-23122002/Blockchain/blob/master/Information/26.png)

In this way, the algorithm ustilises the idle time of the hashing.
Also, it is quite possible that some transaction has so low fees that the mineers always avoid to pick and under such cases the traansactions are removed from the mempool after 72 hrs.
So it is always advised to keep considerable fees for confirming the transaction.

## How mempool works ?

Each miner in the network and each person/device doing transaction is associated with its own seperate mempool.
Whenever any person does some transaction then that transaction is added to its mempool. After that this newly added transaction is conveyed to the neighbours and they also add this new transaction in their mempool and similarly conveys this effect forward (similar to domino effect).
The process can be visualized as (The person with yellow arrow did the transaction and conveyed it to the three of its neighbours) -

![image](https://github.com/Jigsaw-23122002/Blockchain/blob/master/Information/27.png)

In this way, Each and every transactions are stored in everyone's mempool. When any miner try to mine the block, it picks the transactions from its mempool and if it successfully mines the block, then it deletes the transactions which is put into the block from the mempool and add the new block into the blockchain and this information is communicated to all the neighbours and the same changes are done by everyone in the network in their mempool and blockchain. This process is also same as that of the domino effect. The visualization can be seen in the figure below -

![image](https://github.com/Jigsaw-23122002/Blockchain/blob/master/Information/28.png)

After successfully communicating the information throughout the network, we get something like -

![image](https://github.com/Jigsaw-23122002/Blockchain/blob/master/Information/29.png)

One can check the live addition of the transactions into the mempool on - https://www.blockchain.com/explorer/mempool/btc

## Transactions and UTXO's and Transaction fees

The transactions in blockchain are quite different as compared to the one we do in banks.
For better understanding of this concept refer this - https://www.youtube.com/watch?v=bRII0JGHyvM&list=PLgPmWS2dQHW-BRQCQCNYgmHUfCN115pn0&index=24

For better understanding of transaction fees refer this - https://www.youtube.com/watch?v=W_C7ms6rGPo&list=PLgPmWS2dQHW-BRQCQCNYgmHUfCN115pn0&index=25

## Cryptocurrency Wallets

We know that the blockchain is a distributed technology. There is no central authority which keeps the track of all our transaction and the net balance of cryptocurreny of any particular individual. Cryptocurrency Wallets are the one which shows us our net balance of cryptocurrency of any individual. But here arises the question - How is this possible to keep the track of the individual's cryptocurrency if there is no central technology and using blockchain.

Now let's consider the scenario. Suppose Arjun, Raj, Alice and Bob pays me 0.4, 0.3, 0,7 and 0.1 BTC and then I buy a coffee of 0.5 BTC for which I use the transaction of Alice and mark that transaction as used in which I pay 0.5 BTC to coffee shop and 0.2 BTC to me. Suppose the first four transactions recide in block 1 and next 2 transactions recide in block 2 of the blockchain.

The following condition is illustrated in below figure -

![image](https://github.com/Jigsaw-23122002/Blockchain/blob/master/Information/30.png)

Let's suppose again Arjun, Raj, Alice and Bob pays 0.4, 0.3, 0.7 and 0.1 BTC to me and then I decided to buy noodles for 1.4 BTC for which I utilise the Arjun, Raj and Alice's transaction. So I pay 1.4 BTC to Noodle shop and marks the those three transactions as used. Suppose the new transaction of Arjun, Raj, Alice and Bob is stored in block 3 and the transaction of noodle shop is stored in block 4.

The following condition is illustrated in below figure -

![image](https://github.com/Jigsaw-23122002/Blockchain/blob/master/Information/31.png)

Now in order to have a wallet for any particular individual, the blockchain is scanned throughout and cumulates all ths unused transaction such that X -> Me.

![image](https://github.com/Jigsaw-23122002/Blockchain/blob/master/Information/32.png)

## Private and Public Key

In the above scenario, It is quite possible that the miners can be hackers itself and while putting the transaction into the block, they manupulated the transaction 😈. So in order to avoid such manupulation of the transactions by anyone, the concept of private and public key comes into the play.

Let's consider an example of gmail to understand this concept. The gmail name (e.g. alice@gmail.com) is like a public key which everyone knows that this is the email of person named alice. But private key is like the password of this email. Now this password is known to only Alice and has to keep it safe such that no one else can know that password.

Now let's suppose Alice have to send some message, but how the reciever will know that this message which is sent from the mail of alice@gmail.com is actually sent by Alice. This is identical to the situation that - How the miner will know that the transaction he/she is pulling from the mempool is actually a valid transaction and is not manupulated.

So, with every message a private key is attached and by combining the private key and the message, a signature is generated. Now using this signature, the message and the public key the message is verified by passing through the VERIFICATION FUNCTIONS which responds with "YES" if the message is sent by the valid user and "NO" in case the message is not sent by the valid user.

![image](https://github.com/Jigsaw-23122002/Blockchain/blob/master/Information/33.png)

For demo of private and public key refer -
<br/>
Website Link - https://tools.superdatascience.com/blockchain/public-private-keys/keys
<br/>
Video Link - https://www.youtube.com/watch?v=zgJYNhIQpAI&list=PLgPmWS2dQHW-BRQCQCNYgmHUfCN115pn0&index=28

## Segregated Witness

Generally the size of the block in the blockchain is 1 MB. So if we increase the size of the block, then the more transactions can be filled into one particular block and this is advantageous because the miners will get more rewards by filling more transactions in mining just 1 block.
<br/>
But the disadvantage is that the block will be needing more bandwidth for propogating through the network. So we cannot increase the size of the block after certain level. So the size of the block was universally decided as 1 MB. But in 2017, There was drastic increase in the transaction using blockchain. So 1 MB was very less to handle so many transactions.
<br/>
Also if we observe the transaction details, then for any particular transaction, 60 to 65 precent of data which we are storing for the transaction is to just check whether the transaction is valid or not and there is no other use of that data.

![image](https://github.com/Jigsaw-23122002/Blockchain/blob/master/Information/34.png)

So for transfer of data, what they did is they started transfering signature and public key seperately and the relevant details of transaction seperately. This is why it is known as segregated witness.
<br/>
So now more transactions can be filled into the block.

## Public Key and Bitcoin Address

We know that the public key is generated by running the algorithm on the private key. So considering the fact that in future there might be the situation that someone will decode the algorithm of generating the public key from the private key. So let's consider the situation that the person A decodes the algorithm and by doing so passes the public key of person B into the reverse of the algorithm generating the private key of the person B. So person A can put a transaction B gives the X BTC to A by using the private key of B which he got from the reverse off the algorithm. So this way A can make anyone pay him by finding the private key of anyone. So to avoid this there is a concept called the bitcoin address

![image](https://github.com/Jigsaw-23122002/Blockchain/blob/master/Information/35.png)

Bitcoin address is used to add an extra level of security. So whenever the transaction is to give the money to any other user then the bitcoin address is used so as to avoid the reverse engineering of the private key from the public key. But for transaction involving giving the money, using public key is not dangerous.

## Hierarchically Deterministic (HD) wallets

In this generation, the hackers are quite smart. If we have only one private key then we can only have one corresponding public key and one corresponding bitcoin address. So if we do all transactions using the same bitcoin address and same public key then it can be quite easy for the hackers to determine the patterns of your transaction and can exploit the privacy of anyone. So inorder to avoid this, the concept of Hierarchical Deterministic wallets was introduced.

![image](https://github.com/Jigsaw-23122002/Blockchain/blob/master/Information/36.png)

So, There is one master private key of each user and while each transaction the new temporary private key is generated and using this temporary private key, a temporary public key and the bitcoin address is generated and the transaction is done using this temporary public key or bitcoin address.
<br/>
In this way, hacker will not be able to track anything of the one who is doing the transaction because everytime he will see different public key/bitcoin address.
<br/>
Also the master key keeps the track of the generated temporary private keys. But wise versa is not possible i.e. one cannot determine the master private key using any of the generated temporary private keys.

# Ethereum

![image](https://azcoinnews.com/wp-content/uploads/2020/06/ethereum-wallets-with-at-least-32-eth-the-amount-required-for-eth-2-0-staking-have-grown-by-13-this-year.jpg)

Ethereum is an open source blockchain based platform. Ethereum provides ether for transaction just like Bitcoin which provides bitcoins for transaction.

## Ethereum nodes

Ethereum is nothing but a system that runs on P2P distributed technology (decentralized system).
In the below diagram, A, B, C, F and E are the ethereum nodes.

![image](https://github.com/Jigsaw-23122002/Blockchain/blob/master/Information/37.png)

Type of Ethereum nodes :

1. Full node - Generally miners are the full nodes. They locally stores the copy of the entire blockchain. They verifies and validate all the blocks
2. Archieve node - This is a type of full node but it stores entire history of the blocks of the blockchain. So it requires the terabytes of disk space.
3. Light node - These are the nodes which are basically present just for doing the transactions. They do not have enough memory to store the entire blockchain. So they only store the header of the blocks of the blockchain. So basically whenever complete detail of block is required then the light node depends on the full node because it only stores the headers of the block. It can be understood like - the light node contains the index but full node contains the entire book.

## Ethereum account

An ethereum account is an entity with an ether (ETH) balance that can send or receive transactions on ethereum.
<br/>
There are two types of ethereum accounts:

1. Externally Owned account (EOA)
2. Contract Account

Whenever an account is created on the ethereum, an Externally Owned Account (EOA) is created which is accessed using the private key. For checking the balance in terms of ether, fro send transaction, for recieve trasaction and to have smart contract we need the Externally Owned Account (EOA).

Now contract account are controlled by contract code.

Smart contract is a program which runs on the ethereum blockchain.
Let's consider an example, suppose A wants to deliver fruits to B and they are at some distance. Now considering all the situations that can root the fruit before delivering it to B, A will try to take all the possible measure to prevent the fruits from getting rotten. Let's consider that the fruits will be safe if the temperature of the container in which fruits are kept is less that 20 Degree Celcius. So, This is programmed as a smart contract and is kept on the blockchain. So this ensures that the smart contract cannot be changed and manupulated.
<br/>
So the smart contract program for this situation will look something like -

![image](https://github.com/Jigsaw-23122002/Blockchain/blob/master/Information/38.png)

Now on delivery, the program of this smart contract is executed and depending upon the output, the decision is taken whether to pay or not.
So this ensures the perfect process of decision making.

So to host such contract on the ethereum, we need a contract account on the ethereum so that we can run these programs.
<br/>
So basically the contract account is created when we deploy any smart contract on to the ethereum blockchain.

## EOA vs CA

![image](https://github.com/Jigsaw-23122002/Blockchain/blob/master/Information/39.png)

The gas means the cost. No gas is associated with the creation of Externally Owned Account (EOA) where as the cost is assoiciated with the creation of Contract Account as we are deploying our program on to the blockchain which requires an additional space on the block.
<br/>
Also both of them requires unique address because if suppose someone wants to send the ether then there shoud always be some unique address so that the sender can send the ether on that address. Similarly to access any contract there must be some unique address associated with that contract otherwise we won't be able to access that contract.

## Smart Contract

Smart Contract is a program that runs on the ethereum blockchain.
<br/>
Why the concept of Smart Contract introduced in Ethereum but not in Bitcoin ?
The reason was - when satoshi nakamoto introduced the concept of Bitcoin, scripting language used was BITCOINSCRIPT which is not turing complete language while the ethereum was designed using the SOLIDITY language which is turing complete. Now turing complete languages are those languages in which we can write any logic or program but in non turing languages (for e.g. there is not concept of looping), we cannot write complex codes due to unavailability of the basic programming features in a language.

This is the reason why, Bitcoin do nnot have the concept of Smart Contract in it.

Now there are some disadvantages of using the solidity as language. Because if some user put some code containing infinite loop into the blockchain and as the blocks are immutable ledger, the code will run for infinite time and the blockchain network becomes slow.
<br/>
This was also one of the reason solidity was not used by satoshi nakamoto in Bitcoin.

Now inorder to overcome this challenge into the ethereum, the founder of ethereum introduced a constraint that one has to pay the amount which is directly proportional to the computations his/her program will be doing while executing the code.
<br/>
So if hackers introduced the code into the ethereum blockchain which is doing large computations too slow down the network then it will be them who will be suffering because the cost they will be charged to run that high computation program will also be very high.

Ethereum block looks something like -

![image](https://github.com/Jigsaw-23122002/Blockchain/blob/master/Information/40.png)

Each node in the blockchain network has -

1. Current state of all smart contracts
2. History of both the transaction and the smart contract.

## Decentralized apps (Dapps)

Centralized applications are like Facebook, twitter, Youtube, etc. These have a common servers on which multiple clients send the request and they get the corresponding response.
Now in decentralized apps, the applications are hosted onto the blockchains using the Smart Contract as the backend. These Smart Contracts are running on each and every node of the blockchain network.

Decentralized apps -

![image](https://github.com/Jigsaw-23122002/Blockchain/blob/master/Information/41.png)

Centralized vs Decentralized apps -

![image](https://github.com/Jigsaw-23122002/Blockchain/blob/master/Information/42.png)

Centralized applications are not trustworthy because we are not aware of how much of data they are taking from the users; We do not know what code is written in the backend. But in case of the decentralized apps, the code is open source and we can see that code. The code is kept open source within any risk because the hosted code cannot be changed by anyone as it is hosted on block which is immutable in blockchain.
<br/>
The admin has the full control over disabling anyone's account i.e. they has the full censorship. But in case of the decentralized applications, the data once written cannot be changed by anyone.
<br/>
In decentralized applications, you are paid for watching the ads while using the application. But in centralized apps, you are paying in the sense by paying the attention to the ads you are watching and they won't pay you for watching those ads.
<br/>
The centralized applications can go down as they have the central servers. But in case of decentralized applications, these applications run on all the nodes of the network so they can never go down.

## Ethereum Virtual Machine (EVM)

Now it is possible that some hacker introduces such a code into the new block of the blockchain such that using those codes he can access our personal data, webcam, emails, etc (basically virus). So it such a block is there in a blockchain and blockchain being the decentralized system will introduce such block in all the nodes of the network leading to virus in all the nodes of the network.
<br/>
So in order to avoid the introduction of such virus in our system, the ethereum blockchains are present on the Ethereum virtual machines instead of on our own machine. Now the virtual machines do not have the access to the webcam and the personalized information of our system helping us in maintaining ours security.(We know that when we run the linux virtual machine on our system using virtual box, it does not have any access to the contents which is present on our windows system.

## Ethereum Gas

Suppose we want the car to move from place A to place B. So achieve this process, we need to have some minimum amount of fuel. In the same way, when we want to run some smart contract on the ethereum blockchain, we need the ethereum fuel to do so.
<br/>
So for each operation in smart contract there is some cost of gas associated with it.
For e.g. - Multiplication requires 5 gas, Subtraction requires 3 gas and equal to operation requires 3 gas.
<br/>
So total gas requirement for running the operation 10\*3 - 6 = ? is 5+3+3 which is 11 gas is required.
<br/>
We can see the cost of operation from - https://github.com/djrtwo/evm-opcode-gas-costs/blob/master/opcode-gas-costs_EIP-150_revision-1e18248_2017-04-12.csv

Note -

1. Any transaction that modifies the blockchain costs the gas.
2. The user that generated the transaction pays for the gas.

## Ethereum Gas Price

Let's consider the example, Suppose we have to go to point B from point A and for doing so we require 10 litres of petrol. Suppose the cost of 1 litre of petrol is 5 Rs. So that means to go from point A to point B, we require 50 Rs.
<br/>
So in the same way, the number of litres is the number of gas and the cost of 1 litre of petrol is the Gas Price. So Gas Price is the amount the sender wants to pay per unit of gas to get the trasaction mined.
<br/>
Gas price are denoted in gwei (For e.g. 1 gwei = 10<sup>-9</sup> ETH (Ether))
The Gas price for any transaction is decided by the sender. The higher the sender set the gas price in terms of ether, more is the probablity that the miner will pick our transaction first.

## Ethereum Gas Limit

It is the maximum amount of gas the ttransaction will consume. It is set by the sender.
<br/>
Let's say that A has to pay 2 ETH to B. So what will be the total fees that A has to pay.
<br/>
Let's say that A set gas price per unit as 100 gwei.
<br/>
Let's say that A calculated the gas limit of his transaction as 21,000 units.
<br/>
So the total fee will be calculated as - **Gas units(limit) x Gas price per unit**
<br/>
So total fees will be - 21,000 x 100 = 21,00,000 gwei or 0.0021 ETH.
<br/>
So, this was the case when the transaction limit was equal to 21,000.

Case when the transaction limit was less than 21,000 but the requirement was 21,000.
<br/>
Suppose the transaction gas limit was set to 20,000. So in this case, the transaction will fail because the actual requirement was 21,000 and the sender only sent the cost for 20,000. In such case, the cost paid for 20,000 will not be returned because although the transaction failed, the miner has performed some work, so he has to be paid for that.

Case when the transaction limit was more than 21,000 but the requirement was 21,000.
<br/>
Suppose the transaction gas limit was set to 22,000. So after the transaction has completed the cost paid for extra 1,000 will be given back to the sender; means there is no loss in paying more that limit.

So one can think that what is the use of gas limit ?, We could have directly ran the program and the cost for that would have been charged to the deployer.
<br/>
But suppose the person by mistakenly deployed the program having infinite loop, then in such case the Ether will be contineously be deducted from the deployers account and this loss can be high. So the concept of gas limit was introduced so that the deployer prior to the deployment have a complete idea about the runtime of the program.

Ethereum block - https://etherscan.io/block/16312315

## Decentralized Autonomous Organization (DAO)

A decentralized autonomous organization (DAO), sometimes called a decentralized autonomous corporation (DAC),is an organization constructed by rules encoded as a computer program that is often transparent, controlled by the organization's members and not influenced by a central government. In general terms, DAOs are member-owned communities without centralized leadership. A DAO's financial transaction records and program rules are maintained on a blockchain. There is no such human interventions.

Difference between DAO and Organization -

![image](https://github.com/Jigsaw-23122002/Blockchain/blob/master/Information/43.png)

Let's consider an example - Suppose we want to donate money to the NGO. So first of all we need to have a trust on the NGO that they will be using this donated money for a good use only. So basically we don't know whether the NGO will be making good use or bad use of the donated money.
<br/>
So this trust issue is because the NGO is a human built organization. So instead of making human built organization, we can make a smart contract organization where there is no trust issues as it is a program running on the blockchain which cannot be manipulated by any individual.

## The DAO attack

The DAO was an organization where the investors used to give the ether to the organization and in turn they used to get the DAO tokens.
<br/>
Now those who have the DAO token only had the right to vote for the investment proposals released by the DAO organization.

![image](https://github.com/Jigsaw-23122002/Blockchain/blob/master/Information/44.png)

DAO Timeline -

![image](https://github.com/Jigsaw-23122002/Blockchain/blob/master/Information/45.png)

There was a fault in the code of the smart contract which hackers/group of hackers found and stole 60 to 65 million dollars of funding from the DAO organization.
<br/>
To counter the attack, the first proposal was established by the DAO organization and the hard fork was completed around 1 month later. Hard fork divided the ethereum blockchain into 2 parts called ethereum classic blockchain and ethereum blockchain.

## Hard Fork

Now when the DAO organization was under the attack, the smart contract has to be changed. But it was designed such that it cannot be changed. So what the DAO decided is to create a new smart contract and because of the concept of immutability, we have to split the blockchain and this process is known as hard fork.
<br/>
So ethereum classic was the blockchain which doesn't allow the smart contract to be chnaged and ethereum blockchain allowed the smart contract to be changed. (So after 191999 block, this splitting of blockchain took place)

So during hard fork, Software implementing a protocol and it's mining procedures are upgraded.
<br/>
Once the user upgrades their software, that version rejects all transactions from the older software, effectively creating a new branch of blockchain.
<br/>
However, those who retain the old software continue to process transactions.

Such type of hard fork was also performed by the bitcoin after knowing the concept of sigbit. So in July 2017, the bitcoin community adopted the concept of sigbit doing the soft fork after the block no 476768. But after sometime in august 2017, bitcoin found that the sigbit is a temporary solution to the problem, instead we have to increase the block size of the blockchain and so hard fork took place after block 478558 leading to 2 branches of the blockchain called bitcoin and bitcoin cash.

![image](https://github.com/Jigsaw-23122002/Blockchain/blob/master/Information/46.png)

Now let's see how hard fork takes place -

Suppose at 11 AM, new policy was introduced that allows the max block size to be greater than 1 MB and max upto 8 MB. So suppose at 12 PM, a new block of size 0.7 MB was mined and since it is within the 1 MB size, the blockchain will not branch. So unless the block size is less than 1 MB, the blockchain will not branch. As soon as there is block whose size is greater than 1 MB is mined, the blockchain branches off. And then they parallely starts to expand.

![image](https://github.com/Jigsaw-23122002/Blockchain/blob/master/Information/47.png)

This is known as Hard Fork.

## Soft Fork

![image](https://github.com/Jigsaw-23122002/Blockchain/blob/master/Information/48.png)

![image](https://github.com/Jigsaw-23122002/Blockchain/blob/master/Information/49.png)

Let's consider an example - Suppose after mining the block of 0.4 MB, the network decided to decrease the block size to 0.5 MB at 11 AM. So all the blocks whose size is less than or equal to 0.5 will be considered and as soon as the block of size greater than 0.5 is encountered, the branching takes place as shown in the figure. But as the majority lies with the new protocol, the blocks mined by the new branch will be faster and the length will be by default greater. So by the concensus protocol (Longest chain rule) the original chain having blocks size greater than 0.5 has to be rejected and the new chain is the one with block sizes less than or equal to 0.5 MB.

For good understanding refer - https://www.youtube.com/watch?v=3KI6JgY1JAA&list=PLgPmWS2dQHW-BRQCQCNYgmHUfCN115pn0&index=45

## IPO vs ICO

**What is IPO ?**

IPO is initial public offering. The concept is like taking the money from people and offering them shares and using the money of public for making some profit and some part of the profit is shared to the public too.

![image](https://github.com/Jigsaw-23122002/Blockchain/blob/master/Information/50.png)

**What is ICO ?**

ICO is initial coin offering. In this, instead of offering shares to the public, the company provides tokens to the public in exchange for money with the help of which the people can buy the products of the company with less cost than the original price in future.

![image](https://github.com/Jigsaw-23122002/Blockchain/blob/master/Information/51.png)

In ICO's the investors do not have any control over the company. In IPO's, the investors have the part of control of the company as they own the shares.
