'use client'
import React, { useState } from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input} from "@nextui-org/react";

export default function ProductForm() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const [product, setProduct] = useState('')
    const saveProduct = ()=> {
        
    }
  return (
    <>
      <Button onPress={onOpen}>Add Product</Button>
      <Modal className="h-[50%]" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
              <ModalBody>
                <Input placeholder="Enter Product Name" value={category} onChange={(e)=>setProduct(e.target.value)}/>
              </ModalBody>
              <Button onClick={saveCategory}>Save Product</Button>
            </>
          )}
        </ModalContent>
          
      </Modal>
    </>
  );
}
