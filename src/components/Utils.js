import React from 'react'

import { Table } from './Table'
import { Flex, StyledTable } from '../primitives'

exports.dateToString = date => new Date(date).toISOString()

exports.ListParsed = ({ csv }) => {
  const columns = [
    {
      Header: `CSV File Parsed: ${csv.fileName}`,
      columns: csv.meta.fields.map(field => ({
        Header: field,
        accessor: field
      }))
    }
  ]

  return (
    <Flex flexDirection="row" alignItems="center" flexWrap="wrap">
      <StyledTable>
        <Table columns={columns} data={csv.data} />
      </StyledTable>
    </Flex>
  )
}
