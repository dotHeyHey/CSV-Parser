import React, { useState } from 'react'
import assert from 'assert'
import Papa from 'papaparse'

import UploadImg from '../assets/icons/upload.png'
import { Flex, Box, Text, Input } from '../primitives'
import { ListParsed } from './Utils'

const regex = new RegExp('(.*?).(csv)$')

const Upload = () => {
  const [csv, setCSV] = useState({})

  const changeFile = event => {
    let file = event.target.files[0]
    assert(regex.test(file.name.toLowerCase()), 'wrong file format')

    Papa.parse(file, {
      header: true,
      dynamicTyping: true,
      complete: results => {
        results.fileName = file.name
        results.meta.fields.unshift('row')

        results.data.map((element, i) => {
          element.row = i + 1
        })

        setCSV(results)
      }
    })
  }

  return (
    <Flex px={[5, 8, 8]} py={5} flexDirection="column" alignItems="center">
      <Box textAlign="center">
        <Text fontSize={6}>Upload file</Text>
        <Box my={2} />
        <Input
          icon={UploadImg}
          type="file"
          accept=".csv"
          name="file"
          onChange={() => changeFile(event)}
        ></Input>
      </Box>
      {csv.meta ? <ListParsed csv={csv} /> : null}
    </Flex>
  )
}

export default Upload
