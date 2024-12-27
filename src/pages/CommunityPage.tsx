import React from 'react';

import Image from 'next/image'
import { Button, Card, CardBody, CardFooter } from "@nextui-org/react"
import { Heart, MessageCircle } from 'lucide-react'

export default function CommunityPage() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Community</h2>
        <Button>Post</Button>
      </div>

      <div className="flex flex-wrap gap-2">
        {['#ShortHair', '#LongHair', '#CurlyHair', '#StraightHair', '#ColoredHair', '#Braids'].map((tag) => (
          <span key={tag} className="bg-primary text-primary-foreground px-2 py-1 rounded-full text-sm">
            {tag}
          </span>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <Card key={i}>
            <CardBody className="p-4">
              <div className="aspect-square relative bg-gray-200 rounded-lg overflow-hidden mb-4">
                <Image src="/placeholder.svg" alt={`Community Hairstyle ${i}`} layout="fill" objectFit="cover" />
              </div>
              <p className="text-sm text-gray-600">Amazing hairstyle shared by our community...</p>
            </CardBody>
            <CardFooter className="flex justify-between">
              <Button variant="light" size="sm">
                <Heart className="w-4 h-4 mr-2" />
                Like
              </Button>
              <Button variant="light" size="sm">
                <MessageCircle className="w-4 h-4 mr-2" />
                Comment
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
