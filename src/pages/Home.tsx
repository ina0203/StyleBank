import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="secondary">Portfolio</Badge>
            <Badge variant="outline">Vite + React</Badge>
            <Badge variant="outline">Tailwind + shadcn/ui</Badge>
            <Badge variant="outline">GitHub Pages</Badge>
          </div>

          <h1 className="text-3xl font-semibold tracking-tight">StyleBank</h1>
          <p className="max-w-2xl text-muted-foreground">
            A lightweight portfolio starter showcasing a clean layout, reusable UI components (shadcn/ui),
            and a scalable folder structure for building product-level pages.
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            <Button asChild>
              <a href="https://github.com/ina0203/StyleBank" target="_blank" rel="noreferrer">GitHub Repo</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="./" target="_self" rel="noreferrer">Refresh</a>
            </Button>
          </div>
        </div>

        <Separator className="my-10" />

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>UI System</CardTitle>
              <CardDescription>Reusable shadcn/ui components with Tailwind tokens.</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Buttons, cards, badges, and separators are wired with a shared utility (`cn`) and CSS variables for theme-ready styling.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Project Structure</CardTitle>
              <CardDescription>Simple structure that scales into real products.</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Pages live in <code className="rounded bg-muted px-1 py-0.5">src/pages</code>, UI primitives in{" "}
              <code className="rounded bg-muted px-1 py-0.5">src/components/ui</code>, utilities in{" "}
              <code className="rounded bg-muted px-1 py-0.5">src/lib</code>.
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
