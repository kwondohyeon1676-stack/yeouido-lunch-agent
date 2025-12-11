import LunchWizard from '@/components/lunch/LunchWizard';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex flex-col items-center">
      <div className="w-full max-w-md py-8 px-4 text-center">
        <h1 className="text-3xl font-extrabold text-foreground mb-2 tracking-tight">
          여의도 점심 메뉴 🍱
        </h1>
        <p className="text-gray-500 mb-6 font-medium">
          결정장애 해결사 AI 에이전트
        </p>
        <LunchWizard />
      </div>
    </main>
  );
}
