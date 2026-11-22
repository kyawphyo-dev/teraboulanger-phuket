import { redirect } from "next/navigation";

/**
 * "Our Story" is part of the About & Our Story experience.
 *
 * The navbar links to both `/about` and `/our-story`; this route forwards
 * visitors to the Our Story anchor on the About page so the full narrative
 * lives in one place.
 */
export default function OurStoryPage() {
  redirect("/about#our-story");
}
