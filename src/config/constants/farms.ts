import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 3,
    lpSymbol: 'DBT-BUSD LP',
    lpAddresses: {
      2000:'0xB324176a4DF66B4CbE5148C7fef090F4116D27b2',
      
    },
    tokenSymbol: 'DBT',
    tokenAddresses: {
      2000:'0x2279c88fa9329FCc1070Ad5FC471Ad00D138ac94',
      
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  }, 

  {
    pid: 1,
    risk: 5,
    lpSymbol: 'DBT-WDOGE LP',
    lpAddresses: {
      
      2000:'0x690fde17CdaBe13e3fEd858313fF9FD6C9a9FA39',
    },
    tokenSymbol: 'DBT',
    tokenAddresses: {
      
      2000:'0x2279c88fa9329FCc1070Ad5FC471Ad00D138ac94',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  }, 

  {
    pid: 2,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'DBT',
    lpAddresses: {
    
      2000: '0xB324176a4DF66B4CbE5148C7fef090F4116D27b2', 
    },
    tokenSymbol: 'DBT',
    tokenAddresses: {
      
      2000: '0x2279c88fa9329FCc1070Ad5FC471Ad00D138ac94',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  }, 
 
  {
    pid: 3,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'DC',
    lpAddresses: {
      
      2000: '0xd2333137d28710acEd9E8572D8bf4Baf184e6d16',
    },
    tokenSymbol: 'dc',
    tokenAddresses: {
      
      2000: '0x7B4328c127B85369D9f82ca0503B000D09CF9180',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
/*
  {
    pid: 4,
    risk: 5,
    lpSymbol: 'USDC-WWDOGE LP',
    lpAddresses: {
      
      2000:'0x8dcebe9f071562d52b5abb17235f3bca768c1e44',
    },
    tokenSymbol: 'EGG',
    tokenAddresses: {
      
      2000:'0x385e69eE31858d98c7346aD109FB795786bFF8C4',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  }, 

*/

/*
  
 
 
   /* {
    pid: 13,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'BUSD',
    lpAddresses: {
      97: '',
      56: '0x19e7cbecdd23a16dfa5573df54d98f7caae03019', // EGG-BUSD LP (BUSD-BUSD will ignore)
    },
    tokenSymbol: 'BUSD',
    tokenAddresses: {
      97: '',
      56: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  
  {
    pid: 15,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'USDT',
    lpAddresses: {
      97: '',
      56: '0xc15fa3e22c912a276550f3e5fe3b0deb87b55acd', // USDT-BUSD LP
    },
    tokenSymbol: 'USDT',
    tokenAddresses: {
      97: '',
      56: '0x55d398326f99059ff775485246999027b3197955',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  
  {
    pid: 17,
    risk: 2,
    isTokenOnly: true,
    lpSymbol: 'ETH',
    lpAddresses: {
      97: '',
      56: '0xd9a0d1f5e02de2403f68bb71a15f8847a854b494', // ETH-BUSD LP
    },
    tokenSymbol: 'ETH',
    tokenAddresses: {
      97: '',
      56: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 18,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'DAI',
    lpAddresses: {
      97: '',
      56: '0x3ab77e40340ab084c3e23be8e5a6f7afed9d41dc', // DAI-BUSD LP
    },
    tokenSymbol: 'DAI',
    tokenAddresses: {
      97: '',
      56: '0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 19,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'USDC',
    lpAddresses: {
      97: '',
      56: '0x680dd100e4b394bda26a59dd5c119a391e747d18', // USDC-BUSD LP
    },
    tokenSymbol: 'USDC',
    tokenAddresses: {
      97: '',
      56: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  
  {
    pid: 21,
    risk: 4,
    isTokenOnly: true,
    lpSymbol: 'CAKE',
    lpAddresses: {
      97: '',
      56: '0x0ed8e0a2d99643e1e65cca22ed4424090b8b7458', // CAKE-BUSD LP
    },
    tokenSymbol: 'CAKE',
    tokenAddresses: {
      97: '',
      56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 22,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'BSCX',
    lpAddresses: {
      97: '',
      56: '0xa32a983a64ce21834221aa0ad1f1533907553136', // BSCX-BUSD LP
    },
    tokenSymbol: 'BSCX',
    tokenAddresses: {
      97: '',
      56: '0x5ac52ee5b2a633895292ff6d8a89bb9190451587',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  }, */
  
]

export default farms