import React from 'react'
import Papa from 'papaparse'

import { Flex, Box, Text, Image, Button, Divider } from '../primitives'

exports.dateToString = date => new Date(date).toISOString()

exports.ListParsed = ({ csv }) => {
  return (
    <Flex flexDirection="row" alignItems="center" flexWrap="wrap">
      {csv.meta.fields.map(field => {
        console.log(field)
        return <Text>{field}</Text>
      })}
    </Flex>
  )
}
