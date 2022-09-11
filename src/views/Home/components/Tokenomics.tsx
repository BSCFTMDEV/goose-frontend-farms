import React from 'react'
import { Card, CardBody, Heading, Text } from '@pancakeswap-libs/uikit'
import BigNumber from 'bignumber.js/bignumber'
import styled from 'styled-components'
import { Timeline } from 'react-twitter-widgets'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import useI18n from 'hooks/useI18n'
import { getCakeAddress } from 'utils/addressHelpers'
import CardValue from './CardValue'
import { useFarms } from '../../../state/hooks'

const StyledTokenomicsCard = styled(Card)`

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

const TokenomicsCard = () => {
  const TranslateString = useI18n()

  return (
    <StyledTokenomicsCard>
      <CardBody>
        <Heading size="xl" mb="24px">
          {TranslateString(1000, 'TOKENOMICS')}
        </Heading>
  {/*      <div>
  <img src="" alt="" width={500} height={500} />
         </div> */}
  </CardBody> 
    </StyledTokenomicsCard>
  )
}
 
export default TokenomicsCard
