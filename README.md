# MNT Varahi Banquets Website

A premium, highly responsive, single-page informational business website built for **MNT Varahi Banquets**, located in Anand Nagar, Bandlaguda, Hyderabad. 

The website showcases the grandeur, premium amenities, and beautiful event spaces of the venue using a luxury design language featuring a traditional Indian festive color palette: Deep Maroon, Rich Gold, and subtle Teal accents over a clean, premium off-white/cream background.

---

## 🌟 Key Features

- **Single-Page Application (SPA) Flow:** Fluid, modern scrolling experience mapping clean transitions between presentation elements.
- **Dynamic JSON Architecture:** Powered by a `config.json` initialization file. The venue operator can effortlessly switch images, modify telephone lines, update social handles, or update Google Drive image delivery IDs without editing code.
- **Mobile-Responsive Optimization:** Completely optimized layout flow targeting multi-device screen spaces across smartphones, tablets, and desktops via CSS breakout media queries.
- **Strictly Informational (Zero-Form Constraint):** Fully compliant with standard interactive constraints—no contact input vectors, date pickers, or submit buttons. Call-to-action buttons bridge directly to live click-to-dial (`tel:`) lines and fixed WhatsApp application gateways.
- **Floating Interactive Actions:** A persistent, clean WhatsApp portal alongside a smooth fade-in "Back to Top" scrolling node for seamless navigation.

---

## 📂 Project Directory Structure

```text
mnt-varahi-banquets/
├── README.md           # Documentation, architectural manual, and guide
├── config.json         # Master configuration layer for data and remote assets
├── index.html          # Standard HTML5 document outline
├── package.json        # Node dependency environment mappings
├── script.js           # Vanilla JS core engine for dynamic data bindings
├── server.js           # Production-ready Node HTTP static file server
├── server.py           # Alternate zero-dependency Python-native static server
└── style.css           # Custom structural styling and responsive design layout

🛠️ Configuration Layer (config.json)
To update operational phone extensions, social media references, or swap local image files out for live cloud links, modify your config.json.

{
  "contact": {
    "instagram_link": "[https://www.instagram.com/mnt_varahi_banquets](https://www.instagram.com/mnt_varahi_banquets)",
    "whatsapp_number": "918886922972",
    "google_maps_embed": "[https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3808.045062450379!2d78.3998246!3d17.3615234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDIxJzQxLjUiTiA3OMKwMjMnNTkuNCJF!5e0!3m2!1sen!2sin!4v1670000000000!5m2!1sen!2sin](https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3808.045062450379!2d78.3998246!3d17.3615234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDIxJzQxLjUiTiA3OMKwMjMnNTkuNCJF!5e0!3m2!1sen!2sin!4v1670000000000!5m2!1sen!2sin)"
  },
  "images": {
    "logo": {
      "filename": "MNT_Varahi_logo.png",
      "gdrive_link": "MNT_Varahi_logo.png",
      "description": "Main business logo for top-left header"
    },
    "hero": {
      "filename": "hero_banner.jpg",
      "gdrive_link": "hero_banner.jpg"
    },
    "about": {
      "filename": "about_venue.jpg",
      "gdrive_link": "about_venue.jpg"
    },
    "gallery": [
      { "filename": "gallery_1.jpg", "gdrive_link": "gallery_1.jpg" },
      { "filename": "gallery_2.jpg", "gdrive_link": "gallery_2.jpg" },
      { "filename": "gallery_3.jpg", "gdrive_link": "gallery_3.jpg" },
      { "filename": "gallery_4.jpg", "gdrive_link": "gallery_4.jpg" },
      { "filename": "gallery_5.jpg", "gdrive_link": "gallery_5.jpg" },
      { "filename": "gallery_6.jpg", "gdrive_link": "gallery_6.jpg" }
    ],
    "icons": {
      "whatsapp_logo": "[https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg](https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg)"
    }
  }
}

⚠️ Cloud Storage Image Integration Tip: If replacing localized relative file paths with Google Drive references, ensure you extract the specific IMAGE_ID from your public sharing link and restructure the direct download string using the following pattern:

https://drive.google.com/uc?export=download&id=IMAGE_ID

🚀 How to Run the Project Locally
Ensure your custom assets (such as MNT_Varahi_logo.png, hero_banner.jpg, and your gallery images) are placed directly into your project root directory. Then, spin up a local server using one of the primary methods below:

Method A: Using Python (Zero-Dependency)
If your system runs a standard Python package environment, you can run the server directly without installing any third-party tools.

Open your terminal or command prompt inside the project folder:

Bash
   cd mnt-varahi-banquets
Execute the native background server script:

Bash
   python server.py
(Alternatively, run Python's instant module server via python -m http.server 3000)
3. View the application by accessing:

Plaintext
   http://localhost:3000
Method B: Using Node.js
Open your console inside the project workspace directory:

Bash
   cd mnt-varahi-banquets
Launch the standard static server instance:

Bash
   npm start
Open your browser and navigate to:

Plaintext
   http://localhost:3000
🎨 Layout Calibration Log (Custom Adjustments)
Header Space Calibration: The header structure includes a vertical padding reset (0px 20px), aligning your primary layout segments perfectly without adding extra space below the brand asset elements.

Logo Presentation Frame: Scaled cleanly to height: 85px within an active flex container wrapper to ensure clear, high-resolution text legibility across all browser viewports.