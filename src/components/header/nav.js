import React from 'react'
import { Flex, Text } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'

const Nav = () => {

    const navArr = [
        {name: "Calculator", href: "calculator"},
        {name: "Monthly Outlook", href: "outlook"},
    ]
    return (
        <Flex
        backgroundColor="gray.100"
        py={2}
        justifyContent="center"
        >
            {navArr.map(i => (
                <NavLink to={i.href}>
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
