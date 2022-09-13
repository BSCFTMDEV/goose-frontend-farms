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
    /*  {
       label: 'StakeNFT',
       href: 'https://nfts.dogebox.dog/Mining',
     }, */
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
    label: 'Chart',
    icon: 'InfoIcon',
    href: 'https://dexscreener.com/',
    calloutClass: "rainbow",
  },


  {
    label: 'GitHub',
    icon: 'AuditIcon',
    href: 'https://github.com/DogeBoxClub?tab=repositories',
    calloutClass: "rainbow",
  },

 /* {
    label: '',
    icon: 'InfoIcon',
    items: [
      {
        label: '',
        href: '',
      },
      {
        label: 'CoinGecko',
        href: '',
      },
      {
        label: 'CoinMarketCap',
        href: '',
      },
      {
        label: 'AstroTools',
        href: '',
      },
    ],
  }, */
 
]

export default config
