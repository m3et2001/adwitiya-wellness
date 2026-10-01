# Ganga and Amore Treatment Menu Update

## What will change
- Replace the current treatment lists for **Ganga Spa** and **Amore Wellness** with the same 11 treatments provided:
  1. Holistic Swedish Massage
  2. Lomi Lomi Massage
  3. Balinese Massage
  4. Foot Reflexology
  5. Soul of Thailand
  6. Aromatherapy
  7. Deep Tissue
  8. Feather Deep
  9. Four Hand (Twin Massage)
  10. Normal Water Therapy
  11. Moroccan Hammam
  12. Turkish Hammam
- Keep **Sattva Wellness** unchanged.
- Use one premium Ganga massage image across all Ganga treatment cards and one separate premium Amore massage image across all Amore treatment cards.
- Keep unconfirmed durations and prices clearly marked as demo information.

## Design and behavior
- Preserve the current premium ADWITYA visual style.
- Update the treatment layout so each spa’s shared massage image remains clear, consistently cropped, and responsive on desktop and mobile.
- Keep each treatment’s booking action working with the existing Call/WhatsApp booking flow.

## Technical details
- Store treatment names and image references in the existing shared spa data.
- Generate and save two locally owned massage images: one for Ganga and one for Amore; no external image hotlinks.
- Verify both spa pages at desktop and mobile widths, including image loading, layout overflow, and booking controls.
