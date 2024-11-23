// node_modules
import { HeartIcon } from "@heroicons/react/16/solid";

// ################################################################
// # Component
// ################################################################

export default function Footer() {
  return (
    <footer>
      <div className="container mx-auto border-t border-gray-300 p-4">
        <div className="flex items-center justify-center gap-1 text-gray-900">
          <p>Made with</p>
          <HeartIcon className="h-4 w-4 text-red-500" />
          <p>by</p>
          <a
            href="https://github.com/puryazarchiny"
            target="_blank"
            className="font-bold"
          >
            Purya Zarchiny
          </a>
        </div>
      </div>
    </footer>
  );
}
