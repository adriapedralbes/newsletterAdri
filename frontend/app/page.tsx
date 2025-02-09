import NewsletterForm from "@/components/newsletter-form";
import { Newspaper } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4 py-16 md:py-24 max-w-3xl">
        <div className="text-center space-y-4 mb-12">
          <div className="flex justify-center mb-6">
            <div className="bg-primary/10 p-3 rounded-full">
              <Newspaper className="w-8 h-8 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Stay Ahead of the Curve
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join our newsletter and get weekly insights on emerging technologies, 
            development best practices, and industry trends delivered straight to your inbox.
          </p>
        </div>
        
        <div className="bg-card rounded-xl shadow-lg p-6 md:p-8 max-w-2xl mx-auto">
          <NewsletterForm />
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
          {features.map((feature) => (
            <div key={feature.title} className="text-center space-y-2">
              <div className="flex justify-center">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

const features = [
  {
    title: "Weekly Updates",
    description: "Curated content delivered every week, no spam ever.",
    icon: Newspaper,
  },
  {
    title: "Expert Insights",
    description: "Deep dives into the latest tech trends and best practices.",
    icon: function BookIcon(props: any) {
      return (
        <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
        </svg>
      );
    },
  },
  {
    title: "Unsubscribe Anytime",
    description: "Easy opt-out with a single click, no questions asked.",
    icon: function ShieldIcon(props: any) {
      return (
        <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
        </svg>
      );
    },
  },
];