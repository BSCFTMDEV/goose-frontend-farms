import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
 
  {
    label: 'NFTS',
    icon: 'NftIcon',
    href: '/nft',
   
    items: 
    [
     {
       label: 'Mint',
       href: 'https://nfts.dogebox.dog/Mint',
     },
     {
       label: 'StakeNFT',
       href: 'https://nfts.dogebox.dog/Mining',
     },
     {
       label: 'Dashboard',
       href: 'https://nfts.dogebox.dog/portal',
     },
     
   ], 
   calloutClass: "rainbow",
  },
  
  {
    label: 'Stats',
    icon: 'RoadmapIcon',
    href: '/',
    calloutClass: "rainbow",
  },


  {
    label: 'Farms',
    icon: 'LayerIcon',
    href: '/farms',
    calloutClass: "rainbow",
  },

  
  {
    label: 'Stake',
    icon: 'BondsIcon',
    href: '/nests',
    calloutClass: "rainbow",
  },


  {
    label: 'Telegram',
    icon: 'TelegramIcon',
    href: 'https://t.me/DogeboxNFT',
  calloutClass: "rainbow",
  },
  {
    label: 'GitHub',
    icon: 'AuditIcon',
    href: 'https://github.com/DogeBoxClub?tab=repositories',
    calloutClass: "rainbow",
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
