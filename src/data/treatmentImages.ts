const treatmentAssets = import.meta.glob("../assets/treatments/*.webp", {
  eager: true,
  import: "default",
}) as Record<string, string>;

function treatmentSet(prefix: string, count: number) {
  return Array.from({ length: count }, (_, index) => {
    const number = String(index + 1).padStart(2, "0");
    const image = treatmentAssets[`../assets/treatments/${prefix}-${number}.webp`];
    if (!image) throw new Error(`Missing treatment image: ${prefix}-${number}`);
    return image;
  });
}

export const gangaTreatmentImages = treatmentSet("ganga", 12);
export const amoreTreatmentImages = treatmentSet("amore", 12);
export const sattvaTreatmentImages = [
  ...treatmentSet("sattva-massage", 9),
  ...treatmentSet("sattva-premium", 2),
  ...treatmentSet("sattva-package", 6),
];