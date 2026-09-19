# ayanokouji.github.io

## Adding an entry

1. Open `tools/entries.private.json` and add to `entries`:

   ```json
   {
     "number": "0917 123 4567",
     "amount": "PHP 350",
     "date": "March 3, 2026",
     "item": "a phone case",
     "updated": "September 19, 2026"
   }
   ```

2. Run `node tools/build-data.js` (needs Node.js).
3. Commit and push `data.js` (and any site file you changed). Never the private file.
