"use client";

import Image from "next/image";
import { motion } from "motion/react";
import {
  MOTION,
  imageRevealVariants,
  imageZoomVariants,
  withRevealClass,
  type ImageRevealEffect,
  type ViewportAmount,
} from "@/lib/motion-presets";

export type ImageRevealProps = {
  src: string;
  alt: string;
  /** `"clip"` wipes the image open, `"scale"` eases it in, `"fade"` does a soft fade. */
  effect?: ImageRevealEffect;
  /** Adds a slow push-in on the image itself while the frame settles. */
  zoom?: boolean;
  duration?: number;
  delay?: number;
  /** Frame classes — this is where the aspect ratio and rounding belong. */
  className?: string;
  /** Classes for the underlying `<Image>` (defaults to `object-cover`). */
  imageClassName?: string;
  sizes?: string;
  priority?: boolean;
  quality?: number;
  /** Intrinsic dimensions — omit them to use `fill` inside a sized frame. */
  width?: number;
  height?: number;
  once?: boolean;
  amount?: ViewportAmount;
};

/**
 * Image entrance with a stable frame.
 *
 * Uses `next/image` internally so optimisation, `sizes` and `priority` all
 * behave exactly as they do elsewhere in the project. The frame keeps its
 * aspect ratio (supplied through `className`) which means the reveal never
 * causes layout shift or distortion.
 *
 * Note: `next/image` cannot be passed as `children` here — swap the `src` and
 * keep the same API when official photography replaces the stock reference
 * shots.
 */
export default function ImageReveal({
  src,
  alt,
  effect = "clip",
  zoom = false,
  duration = MOTION.duration.image,
  delay = 0,
  className,
  imageClassName = "object-cover",
  sizes,
  priority,
  quality,
  width,
  height,
  once = MOTION.viewport.once,
  amount = MOTION.viewport.amount,
}: ImageRevealProps) {
  const hasIntrinsicSize = typeof width === "number" && typeof height === "number";

  return (
    <motion.div
      className={withRevealClass(
        ["relative overflow-hidden", className].filter(Boolean).join(" "),
      )}
      variants={imageRevealVariants(effect, duration, delay)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
    >
      <motion.div
        className={withRevealClass("h-full w-full")}
        variants={zoom ? imageZoomVariants(duration, delay) : undefined}
      >
        <Image
          src={src}
          alt={alt}
          {...(hasIntrinsicSize ? { width, height } : { fill: true })}
          sizes={sizes}
          priority={priority}
          quality={quality}
          className={imageClassName}
        />
      </motion.div>
    </motion.div>
  );
}
