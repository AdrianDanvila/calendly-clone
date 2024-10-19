import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Clock, LinkIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import TestimonialsCarousel from "@/components/testimonials";

const features = [
  {
    icon: Calendar,
    title: "Create Events",
    description: "Easily set up and customize your event types",
    alt: "Calendar card",
  },
  {
    icon: Clock,
    title: "Manage Availability",
    description: "Define your availability to streamline scheduling",
    alt: "Clock card",
  },
  {
    icon: LinkIcon,
    title: "Custom Links",
    description: "Share your personalized scheduling link",
    alt: "Custom links card",
  },
];

const howItWorks = [
  { step: "Sign Up", description: "Create your free Schedulrr account" },
  {
    step: "Set Availability",
    description: "Define when you're available for meetings",
  },
  {
    step: "Share Your Link",
    description: "Send your scheduling link to clients or colleagues",
  },
  {
    step: "Get Booked",
    description: "Receive confirmations for new appointments automatically",
  },
];

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-16">
      {/* Home section */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-24">
        <div className="lg:w-1/2">
          <h1 className="text-7xl font-extrabold pcb-6 gradient-title">
            Simpleify Your Meetings
          </h1>
          <p className="text-xl text-gray-600 mb-10">
            Schedulrr will help you manage your meetings more effectively.
            Create some evenets and more.
          </p>
          <Link href={"/dashboard"}>
            <Button
              size={"lg"}
              className="text-lg bg-purple-500 hover:bg-purple-400"
            >
              Get Started <ArrowRight className="ml-2 h-2 w-5" />
            </Button>
          </Link>
        </div>
        <div className="lg:w-1/2 flex justify-center">
          <div className="relative w-full max-w-md aspect-square">
            <Image
              src={"/poster.png"}
              alt="ilu"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </div>
      {/* features */}
      <div className="mb-24">
        <h2 className="text-3xl font-bold text-center mb-12 text-purple-600">
          Key features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <Card key={feature.alt} aria-label={feature.alt}>
              <CardHeader>
                <feature.icon className="w-12 h-12 text-purple-500 mb-4 mx-auto" />
                <CardTitle className="text-center text-purple-600">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-gray-600">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      {/*What our users say  */}
      <div className="mb-24">
        <h2 className="text-3xl font-bold text-center mb-12 text-purple-600">
          What our users say
        </h2>
        <TestimonialsCarousel />
      </div>
      {/*How it works */}
      <div>
        <h2 className="text-3xl font-bold text-center mb-12 text-purple-600">
          How it works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {howItWorks.map((step, index) => (
            <div key={index} className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 font-bold text-xl">
                  {index + 1}
                </span>
              </div>
              <h3 className="font-semibold text-lg mb-2">{step.step}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
      {/* CTA */}
      {/* CTA Section */}
      <div className="bg-purple-600 text-white rounded-lg p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Simplify Your Scheduling?
        </h2>
        <p className="text-xl mb-6">
          Join thousands of professionals who trust Schedulrr for efficient time
          management.
        </p>
        <Link href={"/dashboard"}>
          <Button size="lg" variant="secondary" className="text-purple-600">
            Start For Free <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </div>
    </main>
  );
}
