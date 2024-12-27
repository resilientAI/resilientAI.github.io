import React from 'react';
import Image from 'next/image';
import { Button, Card, CardBody, CardFooter, CardHeader, Select, SelectItem, Slider } from "@nextui-org/react";

export default function OrderPage() {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-semibold">Order Service</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <h4 className="text-lg font-semibold">Product Preview</h4>
          </CardHeader>
          <CardBody>
            <div className="aspect-square relative bg-gray-200 rounded-lg overflow-hidden">
              <Image src="/placeholder.svg" alt="Product Preview" layout="fill" objectFit="cover" />
            </div>
          </CardBody>
        </Card>

        <Card>
          <CardHeader>
            <h4 className="text-lg font-semibold">Order Details</h4>
          </CardHeader>
          <CardBody className="space-y-4">
            <div>
              <label className="block mb-2">Material Selection</label>
              <Select placeholder="Select material">
                <SelectItem key="synthetic" value="synthetic">Synthetic Fiber</SelectItem>
                <SelectItem key="human-hair" value="human-hair">Human Hair</SelectItem>
                <SelectItem key="blend" value="blend">Blend</SelectItem>
              </Select>
            </div>
            <div>
              <label className="block mb-2">Size Adjustment</label>
              <Slider 
                defaultValue={50} 
                maxValue={100} 
                step={1}
                aria-label="Size adjustment"
              />
            </div>
            <div>
              <label className="block mb-2">Price</label>
              <p className="text-2xl font-bold">$999</p>
            </div>
          </CardBody>
          <CardFooter>
            <Button className="w-full">Place Order</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
