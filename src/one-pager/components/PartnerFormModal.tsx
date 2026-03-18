import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

interface PartnerFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PartnerFormModal = ({ isOpen, onClose }: PartnerFormModalProps) => (
  <AnimatePresence>
    {isOpen && (
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden z-10 flex flex-col h-[90vh] max-h-[900px]"
        >
          <div className="flex justify-between items-center p-4 border-b border-gray-200 bg-gray-50">
            <h3 className="text-gray-800 font-bold ml-2">Partner With Us</h3>
            <button
              onClick={onClose}
              className="p-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-full transition-colors cursor-pointer"
              aria-label="Close partner form"
            >
              <X size={20} />
            </button>
          </div>

          <div className="flex-1 w-full bg-white overflow-hidden">
            <iframe
              title="Partner With Us Form"
              src="https://docs.google.com/forms/d/e/1FAIpQLSfL2HMTAIrvKeX5x6AuSYQX_Xb0sKWQmNFVrfSJEY9jF1uzKQ/viewform?embedded=true"
              width="100%"
              height="100%"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              className="w-full h-full"
            >
              Loading...
            </iframe>
          </div>
        </motion.div>
      </div>
    )}
  </AnimatePresence>
);

export default PartnerFormModal;
