export default function Footer() {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between text-sm text-gray-600">
        <p>© 2025 James Worldwide. All rights reserved.</p>
        <div className="space-x-4 mt-2 md:mt-0">
          <a href="/privacy" className="hover:text-blue-600">Privacy</a>
          <a href="/terms" className="hover:text-blue-600">Terms</a>
        </div>
      </div>
    </footer>
  );
}
