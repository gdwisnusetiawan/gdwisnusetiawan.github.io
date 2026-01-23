'use client'

import Image from 'next/image'
import { useState, useEffect, useCallback, useRef } from 'react'
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, RotateCcw } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { TransformWrapper, TransformComponent, ReactZoomPanPinchRef } from 'react-zoom-pan-pinch'

interface BentoGalleryProps {
  images: string[]
}

export function BentoGallery({ images }: BentoGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const transformComponentRef = useRef<ReactZoomPanPinchRef | null>(null)

  // Navigate to previous image
  const handlePrev = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation()
    // Reset zoom before navigating
    if (transformComponentRef.current) {
        transformComponentRef.current.resetTransform()
    }
    setSelectedIndex((prev) => {
      if (prev === null) return null
      return prev === 0 ? images.length - 1 : prev - 1
    })
  }, [images.length])

  // Navigate to next image
  const handleNext = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation()
    // Reset zoom before navigating
    if (transformComponentRef.current) {
        transformComponentRef.current.resetTransform()
    }
    setSelectedIndex((prev) => {
      if (prev === null) return null
      return prev === images.length - 1 ? 0 : prev + 1
    })
  }, [images.length])

  // Handle keyboard navigation
  useEffect(() => {
    if (selectedIndex === null) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedIndex(null)
      // Only simplify navigation if we decide arrow keys shouldn't pan.
      // For now, let's allow arrow keys to navigate images, 
      // but maybe users want to pan with keys?
      // Standard lightbox behavior usually prioritizes image navigation.
      if (e.key === 'ArrowLeft') handlePrev()
      if (e.key === 'ArrowRight') handleNext()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedIndex, handlePrev, handleNext])

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [selectedIndex])

  if (!images || images.length === 0) return null

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[200px] my-8">
        {images.map((src, index) => {
          const isHero = index === 0
          return (
            <motion.div
              key={`grid-${src}-${index}`}
              layoutId={`image-container-${index}`}
              onClick={() => setSelectedIndex(index)}
              className={`
                relative overflow-hidden rounded-xl border border-white/10 group cursor-pointer
                ${isHero ? 'md:col-span-2 md:row-span-2' : 'col-span-1 row-span-1'}
              `}
              whileHover={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div 
                layoutId={`image-${index}`}
                className="relative w-full h-full"
              >
                <Image
                  src={src}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </motion.div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            </motion.div>
          )
        })}
      </div>

      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md"
            onClick={() => setSelectedIndex(null)}
          >
            {/* Top Controls: Close */}
            <div className="absolute top-4 right-4 z-[60] flex gap-2">
                <button
                className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                onClick={(e) => {
                    e.stopPropagation()
                    setSelectedIndex(null)
                }}
                >
                <X className="h-6 w-6" />
                </button>
            </div>

            {/* Navigation Buttons */}
            {images.length > 1 && (
              <>
                <button
                  className="absolute left-4 z-[60] p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors hidden md:block"
                  onClick={handlePrev}
                >
                  <ChevronLeft className="h-8 w-8" />
                </button>
                <button
                  className="absolute right-4 z-[60] p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors hidden md:block"
                  onClick={handleNext}
                >
                  <ChevronRight className="h-8 w-8" />
                </button>
              </>
            )}

            {/* Main Image Area with Zoom */}
            <div 
              className="relative w-full h-full flex items-center justify-center overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
               <TransformWrapper
                    ref={transformComponentRef}
                    initialScale={1}
                    // Adjust wheel config for smoother zoom
                    wheel={{ step: 0.1 }}
               >
                 {({ zoomIn, zoomOut, resetTransform }) => (
                   <>
                    {/* Zoom Controls Toolbar */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-[60] flex items-center gap-2 px-4 py-2 rounded-full bg-black/50 backdrop-blur border border-white/10">
                        <button onClick={() => zoomOut()} className="p-2 text-white/80 hover:text-white transition-colors" title="Zoom Out">
                            <ZoomOut className="h-5 w-5" />
                        </button>
                         <button onClick={() => resetTransform()} className="p-2 text-white/80 hover:text-white transition-colors" title="Reset">
                            <RotateCcw className="h-5 w-5" />
                        </button>
                        <button onClick={() => zoomIn()} className="p-2 text-white/80 hover:text-white transition-colors" title="Zoom In">
                            <ZoomIn className="h-5 w-5" />
                        </button>
                        <div className="w-px h-4 bg-white/20 mx-2" />
                        <span className="text-xs font-medium text-white/70">
                            {selectedIndex + 1} / {images.length}
                        </span>
                    </div>

                     <TransformComponent
                        wrapperClass="!w-full !h-full flex items-center justify-center"
                        contentClass="!w-full !h-full flex items-center justify-center"
                     >
                        <div className="relative w-[90vw] h-[90vh]">
                            <Image
                                src={images[selectedIndex]}
                                alt={`Full screen view ${selectedIndex + 1}`}
                                fill
                                className="object-contain"
                                priority
                                quality={100}
                                draggable={false}
                            />
                        </div>
                     </TransformComponent>
                   </>
                 )}
               </TransformWrapper>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
