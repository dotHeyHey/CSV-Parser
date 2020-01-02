import React, { useState, useEffect } from 'react'

import { Flex, Box, Text, Image, Divider } from '../primitives'

import { ListGroups } from './Utils'

export default ({ actions, history }) => {
  const [groups, setGroups] = useState([])

  useEffect(() => {
    actions.listCourses().then(setGroups)
  }, [])

  return (
    <>
      <Text.Heading
        textAlign="center"
        fontSize={4}
        px={4}
        py={[3, 4]}
      >
        Populære kurs for datasikkerhet
      </Text.Heading>
      <Divider bg="white" my={2} />

      <ListGroups history={history} groups={groups} />
    </>
  )
}
