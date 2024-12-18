export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <div className="text-black mb-4">Tailwind CSS</div>

      <div className="border-[5px] border-yellow-500 rounded-lg p-4 bg-red-500 mb-4">
        This is the main box.
      </div>

      <div className="border-[5px] border-blue-500 rounded-lg p-4 bg-green-500 mb-4">
        This is the middle box.
      </div>

      <div className="border-[5px] border-purple-500 rounded-lg p-4 bg-yellow-500">
        This is the last one.
      </div>
    </div>
  );
}
