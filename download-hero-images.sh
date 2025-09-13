#!/bin/bash

# Script untuk download gambar hero background
# Pastikan curl atau wget tersedia di sistem

echo "🎨 TyaHair - Hero Background Image Downloader"
echo "=============================================="

# Create directory if not exists
mkdir -p public/images/hero

echo "📁 Directory created: public/images/hero"

# Function to download with curl
download_image() {
    local url=$1
    local filename=$2
    local description=$3
    
    echo "⬇️  Downloading: $description"
    echo "    URL: $url"
    echo "    Saving as: $filename"
    
    if command -v curl &> /dev/null; then
        curl -L -o "public/images/hero/$filename" "$url"
    elif command -v wget &> /dev/null; then
        wget -O "public/images/hero/$filename" "$url"
    else
        echo "❌ Error: Neither curl nor wget is available"
        return 1
    fi
    
    if [ -f "public/images/hero/$filename" ]; then
        echo "✅ Downloaded successfully: $filename"
        echo ""
    else
        echo "❌ Failed to download: $filename"
        echo ""
    fi
}

echo ""
echo "🔍 Recommended free stock photo sources:"
echo "1. Unsplash: https://unsplash.com/s/photos/hair-extensions"
echo "2. Pexels: https://www.pexels.com/search/hair%20extensions/"
echo "3. Pixabay: https://pixabay.com/images/search/hair%20styling/"
echo ""

echo "📝 Manual Download Instructions:"
echo "1. Visit the URLs above"
echo "2. Search for 'hair extensions', 'long hair', 'hair styling'"
echo "3. Download high-quality images (1920x1080 or higher)"
echo "4. Save them in public/images/hero/ with these names:"
echo "   - hero-bg-main.jpg (primary background)"
echo "   - hero-bg-alt.jpg (alternative background)"
echo "   - hero-mobile.jpg (mobile optimized version)"
echo ""

echo "🎯 Image Requirements:"
echo "- Resolution: Minimum 1920x1080px"
echo "- Format: JPG, PNG, or WebP"
echo "- Size: Max 2MB for optimal loading"
echo "- Colors: Warm tones (browns, golds, ambers)"
echo "- Subject: Beautiful hair, extensions, styling"
echo ""

echo "📱 Suggested Keywords:"
echo "- 'hair extensions golden brown'"
echo "- 'long wavy hair natural'"
echo "- 'beautiful hair close up'"
echo "- 'hair styling salon'"
echo "- 'natural hair texture'"
echo ""

echo "✨ Tips:"
echo "- Choose images with good contrast for text overlay"
echo "- Prefer horizontal/landscape orientation"
echo "- Look for warm, natural lighting"
echo "- Avoid overly busy backgrounds"
echo ""

echo "📄 After downloading, update the image paths in:"
echo "   src/components/HeroSection.tsx"
echo ""

echo "🎉 Happy downloading! Your TyaHair website will look amazing!"