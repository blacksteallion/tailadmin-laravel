<?php

namespace App\Services;

use App\Models\ThemePalette;

class ThemeService
{
    public function getActive(): ?ThemePalette
    {
        return ThemePalette::active()->first();
    }

    public function renderThemeCss(): string
    {
        $palette = $this->getActive();
        if (!$palette) {
            return '';
        }

        $colors = $palette->colors;
        $css = ":root {\n";

        foreach ($colors as $family => $shades) {
            foreach ($shades as $shade => $hex) {
                $css .= "  --color-{$family}-{$shade}: {$hex};\n";
            }
        }

        $css .= "}\n";
        return $css;
    }
}
