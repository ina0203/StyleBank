import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-4xl px-6 py-14 space-y-8">
        <header className="space-y-2">
          <h1 className="text-3xl font-semibold tracking-tight">StyleBank</h1>
          <p className="text-muted-foreground">
            Vite + React + Tailwind + shadcn/ui + GitHub Pages 배포 템플릿
          </p>
          <div className="flex gap-3 pt-2">
            <Button>Primary Action</Button>
            <Button variant="outline">Secondary</Button>
          </div>
        </header>

        <div className="grid gap-4 sm:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Component System</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              shadcn/ui 기반으로 Button/Card부터 확장
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Portfolio-ready</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              프로젝트 설명/기술스택/배포링크까지 정리
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
