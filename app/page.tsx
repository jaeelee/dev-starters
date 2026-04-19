import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { PageTitle } from "@/components/common/PageTitle"
import { ROUTES } from "@/lib/constants"

export default function Home() {
  const features = [
    {
      title: "Next.js 16",
      description: "최신 App Router 기반 풀스택 프레임워크",
      icon: "⚡",
    },
    {
      title: "React 19",
      description: "최신 React와 Server Components 지원",
      icon: "⚛️",
    },
    {
      title: "TypeScript",
      description: "타입 안전한 개발 환경",
      icon: "📘",
    },
    {
      title: "Tailwind CSS v4",
      description: "유틸리티 기반 빠른 스타일링",
      icon: "🎨",
    },
    {
      title: "shadcn/ui",
      description: "검증된 컴포넌트 라이브러리",
      icon: "🧩",
    },
    {
      title: "TanStack Query",
      description: "강력한 서버 상태 관리 라이브러리",
      icon: "📊",
    },
  ]

  const stack = [
    { name: "Next.js", version: "16.2.4" },
    { name: "React", version: "19.2.4" },
    { name: "TypeScript", version: "5" },
    { name: "Tailwind CSS", version: "4" },
    { name: "shadcn/ui", version: "latest" },
    { name: "TanStack Query", version: "5.99.2" },
    { name: "axios", version: "1.15.0" },
    { name: "next-themes", version: "0.4.6" },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden px-4 py-20 md:px-8 md:py-32">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="space-y-4">
              <Badge variant="outline" className="w-fit">🚀 스타터킷</Badge>
              <PageTitle
                title="빠르게 시작하는 Next.js 웹 개발"
                description="프로덕션 준비된 기술 스택과 구조를 갖춘 완벽한 출발점"
              />
            </div>

            <p className="text-lg text-muted-foreground max-w-2xl">
              이 스타터킷은 현대적인 웹 개발에 필요한 모든 것을 제공합니다.
              어떤 프로젝트든 빠르게 시작할 수 있도록 최적화된 구조와 컴포넌트를 준비했습니다.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href={ROUTES.DOCS}>
                <Button size="lg">문서 보기</Button>
              </Link>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline">
                  GitHub에서 보기
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="px-4 py-20 md:px-8 md:py-32 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <div className="space-y-4 mb-12">
              <PageTitle
                title="포함된 기술"
                description="최신 기술 스택이 미리 설정되어 있습니다"
              />
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <Card key={feature.title}>
                  <CardHeader>
                    <div className="text-3xl mb-2">{feature.icon}</div>
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Stack Section */}
        <section className="px-4 py-20 md:px-8 md:py-32">
          <div className="max-w-6xl mx-auto">
            <div className="space-y-4 mb-12">
              <PageTitle
                title="기술 스택"
                description="정확한 버전 정보"
              />
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {stack.map((item) => (
                <Card key={item.name}>
                  <CardContent className="pt-6">
                    <div className="space-y-1">
                      <p className="font-semibold">{item.name}</p>
                      <Badge variant="secondary">{item.version}</Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 py-20 md:px-8 md:py-32 bg-muted/30">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <PageTitle
              title="지금 시작하세요"
              description="프로젝트를 클론하고 즉시 개발을 시작할 수 있습니다"
            />
            <Link href={ROUTES.DOCS}>
              <Button size="lg">빠른 시작 가이드</Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
