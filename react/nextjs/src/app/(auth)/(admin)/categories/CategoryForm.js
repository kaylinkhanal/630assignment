'use client'
import React, { useState } from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input} from "@nextui-org/react";

export default function CategoryForm() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const [category, setCategory] = useState('')
    const saveCategory = ()=> {
        
    }
  return (
    <>
      <Button onPress={onOpen}>Add Categories</Button>
      <Modal className="h-[50%]" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
              <ModalBody>
                <Input placeholder="Enter Category Name" value={category} onChange={(e)=>setCategory(e.target.value)}/>
              </ModalBody>
              <Button onClick={saveCategory}>Save Category</Button>
            </>
          )}
        </ModalContent>
          
      </Modal>
    </>
  );
}
