import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ProfilePage() {
  return (
    <div className="space-y-8">
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="w-32 h-32 relative">
              <Image src="/placeholder.svg" alt="User Avatar" layout="fill" className="rounded-full" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold">Username</h2>
              <p className="text-gray-600">User bio...</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>My Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <p>You have 3 ongoing orders</p>
            <Button className="mt-4">View All</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>My Favorites</CardTitle>
          </CardHeader>
          <CardContent>
            <p>You have saved 12 hairstyles</p>
            <Button className="mt-4">View All</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Settings</CardTitle>
          </CardHeader>
          <CardContent>
            <Button className="w-full">Account Settings</Button>
            <Button className="w-full mt-2">Privacy Settings</Button>
            <Button className="w-full mt-2">Notification Settings</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

