import React, { useState, useEffect } from 'react'
import Papa from 'papaparse'

import { Flex, Box, Text } from '../primitives'
import { ListParsed } from './Utils'

const Upload = () => {
  const [csv, setCSV] = useState({})

  const changeFile = event => {
    let file = event.target.files[0]
    
    Papa.parse(file, {
      header: true,
      dynamicTyping: true,
      complete: results => {
        setCSV(results)
      }
    })
  }

  return (
    <Flex px={[10, 8, 8]} py={5} flexDirection="column" alignItems="center">
      <Box>
        <Text fontSize={4}>Upload file</Text>
        <Box my={2} />
        <input type="file" accept=".csv" name="file" onChange={() => changeFile(event)} />
        {csv.meta ? <ListParsed csv={csv} /> : null}
      </Box>
      
    </Flex>
  )
}

export default Upload
