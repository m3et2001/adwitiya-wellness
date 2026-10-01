import hero from "@/assets/spa-hero.jpg";
import treatment from "@/assets/spa-treatment.jpg";
import hammam from "@/assets/spa-hammam.jpg";
import details from "@/assets/spa-details.jpg";
import amoreReceptionAsset from "@/assets/amore-gallery/amore-reception.jpeg.asset.json";
import amoreHammamRoomAsset from "@/assets/amore-gallery/amore-hammam-room.jpeg.asset.json";
import amoreTwinRoomAsset from "@/assets/amore-gallery/amore-twin-treatment-room.jpg.asset.json";
import amorePinkRoomAsset from "@/assets/amore-gallery/amore-treatment-room-pink.png.asset.json";
import amoreLoungeAsset from "@/assets/amore-gallery/amore-lounge.webp.asset.json";
import amoreBlueRoomAsset from "@/assets/amore-gallery/amore-treatment-room-blue.png.asset.json";
import gangaReceptionLeftAsset from "@/assets/ganga-gallery/ganga-reception-left.jpg.asset.json";
import gangaReceptionLoungeAsset from "@/assets/ganga-gallery/ganga-reception-lounge.jpg.asset.json";
import gangaTreatmentRoomSingleAsset from "@/assets/ganga-gallery/ganga-treatment-room-single.jpg.asset.json";
import gangaTreatmentRoomTwinAsset from "@/assets/ganga-gallery/ganga-treatment-room-twin.jpg.asset.json";
import gangaHammamRoomAsset from "@/assets/ganga-gallery/ganga-hammam-room.jpg.asset.json";
import gangaTreatmentCorridorAsset from "@/assets/ganga-gallery/ganga-treatment-corridor.jpg.asset.json";
import sattvaReelAsset from "@/assets/sattva-gallery/sattva-reel.mp4.asset.json";
import sattvaReelPosterAsset from "@/assets/sattva-gallery/sattva-reel-poster.jpg.asset.json";
import sattvaReelTwoAsset from "@/assets/spa-reels/sattva-reel-2.mp4.asset.json";
import sattvaReelTwoPosterAsset from "@/assets/spa-reels/sattva-reel-2-poster.jpg.asset.json";
import amoreReelAsset from "@/assets/spa-reels/amore-reel.mp4.asset.json";
import amoreReelPosterAsset from "@/assets/spa-reels/amore-reel-poster.jpg.asset.json";
import gangaReelAsset from "@/assets/spa-reels/ganga-reel.mp4.asset.json";
import gangaReelPosterAsset from "@/assets/spa-reels/ganga-reel-poster.jpg.asset.json";
import sattvaTreatmentRoomOneAsset from "@/assets/sattva-gallery/sattva-treatment-room-01.webp.asset.json";
import sattvaTreatmentRoomTwoAsset from "@/assets/sattva-gallery/sattva-treatment-room-02.webp.asset.json";
import sattvaTreatmentRoomThreeAsset from "@/assets/sattva-gallery/sattva-treatment-room-03.webp.asset.json";
import sattvaCorridorAsset from "@/assets/sattva-gallery/sattva-corridor.webp.asset.json";
import sattvaLoungeAsset from "@/assets/sattva-gallery/sattva-lounge.webp.asset.json";
import sattvaReceptionAsset from "@/assets/sattva-gallery/sattva-reception.webp.asset.json";
import { amoreTreatmentImages, gangaTreatmentImages, sattvaTreatmentImages } from "./treatmentImages";

export const images = { hero, treatment, hammam, details };

export type Treatment = { name: string; description: string; duration: string; price: string; image?: string | undefined; category?: string | undefined };
export type Review = { guest: string; quote: string };
export type Spa = {
  slug: "ganga-spa" | "amore-wellness" | "sattva-wellness";
  name: string; tagline: string; description: string; heroImage: string; galleryImages: string[]; aboutImages?: string[];
  location: string; address: string; phone: string; whatsappNumber?: string; email: string; hours: string;
  instagram: string; instagramUrl?: string; googleMapsUrl: string; facebookUrl: string; reelUrl: string; reelPoster?: string; reelUrl2?: string; reelPoster2?: string; reviews: Review[]; treatments: Treatment[];
  tone: "ganga" | "amore" | "sattva";
  contactVerified?: boolean;
  galleryVerified?: boolean;
};

const amoreGalleryImages = [
  amoreReceptionAsset.url,
  amoreHammamRoomAsset.url,
  amoreTwinRoomAsset.url,
  amorePinkRoomAsset.url,
  amoreLoungeAsset.url,
  amoreBlueRoomAsset.url,
];

const gangaGalleryImages = [
  gangaReceptionLeftAsset.url,
  gangaTreatmentCorridorAsset.url,
  gangaTreatmentRoomSingleAsset.url,
  gangaTreatmentRoomTwinAsset.url,
  gangaHammamRoomAsset.url,
  gangaReceptionLoungeAsset.url,
];

const sattvaGalleryImages = [
  sattvaReceptionAsset.url,
  sattvaTreatmentRoomOneAsset.url,
  sattvaTreatmentRoomTwoAsset.url,
  sattvaTreatmentRoomThreeAsset.url,
  sattvaCorridorAsset.url,
  sattvaLoungeAsset.url,
];

const treatmentSets: Record<Spa["tone"], Treatment[]> = {
  ganga: [
    { name: "Holistic Swedish Massage", description: "A flowing full-body massage created for gentle relaxation and renewal.", duration: "Duration to be confirmed", price: "Price on request", image: gangaTreatmentImages[0] },
    { name: "Lomi Lomi Massage", description: "A rhythmic massage experience inspired by long, continuous movements.", duration: "Duration to be confirmed", price: "Price on request", image: gangaTreatmentImages[1] },
    { name: "Balinese Massage", description: "A restorative massage combining gentle stretches and focused pressure.", duration: "Duration to be confirmed", price: "Price on request", image: gangaTreatmentImages[2] },
    { name: "Foot Reflexology", description: "Focused care for the feet designed to encourage whole-body relaxation.", duration: "Duration to be confirmed", price: "Price on request", image: gangaTreatmentImages[3] },
    { name: "Soul of Thailand", description: "A Thai-inspired wellness ritual blending pressure and assisted movement.", duration: "Duration to be confirmed", price: "Price on request", image: gangaTreatmentImages[4] },
    { name: "Aroma Therapy", description: "A calming massage ritual enhanced with thoughtfully selected aromatic oils.", duration: "Duration to be confirmed", price: "Price on request", image: gangaTreatmentImages[5] },
    { name: "Deep Tissue", description: "Focused, deeper pressure designed for tired and tense muscles.", duration: "Duration to be confirmed", price: "Price on request", image: gangaTreatmentImages[6] },
    { name: "Feather Deep", description: "A balanced massage experience moving from feather-light touch to deeper pressure.", duration: "Duration to be confirmed", price: "Price on request", image: gangaTreatmentImages[7] },
    { name: "Four Hand (Twin Massage)", description: "A synchronized four-hand massage experience performed by two therapists.", duration: "Duration to be confirmed", price: "Price on request", image: gangaTreatmentImages[8] },
    { name: "Normal Water Therapy", description: "A water-based wellness ritual designed for relaxation and refreshment.", duration: "Duration to be confirmed", price: "Price on request", image: gangaTreatmentImages[9] },
    { name: "Moroccan Hammam", description: "A traditional cleansing and renewal ritual inspired by the Moroccan hammam.", duration: "Duration to be confirmed", price: "Price on request", image: gangaTreatmentImages[10] },
    { name: "Turkish Hammam", description: "A warm bathing ritual inspired by classic Turkish hammam traditions.", duration: "Duration to be confirmed", price: "Price on request", image: gangaTreatmentImages[11] },
  ],
  amore: [
    { name: "Holistic Swedish Massage", description: "A flowing full-body massage created for gentle relaxation and renewal.", duration: "Duration to be confirmed", price: "Price on request", image: amoreTreatmentImages[0] },
    { name: "Lomi Lomi Massage", description: "A rhythmic massage experience inspired by long, continuous movements.", duration: "Duration to be confirmed", price: "Price on request", image: amoreTreatmentImages[1] },
    { name: "Balinese Massage", description: "A restorative massage combining gentle stretches and focused pressure.", duration: "Duration to be confirmed", price: "Price on request", image: amoreTreatmentImages[2] },
    { name: "Foot Reflexology", description: "Focused care for the feet designed to encourage whole-body relaxation.", duration: "Duration to be confirmed", price: "Price on request", image: amoreTreatmentImages[3] },
    { name: "Soul of Thailand", description: "A Thai-inspired wellness ritual blending pressure and assisted movement.", duration: "Duration to be confirmed", price: "Price on request", image: amoreTreatmentImages[4] },
    { name: "Aroma Therapy", description: "A calming massage ritual enhanced with thoughtfully selected aromatic oils.", duration: "Duration to be confirmed", price: "Price on request", image: amoreTreatmentImages[5] },
    { name: "Deep Tissue", description: "Focused, deeper pressure designed for tired and tense muscles.", duration: "Duration to be confirmed", price: "Price on request", image: amoreTreatmentImages[6] },
    { name: "Feather Deep", description: "A balanced massage experience moving from feather-light touch to deeper pressure.", duration: "Duration to be confirmed", price: "Price on request", image: amoreTreatmentImages[7] },
    { name: "Four Hand (Twin Massage)", description: "A synchronized four-hand massage experience performed by two therapists.", duration: "Duration to be confirmed", price: "Price on request", image: amoreTreatmentImages[8] },
    { name: "Normal Water Therapy", description: "A water-based wellness ritual designed for relaxation and refreshment.", duration: "Duration to be confirmed", price: "Price on request", image: amoreTreatmentImages[9] },
    { name: "Moroccan Hammam", description: "A traditional cleansing and renewal ritual inspired by the Moroccan hammam.", duration: "Duration to be confirmed", price: "Price on request", image: amoreTreatmentImages[10] },
    { name: "Turkish Hammam", description: "A warm bathing ritual inspired by classic Turkish hammam traditions.", duration: "Duration to be confirmed", price: "Price on request", image: amoreTreatmentImages[11] },
  ],
  sattva: [
    { category: "Massage Therapy", name: "Holistic Swedish Massage", description: "A flowing full-body massage created for gentle relaxation and renewal.", duration: "Duration to be confirmed", price: "Price on request", image: sattvaTreatmentImages[0] },
    { category: "Massage Therapy", name: "Lomi Lomi Massage", description: "A rhythmic massage experience inspired by long, continuous movements.", duration: "Duration to be confirmed", price: "Price on request", image: sattvaTreatmentImages[1] },
    { category: "Massage Therapy", name: "Baliness Massage", description: "A restorative massage combining gentle stretches and focused pressure.", duration: "Duration to be confirmed", price: "Price on request", image: sattvaTreatmentImages[2] },
    { category: "Massage Therapy", name: "Deep Tissue", description: "Focused, deeper pressure designed for tired and tense muscles.", duration: "Duration to be confirmed", price: "Price on request", image: sattvaTreatmentImages[3] },
    { category: "Massage Therapy", name: "Soul Of Thailand", description: "A Thai-inspired wellness ritual blending pressure and assisted movement.", duration: "Duration to be confirmed", price: "Price on request", image: sattvaTreatmentImages[4] },
    { category: "Massage Therapy", name: "Foot Reflexology & Baliness Massage (Combo)", description: "A combined ritual pairing focused foot care with a restorative Baliness massage.", duration: "Duration to be confirmed", price: "Price on request", image: sattvaTreatmentImages[5] },
    { category: "Massage Therapy", name: "Aromatherapy", description: "A calming massage ritual enhanced with thoughtfully selected aromatic oils.", duration: "Duration to be confirmed", price: "Price on request", image: sattvaTreatmentImages[6] },
    { category: "Massage Therapy", name: "Feather Deep Massage", description: "A balanced experience moving from feather-light touch to deeper pressure.", duration: "Duration to be confirmed", price: "Price on request", image: sattvaTreatmentImages[7] },
    { category: "Massage Therapy", name: "Four Hand Massage", description: "A synchronized four-hand massage experience performed by two therapists.", duration: "Duration to be confirmed", price: "Price on request", image: sattvaTreatmentImages[8] },
    { category: "Premium Therapy", name: "Sattva Signature Massage", description: "A signature Sattva ritual designed around calm, balance and thoughtful restoration.", duration: "Duration to be confirmed", price: "Price on request", image: sattvaTreatmentImages[9] },
    { category: "Premium Therapy", name: "Sattva Chocolate Special Massage", description: "A premium chocolate-inspired wellness ritual for comfort and relaxation.", duration: "Duration to be confirmed", price: "Price on request", image: sattvaTreatmentImages[10] },
    { category: "SAP Packages", name: "Jet Lag Recovery", description: "A restorative package created to refresh the body after travel.", duration: "Duration to be confirmed", price: "Price on request", image: sattvaTreatmentImages[11] },
    { category: "SAP Packages", name: "Heavenly Relax", description: "A deeply calming package created for an unhurried sense of ease.", duration: "Duration to be confirmed", price: "Price on request", image: sattvaTreatmentImages[12] },
    { category: "SAP Packages", name: "Refresh", description: "A revitalizing wellness package for renewed lightness and energy.", duration: "Duration to be confirmed", price: "Price on request", image: sattvaTreatmentImages[13] },
    { category: "SAP Packages", name: "Revive", description: "A considered restorative package designed to help body and mind reset.", duration: "Duration to be confirmed", price: "Price on request", image: sattvaTreatmentImages[14] },
    { category: "SAP Packages", name: "Rejuvenate", description: "A complete wellness package focused on renewal and lasting calm.", duration: "Duration to be confirmed", price: "Price on request", image: sattvaTreatmentImages[15] },
    { category: "SAP Packages", name: "Head To Toe Harmony", description: "A comprehensive package designed to restore balance from head to toe.", duration: "Duration to be confirmed", price: "Price on request", image: sattvaTreatmentImages[16] },
  ],
};

const guestReviews: Review[] = [
  { guest: "Wellness Guest", quote: "An incredibly calming experience from start to finish. The ambience felt beautiful and considered." },
  { guest: "Spa Guest", quote: "A peaceful pause from a busy week. Every detail made the visit feel restorative." },
  { guest: "Returning Guest", quote: "Warm care, a serene setting and a treatment that left me feeling completely renewed." },
];

export const spas: Spa[] = [
  { slug: "ganga-spa", name: "Ganga Spa", tagline: "Relax. Rejuvenate. Rediscover Yourself.", description: "A serene wellness destination designed to offer a peaceful escape from everyday life. Every experience is thoughtfully designed around relaxation, rejuvenation and personal well-being.", heroImage: hero, galleryImages: gangaGalleryImages, aboutImages: [treatment, hammam], location: "University Road, Rajkot", address: "Shyam Dhara Complex - 2, Between Kotecha Chowk to Indira Circle, Straight to Pizza Country Street, Jalaram - 2, University Road, Rajkot - 360005", phone: "+91 75677 18839", whatsappNumber: "+91 99249 02909", email: "Available on request", hours: "11:30 AM – 8:30 PM — Open all days", instagram: "@gangaspauniversityroad", instagramUrl: "https://www.instagram.com/gangaspauniversityroad/", googleMapsUrl: "https://maps.app.goo.gl/nWp7Rvmc3Trrf9RG6", facebookUrl: "https://www.facebook.com/GangaSpaUniRoad/", reelUrl: gangaReelAsset.url, reelPoster: gangaReelPosterAsset.url, reviews: guestReviews, treatments: treatmentSets.ganga, tone: "ganga", contactVerified: true, galleryVerified: true },
  { slug: "amore-wellness", name: "Amore Wellness", tagline: "Where Relaxation Meets Modern Wellness.", description: "A contemporary wellness destination where comfort, thoughtful care and tranquility come together in a refined setting.", heroImage: treatment, galleryImages: amoreGalleryImages, aboutImages: [treatment, hammam], location: "Raiya Road, Rajkot", address: "2nd Floor, Near Raiya Telephone Exchange Chowk, Saurashtra Kala Kendra Main Road - 5, Near Hansa Provision Store Chowk, Opp Rani Bungalow, Above Pet Hut, Rajkot - 360005", phone: "+91 99989 00127", email: "Available on request", hours: "11:30 AM – 8:30 PM — Open all days", instagram: "@amore.wellness__", instagramUrl: "https://www.instagram.com/amore.wellness__/", googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Amore+Wellness+Saurashtra+Kala+Kendra+Main+Road+Raiya+Rajkot+360005", facebookUrl: "https://www.facebook.com/amorespa.wellness/", reelUrl: amoreReelAsset.url, reelPoster: amoreReelPosterAsset.url, reviews: guestReviews, treatments: treatmentSets.amore, tone: "amore", contactVerified: true, galleryVerified: true },
  { slug: "sattva-wellness", name: "Sattva Wellness", tagline: "Find Your Balance. Restore Your Energy.", description: "A peaceful sanctuary inspired by balance, harmony and mindful living, created for quiet restoration and personal well-being.", heroImage: details, galleryImages: sattvaGalleryImages, aboutImages: [hammam, hero], location: "Nana Mava, Rajkot", address: "2nd Floor, Reliance Mall, 150 Feet Ring Rd, Opp. Big Bazar Road, Nana Mava, Rajkot, Gujarat", phone: "+91 78747 71081", email: "Available on request", hours: "11:30 AM – 8:30 PM — Open all days", instagram: "@sattva_wellness_rajkot", instagramUrl: "https://www.instagram.com/sattva_wellness_rajkot/", googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Sattva+Wellness+Reliance+Mall+150+Feet+Ring+Road+Nana+Mava+Rajkot", facebookUrl: "https://www.facebook.com/people/SattvawellnessRajkot/61590350531456/", reelUrl: sattvaReelAsset.url, reelPoster: sattvaReelPosterAsset.url, reelUrl2: sattvaReelTwoAsset.url, reelPoster2: sattvaReelTwoPosterAsset.url, reviews: guestReviews, treatments: treatmentSets.sattva, tone: "sattva", contactVerified: true, galleryVerified: true },
];

export function getSpa(slug: Spa["slug"]): Spa {
  const spa = spas.find((item) => item.slug === slug);
  if (!spa) throw new Error(`Missing spa configuration: ${slug}`);
  return spa;
}

export const experiences = treatmentSets.ganga.map((item, index) => ({ ...item, tag: ["Relax • Restore", "Release • Renew", "Calm • Reconnect", "Together • Unwind"][index] }));

export const navItems = [
  { label: "Home", to: "/" },
  { label: "Our Spas", to: "/our-spas" },
  { label: "Our Philosophy", to: "/philosophy" },
  { label: "Our Reason", to: "/reason" },
  { label: "Our Motto", to: "/motto" },
  { label: "Contact", to: "/contact" },
] as const;
