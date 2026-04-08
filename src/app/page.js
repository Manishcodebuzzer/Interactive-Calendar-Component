import Calendar from "../components/Calendar";
import NotesPanel from "../components/NotesPanel";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-300 flex items-center justify-center p-4">
      
      <div className="bg-white rounded-xl shadow-2xl overflow-hidden w-full max-w-4xl">

        <div
          className="h-56 md:h-72 bg-cover bg-center relative"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb')",
          }}
        >
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        <div className="flex flex-col md:flex-row">

          <div className="md:w-1/3 p-6 border-r bg-gray-50">
            <NotesPanel />
          </div>

          <div className="md:w-2/3 p-6">
            <Calendar />
          </div>

        </div>

      </div>
    </div>
  );
}