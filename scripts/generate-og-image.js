const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function convertSvgToPng() {
  try {
    // Ensure the scripts directory exists
    const scriptsDir = path.resolve(__dirname);
    if (!fs.existsSync(scriptsDir)) {
      fs.mkdirSync(scriptsDir, { recursive: true });
    }

    // Path to SVG and output PNG
    const svgPath = path.join(__dirname, '../public/og-image.svg');
    const pngPath = path.join(__dirname, '../public/og-image.jpg');

    // Read SVG file
    const svgBuffer = fs.readFileSync(svgPath);

    // Convert SVG to PNG
    await sharp(svgBuffer)
      .jpeg({
        quality: 90,
        chromaSubsampling: '4:4:4'
      })
      .toFile(pngPath);

    console.log('OG image successfully generated at:', pngPath);
  } catch (error) {
    console.error('Error generating OG image:', error);
  }
}

convertSvgToPng(); 