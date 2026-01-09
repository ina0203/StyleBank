import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card"

export default function Home() {
  return (
    <main className="min-h-screen bg-background p-8">
      <section className="mx-auto max-w-5xl space-y-6">
        <header className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">
            StyleBank
          </h1>
          <p className="text-muted-foreground">
            shadcn-ui 기반의 패션 데이터 & 스타일 큐레이션 포트폴리오
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Style Curation</CardTitle>
              <CardDescription>
                사용자 취향 기반 스타일 카드
              </CardDescription>
            </CardHeader>
            <CardContent>
              트렌드 · 체형 · 상황에 맞는 스타일 추천 구조
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Component System</CardTitle>
              <CardDescription>
                shadcn-ui Design System
              </CardDescription>
            </CardHeader>
            <CardContent>
              재사용 가능한 UI 컴포넌트 구조 설계
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Portfolio Ready</CardTitle>
              <CardDescription>
                실무 중심 설계
              </CardDescription>
            </CardHeader>
            <CardContent>
              React · Vite · Tailwind 기반 포트폴리오
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  )
}
