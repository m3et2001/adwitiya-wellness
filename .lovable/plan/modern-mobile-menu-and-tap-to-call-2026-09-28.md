# Modern Mobile Menu and Tap-to-Call

## What will change
- Restyle the opened mobile menu to match the supplied reference: warm ivory sheet, sage active row, forest circular arrows, numbered editorial links, and a strong bottom booking action.
- Keep all six current links, active-page state, close behavior, and booking dialog behavior unchanged.
- Fit the entire menu within a 393×724 mobile viewport without internal scrolling.
- Turn the footer phone number into a direct call link so tapping it opens the device dialer.

## Visual details
- Preserve Instrument Serif and Work Sans.
- Use existing ivory, forest, sage, border, and restrained gold design tokens.
- Use compact spacing and 44px-or-larger touch targets.
- Add subtle opening and row transitions while respecting reduced-motion settings.

## Verification
- Check the open menu at 393×724 for no overlap or horizontal/vertical overflow.
- Confirm every navigation item and the booking action still works.
- Confirm the footer phone link uses the correct `tel:` destination.
