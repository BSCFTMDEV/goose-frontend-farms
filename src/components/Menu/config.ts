import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',   
  },
  
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
    calloutClass: "rainbow",
  },
  {
    label: 'Stake',
    icon: 'PoolIcon',
    href: '/nests',
    calloutClass: "rainbow",
  },
   {
     label: 'NFT',
     icon: 'NftIcon',
     items: [
      {
        label: 'Mint',
        href: '',
      },
      {
        label: 'StakeNFT',
        href: '',
      },
      {
        label: 'Dashboard',
        href: 'https://coinmarketcap.com/currencies/goose-finance/',
      },
      
    ],
   },
 /* {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'PancakeSwap',
        href: 'https://pancakeswap.info/token/0xF952Fc3ca7325Cc27D15885d37117676d25BfdA6',
      },
      {
        label: 'CoinGecko',
        href: 'https://www.coingecko.com/en/coins/goose-finance',
      },
      {
        label: 'CoinMarketCap',
        href: 'https://coinmarketcap.com/currencies/goose-finance/',
      },
      {
        label: 'AstroTools',
        href: 'https://app.astrotools.io/pancake-pair-explorer/0x19e7cbecdd23a16dfa5573df54d98f7caae03019',
      },
    ],
  }, */
 
]

export default config
