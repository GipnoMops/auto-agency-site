AUTOAGENCY — inventory section update

Files:
- index.html: current page with the inventory navigation link and section inserted between the configurator and contact sections. It loads inventory.css and inventory.js.
- inventory.css: additive styles for the vehicle cards and responsive carousel.
- inventory.js: seven illustrative vehicle cards, Polish/English/Russian text, carousel controls, and a button that fills the existing vehicle enquiry form.

Important:
- No prices are displayed.
- The seven cards are explicitly labelled as examples. Replace their data and images in the `cars` array in inventory.js with verified real stock before publishing them as actual available cars.
- Keep inventory.css and inventory.js in the same folder as index.html and the existing style.css/script.js.
- Existing style.css and script.js are not overwritten. The new layer is loaded after them.
- Vehicle images are loaded from Unsplash URLs; for production, preferably download licensed/owned photos into the site's images folder and replace each `image` URL.
