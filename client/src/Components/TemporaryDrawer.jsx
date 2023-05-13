import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  RadioGroup,
  useDisclosure,
  Button
} from '@chakra-ui/react'
import {HamburgerIcon } from '@chakra-ui/icons';
import "./TemporaryDrawer.css"
import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';

function TemporaryDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [placement, setPlacement] = useState('right')
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className='menuIcons'>
      <Button className='menuButtonHide' colorScheme='#FBB917' onClick={onOpen}>
        <HamburgerIcon color={"#FBB917"} className='menuIcon'/>
      </Button>
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth='1px' className='drawerHeader' color={"black"} fontSize={"28px"}>Jidoka</DrawerHeader>
          <DrawerBody>
            <p
              className='drawer'
              onClose={onClose}
              onMouseEnter={() => setIsClicked(false)}
              onMouseLeave={() => setIsClicked(false)}
              onClick={() => {
                onClose();
                setIsClicked(true);
              }}
            >
              <Link to="/about">
                About
              </Link>
            </p>
            <p
              className='drawer'
              onClose={onClose}
              onMouseEnter={() => setIsClicked(false)}
              onMouseLeave={() => setIsClicked(false)}
              onClick={() => {
                onClose();
                setIsClicked(true);
              }}
            >
              <Link to="/blogs">
                Blogs
              </Link>
            </p>
            <p
              className='drawer'
              onClose={onClose}
              onMouseEnter={() => setIsClicked(false)}
              onMouseLeave={() => setIsClicked(false)}
              onClick={() => {
                onClose();
                setIsClicked(true);
              }}
            >
              <Link to="/products">
                Our Products
              </Link>
            </p>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  )
}

export default TemporaryDrawer;
