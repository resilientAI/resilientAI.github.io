import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"

export default function RecommendationPage() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <Button>Upload Photo</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardContent className="p-4">
            <h3 className="text-xl font-semibold mb-4">Face Shape Recognition</h3>
            <div className="aspect-square relative bg-gray-200 rounded-lg overflow-hidden">
              <Image src="/placeholder.svg" alt="Face Shape Recognition" layout="fill" objectFit="cover" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <h3 className="text-xl font-semibold mb-4">Virtual Try-On</h3>
            <div className="aspect-square relative bg-gray-200 rounded-lg overflow-hidden">
              <Image src="/placeholder.svg" alt="Virtual Try-On" layout="fill" objectFit="cover" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div>
        <h3 className="text-2xl font-semibold mb-4">Recommended Hairstyles</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <Card key={i}>
              <CardContent className="p-4 aspect-square relative">
                <Image src="/placeholder.svg" alt={`Recommended Hairstyle ${i}`} layout="fill" objectFit="cover" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Card>
        <CardContent className="p-4">
          <h3 className="text-xl font-semibold mb-4">Hairstyle Parameter Adjustment</h3>
          <div className="space-y-4">
            <div>
              <label className="block mb-2">Length</label>
              <Slider defaultValue={[50]} max={100} step={1} />
            </div>
            <div>
              <label className="block mb-2">Curliness</label>
              <Slider defaultValue={[50]} max={100} step={1} />
            </div>
            <div>
              <label className="block mb-2">Thickness</label>
              <Slider defaultValue={[50]} max={100} step={1} />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

