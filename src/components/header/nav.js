import React from 'react'
import { Flex, Text } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'

const Nav = () => {

    const navArr = [
        {name: "Property Details", href: "/"},
        {name: "Calculator", href: "calculator"},
        {name: "Projections", href: "projections"},
    ]
    return (
        <Flex
        backgroundColor="gray.100"
        py={2}
        justifyContent="center"
        >
            {navArr.map(i => (
                <NavLink key={i.name} to={i.href}>
                    <Text
                    pr={8}
                    cursor="pointer"
                    >
                        {i.name}
                    </Text>
                </NavLink>
            ))}
        </Flex>
    )
}

export default Nav
