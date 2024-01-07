import React from 'react'
import { Grid, Row, Column } from 'components/ui/Grid'
import { TickIcon } from 'components/ui/Icon'
import Header from 'components/Header'

const Dashboard = () => {
  return (
    <Grid>
      <Row>
        <Column span={12}>
          <Header />
        </Column>
      </Row>
      <Row>
        <Column span={6}>
          <TickIcon />
        </Column>
        <Column span={6}>This is a half width column</Column>
      </Row>
      <Row>
        <Column span={4}>This is a third width column</Column>
        <Column span={4}>This is a third width column</Column>
        <Column span={4}>This is a third width column</Column>
      </Row>
    </Grid>
  )
}

export default Dashboard
