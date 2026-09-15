import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';

export interface ReadingSidebarProps {
  children: React.ReactNode;
}

export default function ReadingSidebar({ children }: ReadingSidebarProps) {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      {/* Large screens only */}
      <div className="hidden w-[170px] xl:block">{children}</div>

      {/* Mobile/Tablet only */}
      <div className="flex justify-end xl:hidden">
        <button
          onClick={() => setOpen(true)}
          className="rounded-full bg-[#974D4D] px-4 py-2.5 text-[14px] text-[#F8F3F3]"
        >
          Reading details
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-black/60 xl:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.div
              className="fixed inset-x-0 bottom-0 z-50 max-h-[80vh] overflow-y-auto rounded-t-2xl bg-[#151313] p-5 xl:hidden"
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
            >
              <button onClick={() => setOpen(false)} className="mb-3 text-[14px] text-[#D9CFAE]">
                Close
              </button>
              {children}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
