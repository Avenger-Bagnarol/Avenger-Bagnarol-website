for file in *.jpg *.jpeg *.JPG *.JPEG *.png *.PNG; do
    [ -f "$file" ] || continue

    convert "$file" \
        -auto-orient \
        -resize '800x800>' \
        -strip \
        -quality 78 \
        "../thumbnails/${file%.*}.webp"
done
