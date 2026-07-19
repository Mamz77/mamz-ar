import ModelViewer from "@/components/ModelViewer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black flex items-center justify-center">
      <ModelViewer glbSrc="/models/mamz-bear.glb" alt="Mamz Bear" />
    </main>
  );
}