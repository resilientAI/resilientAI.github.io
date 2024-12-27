import React from 'react';
import Image from 'next/image'
import { Input, Button } from "@nextui-org/react";
import { Card, CardBody } from "@nextui-org/react";

export default function HomePage() {
  return (
    <div className="space-y-8">
      <div className="flex justify-center">
        <Input className="max-w-md" placeholder="Search hairstyles..." />
        <Button className="ml-2">Search</Button>
      </div>

      <div className="relative h-64 bg-gray-200 rounded-lg overflow-hidden">
        <Image src="/placeholder.svg" alt="Carousel" layout="fill" objectFit="cover" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-4xl font-bold text-white">Featured Hairstyles</h2>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-semibold mb-4">Hairstyle Categories</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {['Short', 'Long', 'Curly', 'Straight'].map((category) => (
            <Card key={category}>
              <CardBody className="p-4 text-center">{category}</CardBody>
            </Card>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-semibold mb-4">Popular Hairstyles</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Card key={i}>
              <CardBody className="p-4 aspect-square relative">
                <Image src="/placeholder.svg" alt={`Popular Hairstyle ${i}`} layout="fill" objectFit="cover" />
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
