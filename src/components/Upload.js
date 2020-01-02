import React, { useState, useEffect } from 'react'
import Papa from 'papaparse'

import UploadImg from '../assets/icons/upload.png'
import { Flex, Box, Text, Input } from '../primitives'
import { ListParsed } from './Utils'

const Upload = () => {
  const [csv, setCSV] = useState({})

  const changeFile = event => {
    let file = event.target.files[0]

    Papa.parse(file, {
      header: true,
      dynamicTyping: true,
      complete: results => {
        results.fileName = file.name
        setCSV(results)
      }
    })
  }

  return (
    <Flex px={[5, 8, 8]} py={5} flexDirection="column" alignItems="center">
        <Text fontSize={6}>Upload file</Text>
        <Box my={2} />
        <Input
          icon={UploadImg}
          type="file"
          accept=".csv"
          name="file"
          onChange={() => changeFile(event)}
        ></Input>
      {csv.meta ? <ListParsed csv={csv} /> : null}
    </Flex>
  )
}

export default Upload
