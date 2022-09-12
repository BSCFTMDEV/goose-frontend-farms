import React from 'react'
import { Card, CardBody, Heading, Text } from '@pancakeswap-libs/uikit'
import BigNumber from 'bignumber.js/bignumber'
import styled from 'styled-components'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import useI18n from 'hooks/useI18n'
import { getCakeAddress } from 'utils/addressHelpers'
import CardValue from './CardValue'
import { useFarms, usePriceCakeBusd, useTotalValue } from '../../../state/hooks'




const StyledCakeStats = styled(Card)`
  margin-left: auto;
  margin-right: auto;
`

const Row = styled.div`
  align-items: center;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  margin-bottom: 8px;
`

const CakeStats = () => {
  const TranslateString = useI18n()
  const totalSupply = useTotalSupply()
  const burnedBalance = useBurnedBalance(getCakeAddress())
  const farms = useFarms();
  const eggPrice = usePriceCakeBusd();
  const circSupply = totalSupply ? totalSupply.minus(burnedBalance) : new BigNumber(0);
  const cakeSupply = getBalanceNumber(circSupply);
  const marketCap = eggPrice.times(circSupply);
  const totalValue = useTotalValue();
  
  
    let DogeboxPerBlock = 0;
  if(farms && farms[0] && farms[0].DogeboxPerBlock){
    DogeboxPerBlock = new BigNumber(farms[0].DogeboxPerBlock).div(new BigNumber(10).pow(18)).toNumber();
  }

  return (
    <StyledCakeStats>
      <CardBody>
        <Heading size="xl" mb="24px" color= "#A5A7C7"     >
          {TranslateString(534, 'DBT Stats')}
        </Heading>
        <Row>
          <Text color= "#A5A7C7" fontSize="18px">{TranslateString(10005, 'Market Cap')}</Text>
          <CardValue fontSize="20px" value={getBalanceNumber(marketCap)} decimals={0} prefix="$" />
        </Row>
        <Row>
          <Text color= "#A5A7C7" fontSize="18px">{TranslateString(536, 'Total Minted')}</Text>
          {totalSupply && <CardValue fontSize="20px" value={getBalanceNumber(totalSupply)} decimals={0} />}
        </Row>
        <Row>
          <Text  color= "#A5A7C7"  fontSize="18px">{TranslateString(538, 'Total Burned')}</Text>    
          <CardValue  fontSize="20px" value={getBalanceNumber(burnedBalance)} decimals={0} />
        </Row>
        <Row>
          <Text color= "#A5A7C7" fontSize="18px">{TranslateString(10004, 'Circulating Supply')}</Text>
          {cakeSupply && <CardValue   fontSize="20px" value={cakeSupply} decimals={0} />}
        </Row>
        <Row>
          <Text color= "#A5A7C7"fontSize="18px">{TranslateString(540, 'New DBT/block')}</Text>
          <Text   bold fontSize="20px">{DogeboxPerBlock}</Text>
          </Row>
        <Row>
          <Text color= "#A5A7C7" fontSize="18px">{TranslateString(1000, 'MaxSupply')}</Text>
          <Text  fontSize="20px">{TranslateString(1000, '100.000.000')}</Text>
        </Row>
        
        
        <Row>
       <Text  fontSize="20px" color= "#A5A7C7" >  {TranslateString(1000, 'TotalValueLocked (TVL)')}</Text>
       <CardValue value={totalValue.toNumber()} prefix="$" decimals={2}/>
      {/*    <Text  fontSize="12px" color= "#DA5822">{TranslateString(999, 'Farms and Pools')}</Text>  */}
        </Row>

      </CardBody>
    </StyledCakeStats>
  )
}

export default CakeStats
