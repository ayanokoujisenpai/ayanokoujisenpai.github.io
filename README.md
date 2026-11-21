# ayanokouji.github.io

## Adding an entry

1. Open `tools/entries.private.json` and add to `entries`:

   ```json
   {
     "number": "0917 123 4567",
     "status": "report",
     "amount": "PHP 350",
     "date": "March 3, 2026",
     "item": "a phone case",
     "updated": "September 19, 2026",
     "details": "Optional context to show on the proof page."
   }
   ```

   For a legitimate service, use:

   ```json
   {
      "number": "0918 123 4567",
      "status": "legit",
      "service": "the documented service name",
      "updated": "September 19, 2026"
   }
   ```

2. Run `node tools/build-data.js` (needs Node.js). It prints an opaque folder
   path such as `proofs/<hash>` for each entry. Put that entry's evidence images
   in the printed folder, then run the builder again. Supported formats are
   PNG, JPG/JPEG, WebP, GIF, and AVIF.
3. The proof page opens from a matching number-check result. The images and
   details are public once deployed; redact names, account numbers, addresses,
   payment references, and unrelated messages before adding them.
4. Commit and push `data.js`, the `proofs/` images, and any site files you
   changed. Never commit `tools/entries.private.json`.

Keep the generated salt unchanged after publishing; changing it changes the
folder identifiers and all lookup hashes.
