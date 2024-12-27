import React from 'react';
import Image from 'next/image'
import { Input, Button, Card, CardBody, CardHeader } from "@nextui-org/react";

export default function ProfilePage() {
  return (
    <div className="space-y-8">
      <Card>
        <CardBody className="p-6">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="w-32 h-32 relative">
              <Image src="/placeholder.svg" alt="User Avatar" layout="fill" className="rounded-full" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold">Username</h2>
              <p className="text-gray-600">User bio...</p>
            </div>
          </div>
        </CardBody>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <h3 className="text-xl font-semibold">My Orders</h3>
          </CardHeader>
          <CardBody>
            <p>You have 3 ongoing orders</p>
            <Button className="mt-4">View All</Button>
          </CardBody>
        </Card>

        <Card>
          <CardHeader>
            <h3 className="text-xl font-semibold">My Favorites</h3>
          </CardHeader>
          <CardBody>
            <p>You have saved 12 hairstyles</p>
            <Button className="mt-4">View All</Button>
          </CardBody>
        </Card>

        <Card>
          <CardHeader>
            <h3 className="text-xl font-semibold">Settings</h3>
          </CardHeader>
          <CardBody>
            <Button className="w-full">Account Settings</Button>
            <Button className="w-full mt-2">Privacy Settings</Button>
            <Button className="w-full mt-2">Notification Settings</Button>
          </CardBody>
        </Card>
      </div>
    </div>
  )
}
